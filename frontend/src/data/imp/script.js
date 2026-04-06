import axios from "axios";
import { writeFileSync } from "node:fs";

const API_URL = "https://leetcode.com/api/problems/all/";

async function fetchProblems() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "axios/1.14.0",
        Referer: "https://leetcode.com/problemset/all/",
      },
    });

    const data = response.data;
    if (!data || !Array.isArray(data.stat_status_pairs)) {
      throw new Error("Unexpected response format from LeetCode API.");
    }

    const difficultyMap = ["Unknown", "Easy", "Medium", "Hard"];
    const formatted = [];

    data.stat_status_pairs.forEach((item) => {
      const stat = item.stat || {};
      const slug = stat.question__title_slug;
      if (!slug) return;
      formatted.push(slug);
    });

    writeFileSync("problems.json", JSON.stringify(formatted, null, 2), "utf8");
    console.log(
      `✅ problems.json generated with ${Object.keys(formatted).length} problems.`,
    );
  } catch (error) {
    console.error("Failed to fetch LeetCode problems:", error.message || error);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Body:", JSON.stringify(error.response.data));
    }
    process.exit(1);
  }
}

fetchProblems();
