import fs from "fs";
import axios from "axios";

const API_URL = "https://leetcode.com/graphql";

// 🔹 load your 3880 slugs
const problemSlugs = JSON.parse(fs.readFileSync("src/problems.json", "utf-8"));

const CONCURRENCY_LIMIT = 5;
const RETRY_LIMIT = 3;
const SAVE_INTERVAL = 50; // save after every 50 problems

const query = `
query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    title
    titleSlug
    content
    difficulty
    topicTags {
      name
    }
  }
}
`;

// 🔹 retry logic
async function fetchWithRetry(slug, attempt = 1) {
  try {
    const res = await axios.post(
      API_URL,
      { query, variables: { titleSlug: slug } },
      {
        headers: {
          "Content-Type": "application/json",
          "Referer": "https://leetcode.com",
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    return res.data.data.question;
  } catch (err) {
    if (attempt <= RETRY_LIMIT) {
      console.log(`🔁 Retry ${attempt} for ${slug}`);
      await new Promise(r => setTimeout(r, 1000 * attempt));
      return fetchWithRetry(slug, attempt + 1);
    }

    console.error(`❌ Failed ${slug}`);
    return null;
  }
}

// 🔹 concurrency pool
async function runPool(tasks, limit) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const i = index++;
      results[i] = await tasks[i]();
    }
  }

  await Promise.all(Array(limit).fill(0).map(worker));
  return results;
}

async function main() {
  let existing = {};

  // 🔹 resume support
  if (fs.existsSync("problemDetails.json")) {
    existing = JSON.parse(fs.readFileSync("problemDetails.json"));
    console.log(`🔄 Resuming... already have ${Object.keys(existing).length}`);
  }

  const tasks = [];
  const slugsToFetch = problemSlugs.filter(s => !existing[s]);

  slugsToFetch.forEach((slug, idx) => {
    tasks.push(async () => {
      console.log(`Fetching (${idx + 1}/${slugsToFetch.length}): ${slug}`);

      const data = await fetchWithRetry(slug);
      if (!data) return;

      existing[slug] = {
        id: slug,
        title: data.title,
        difficulty: data.difficulty,
        category: data.topicTags.map(t => t.name).join(" • "),
        content: data.content,
      };

      // 🔥 periodic save
      if (Object.keys(existing).length % SAVE_INTERVAL === 0) {
        fs.writeFileSync(
          "problemDetails.json",
          JSON.stringify(existing, null, 2)
        );
        console.log("💾 Progress saved...");
      }
    });
  });

  await runPool(tasks, CONCURRENCY_LIMIT);

  // 🔥 final save
  fs.writeFileSync("problemDetails.json", JSON.stringify(existing, null, 2));

  console.log("✅ ALL DONE — data saved!");
}

main();