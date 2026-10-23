// Code execution runs on our backend (/api/code/execute), which forwards the
// submission to the Judge0 community API. Calling Judge0 straight from the
// browser hangs: the free host throttles and drops direct client traffic.

import axiosInstance from "./axios";

/**
 * @param {string} language - javascript | python | java
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?:string}>}
 */
export async function executeCode(language, code) {
  try {
    const { data } = await axiosInstance.post("/code/execute", { language, code });
    return data;
  } catch (error) {
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.message ||
      "Unknown error";
    return { success: false, error: `Failed to execute code: ${message}` };
  }
}
