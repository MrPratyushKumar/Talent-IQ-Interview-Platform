import { executeCode } from "../lib/judge0.js";

export const runCode = async (req, res) => {
  const { language, code } = req.body || {};

  if (!language || typeof code !== "string" || code.length === 0) {
    return res.status(400).json({ error: "language and code are required" });
  }

  if (code.length > 20000) {
    return res.status(400).json({ error: "Code is too long to execute" });
  }

  const result = await executeCode(language, code);
  return res.json(result);
};
