import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MongoMemoryServer } from "mongodb-memory-server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../.mongo-data");
mkdirSync(dataDir, { recursive: true });

const mongod = await MongoMemoryServer.create({
  instance: { port: 27018, dbPath: dataDir, storageEngine: "wiredTiger" },
});

const uri = mongod.getUri("talent-iq");
process.env.DB_URL = uri;
console.log("Local MongoDB is running at:", uri);
console.log("Data persists in backend/.mongo-data - set DB_URL in .env to use Atlas instead.");

await import("../src/server.js");

const shutdown = async () => {
  await mongod.stop();
  process.exit(0);
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
