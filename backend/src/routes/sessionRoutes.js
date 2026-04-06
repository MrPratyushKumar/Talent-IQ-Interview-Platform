import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createSession,
  endSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
} from "../controller/sessionController.js";

const router = express.Router();

// create a Session
router.post("/", protectRoute, createSession);

// Active sessions
router.get("/active", protectRoute, getActiveSessions);

// recent Sessions
router.get("/my-recent", protectRoute, getMyRecentSessions);

// get session by id
router.get("/:id", protectRoute, getSessionById);
// join a session
router.post("/:id/join", protectRoute, joinSession);
//end the sessions
router.post("/:id/end", protectRoute, endSession);

export default router;
