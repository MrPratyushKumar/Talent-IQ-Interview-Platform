import { readFileSync, writeFileSync } from "node:fs";
import * as cheerio from "cheerio";

const INPUT_FILE = "problemDetails.json";
const OUTPUT_FILE = "problemDatabase.json";

function parseProblemContent(content) {
  if (!content) return { statement: "", examples: [], constraints: [] };

  const $ = cheerio.load(content);

  // Remove script and style tags
  $("script, style").remove();

  // Extract statement (usually the first paragraph or until examples)
  let statement = "";
  const paragraphs = $("p").toArray();
  for (const p of paragraphs) {
    const text = $(p).text().trim();
    if (
      text &&
      !text.toLowerCase().includes("example") &&
      !text.toLowerCase().includes("constraint")
    ) {
      statement += text + "\n";
    } else {
      break;
    }
  }
  statement = statement.trim();

  // Extract examples
  const examples = [];
  $(".example-block").each((i, block) => {
    const $block = $(block);
    const input =
      $block
        .find('p:contains("Input:")')
        .next("span.example-io")
        .text()
        .trim() || $block.find("span.example-io").first().text().trim();
    const output =
      $block
        .find('p:contains("Output:")')
        .next("span.example-io")
        .text()
        .trim() || $block.find("span.example-io").eq(1).text().trim();
    const explanation =
      $block
        .find('p:contains("Explanation")')
        .text()
        .replace("Explanation", "")
        .trim() || $block.find("p").last().text().trim();
    examples.push({ input, output, explanation });
  });

  // Extract constraints (usually in <ul> or after "Constraints" heading)
  let constraints = [];
  const constraintLists = $("ul").toArray();
  for (const ul of constraintLists) {
    const items = $(ul)
      .find("li")
      .map((i, li) => $(li).text().trim())
      .get();
    if (items.length > 0) {
      constraints = constraints.concat(items);
    }
  }

  return {
    statement: statement || $("body").text().trim(),
    examples,
    constraints,
  };
}

function main() {
  try {
    const data = JSON.parse(readFileSync(INPUT_FILE, "utf8"));
    const parsedData = {};

    for (const [slug, problem] of Object.entries(data)) {
      const parsedContent = parseProblemContent(problem.content);
      parsedData[slug] = {
        ...problem,
        ...parsedContent,
      };
      delete parsedData[slug].content;
      delete parsedData[slug].explanation; // remove if present
    }

    writeFileSync(OUTPUT_FILE, JSON.stringify(parsedData, null, 2), "utf8");
    console.log(
      `✅ ${OUTPUT_FILE} generated with ${Object.keys(parsedData).length} parsed problems.`,
    );
  } catch (error) {
    console.error("Failed to parse problems:", error.message);
    process.exit(1);
  }
}

main();
