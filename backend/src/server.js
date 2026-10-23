import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDist = path.join(__dirname, "../../frontend/dist");

// middleware
app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(
  cors({
    origin: (origin, callback) => {
      // same-origin deploys (no Origin header) and local development are always fine
      if (!origin || ENV.NODE_ENV !== "production" || origin === ENV.CLIENT_URL) {
        return callback(null, true);
      }
      callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(frontendDist));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

const MAX_DB_ATTEMPTS = 5;

// Retrying instead of exiting keeps the process (and /health) alive when the
// database is briefly unreachable, which otherwise looks like a silent crash.
const connectWithRetry = (attempt = 1) => {
  connectDB().catch((error) => {
    console.error(`MongoDB connection attempt ${attempt} failed:`, error.message);

    if (attempt < MAX_DB_ATTEMPTS) {
      setTimeout(() => connectWithRetry(attempt + 1), attempt * 5000);
    } else {
      console.error("MongoDB still unreachable - API is listening but data routes will fail");
    }
  });
};

const startServer = () => {
  connectWithRetry();
  app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
};

startServer();
