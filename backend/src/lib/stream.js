import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

// Building these clients throws when a key is missing, which would crash the
// process before any request can be served - so they stay null instead.
const hasCredentials = Boolean(apiKey && apiSecret);

if (!hasCredentials) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET is missing: video & chat are disabled");
}

export const chatClient = hasCredentials ? StreamChat.getInstance(apiKey, apiSecret) : null;

export const streamClient = hasCredentials ? new StreamClient(apiKey, apiSecret) : null;

// upsert means both create and update the data
export const upsertStreamUser = async (userData) => {
  if (!chatClient) return;

  try {
    await chatClient.upsertUsers(userData);
    console.log("Stream user upserting successfully:", userData);
  } catch (error) {
    console.log("Error upserting Stream user", error);
  }
};

//
export const deleteStreamUser = async (userId) => {
  if (!chatClient) return;

  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting the Stream user:", error);
  }
};
