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

// 🔐 Apply auth middleware globally (cleaner)
router.use(protectRoute);

// ✅ CREATE SESSION
router.post("/", createSession);

// ✅ GET ACTIVE SESSIONS
router.get("/active", getActiveSessions);

// ✅ GET MY RECENT SESSIONS
router.get("/my-recent", getMyRecentSessions);

// ✅ GET SESSION BY ID
router.get("/:id", getSessionById);

// ✅ JOIN SESSION
router.post("/:id/join", joinSession);

// ✅ END SESSION (better REST practice)
router.patch("/:id/end", endSession);

export default router;