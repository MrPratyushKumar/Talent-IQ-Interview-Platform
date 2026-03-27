import express from "express"
import cors from "cors"
import path from "path"
import {serve} from "inngest/express"
import { clerkMiddleware } from '@clerk/express' 

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
// CORRECT — import both
import { inngest, functions } from "./lib/inngest.js";
import { protectRoute } from "./middleware/protectRoute.js"
import chatRoutes from "./routes/chatRoutes.js"


// Create an Express application instance
const app = express();

// Get the absolute path of the current working directory
const __dirname = path.resolve();

// middleware 
app.use(express.json());
//credentials:true meaning?? => means that our server allows a browser(frontend) to include cookies on request 
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}))

app.use("/api/inngest", serve({client:inngest, functions}))

app.use(clerkMiddleware());//this will adds auth field to request object: req.auth( )

app.use("/api/chat",chatRoutes)

// Health check endpoint — returns 200 OK if the server is running
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "App is up and running and success"
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
const startServer = async () => {
  try {
    await connectDB();
    // ✅ Fixed: use process.env.PORT with fallback
    const PORT = process.env.PORT || ENV.PORT || 5000;
    app.listen(PORT, () => {
      console.log("Server is running on PORT: ", PORT);
    });
  } catch (error) {
    console.log("Error starting the server", error);
  }
}

startServer();