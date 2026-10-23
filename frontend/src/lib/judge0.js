// Code execution via the free community Judge0 API (https://ce.judge0.com).
// Replaces Piston, whose public endpoint became whitelist-only in Feb 2026.

const JUDGE0_API = "https://ce.judge0.com/submissions";

const LANGUAGES = {
  javascript: { id: 97, name: "JavaScript (Node.js 20.17.0)" },
  python: { id: 92, name: "Python (3.11.2)" },
  java: { id: 91, name: "Java (JDK 17.0.6)" },
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
  const response = await fetch(`${JUDGE0_API}?base64_encoding=false&wait=true`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ language_id: languageId, source_code: sourceCode }),
  });

  if (!response.ok) {
    throw new Error(`Execution service returned ${response.status}`);
  }

  return response.json();
}

// wait=true normally returns the finished submission; if the host hands back a
// token instead, poll for the result.
async function resolveSubmission(data) {
  if (!data?.token || data.status) return data;

  for (let attempt = 0; attempt < 15; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `${JUDGE0_API}/${data.token}?base64_encoding=false`,
    );
    if (!response.ok) continue;

    const result = await response.json();
    if (result.status && result.status.id > 2) return result;
  }

  throw new Error("Execution timed out while waiting for a result");
}

/**
 * @param {string} language - javascript | python | java
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?:string}>}
 */
export async function executeCode(language, code) {
  const languageConfig = LANGUAGES[language];

  if (!languageConfig) {
    return { success: false, error: `Unsupported language: ${language}` };
  }

  try {
    const submission = await resolveSubmission(
      await schedule(() => submit(languageConfig.id, code)),
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
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}
