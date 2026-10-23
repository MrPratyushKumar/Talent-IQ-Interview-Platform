// Code execution via the free community Judge0 API (https://ce.judge0.com).
// Runs on the server: the browser cannot reach this host reliably and the
// request would also leak nothing but our traffic pattern to a third party.

const JUDGE0_API = "https://ce.judge0.com/submissions";

export const LANGUAGES = {
  javascript: 97,
  python: 92,
  java: 91,
};

// The community host rejects bursts of traffic, so submissions run one at a time.
let queue = Promise.resolve();

const schedule = (task) => {
  const result = queue.then(task, task);
  queue = result.then(
    () => new Promise((resolve) => setTimeout(resolve, 700)),
    () => new Promise((resolve) => setTimeout(resolve, 700)),
  );
  return result;
};

async function submit(languageId, sourceCode) {
  // Without a hard deadline a hung submission would jam the serial queue for
  // every later request.
  const response = await fetch(`${JUDGE0_API}?base64_encoding=false&wait=true`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language_id: languageId, source_code: sourceCode }),
    signal: AbortSignal.timeout(60000),
  });

  if (!response.ok) {
    throw new Error(`Execution service returned ${response.status}`);
  }

  return response.json();
}

// wait=true normally returns the finished submission; if the host hands back a
// token instead, poll for the result.
async function resolveSubmission(data) {
  if (!data?.token) return data;

  for (let attempt = 0; attempt < 15; attempt++) {
    const response = await fetch(`${JUDGE0_API}/${data.token}?base64_encoding=false`);
    if (response.ok) {
      const result = await response.json();
      if (result.status && result.status.id > 2) return result;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error("Execution timed out while waiting for a result");
}

/**
 * @param {string} language - javascript | python | java
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?:string}>}
 */
export async function executeCode(language, code) {
  const languageId = LANGUAGES[language];

  if (!languageId) {
    return { success: false, error: `Unsupported language: ${language}` };
  }

  try {
    const submission = await resolveSubmission(
      await schedule(() => submit(languageId, code)),
    );

    const stdout = submission.stdout || "";
    const stderr = submission.stderr || submission.compile_output || "";

    if (stderr) {
      return { success: false, output: stdout, error: stderr.trim() };
    }

    if (submission.status?.id !== 3) {
      return {
        success: false,
        output: stdout,
        error: submission.status?.description || "Execution failed",
      };
    }

    return { success: true, output: stdout.trim() || "No output" };
  } catch (error) {
    return { success: false, error: `Failed to execute code: ${error.message}` };
  }
}
