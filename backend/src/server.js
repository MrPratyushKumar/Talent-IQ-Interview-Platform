import express from "express"
import { ENV } from "./lib/env.js";
import path from "path"

// Create an Express application instance
const app = express();

// Get the absolute path of the current working directory
const __dirname = path.resolve();

// Health check endpoint — returns 200 OK if the server is running
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "App is up and running and success"
  });
});

// Books endpoint — placeholder route for book-related data
app.get("/books", (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is the books endpoint"
  });
});

// Production-only block: serve the built React/Vite frontend
if (ENV.NODE_ENV === 'production') {

  // Serve static files (JS, CSS, images) from the frontend's build output folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // For any route not matched above, send back index.html (enables client-side routing)
  app.get("{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start the server and listen on the port defined in environment variables
app.listen(ENV.PORT, () => console.log("Server is running on port: ", ENV.PORT));