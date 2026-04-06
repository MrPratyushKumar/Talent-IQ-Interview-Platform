import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";

// Utility: Standard API response
const sendResponse = (res, status, success, message, data = {}) => {
  return res.status(status).json({
    success,
    message,
    ...data,
  });
};

// Utility: Validate difficulty
const isValidDifficulty = (difficulty) => {
  return ["easy", "medium", "hard"].includes(difficulty);
};

// Generate unique callId
const generateCallId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
};



// ✅ CREATE SESSION
export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    // Validation
    if (!problem || !difficulty) {
      return sendResponse(res, 400, false, "Problem and difficulty are required");
    }

    if (!isValidDifficulty(difficulty)) {
      return sendResponse(res, 400, false, "Invalid difficulty level");
    }

    const callId = generateCallId();

    // Create session in DB
    const session = await Session.create({
      problem,
      difficulty,
      host: userId,
      callId,
    });

    // Create Stream Video Call
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: {
          problem,
          difficulty,
          sessionId: session._id.toString(),
        },
      },
    });

    // Create Chat Channel
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    return sendResponse(res, 201, true, "Session created successfully", {
      session,
    });
  } catch (error) {
    console.error("Error in createSession:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
}



// ✅ GET ACTIVE SESSIONS
export async function getActiveSessions(_, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    if (!sessions || sessions.length === 0) {
      return sendResponse(res, 404, false, "No active sessions found");
    }

    return sendResponse(res, 200, true, "Active sessions fetched", {
      sessions,
    });
  } catch (error) {
    console.error("Error in getActiveSessions:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
}



// ✅ GET MY RECENT SESSIONS
export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    if (!sessions || sessions.length === 0) {
      return sendResponse(res, 404, false, "No recent sessions found");
    }

    return sendResponse(res, 200, true, "Recent sessions fetched", {
      sessions,
    });
  } catch (error) {
    console.error("Error in getMyRecentSessions:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
}



// ✅ GET SESSION BY ID
export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) {
      return sendResponse(res, 404, false, "Session not found");
    }

    return sendResponse(res, 200, true, "Session fetched successfully", {
      session,
    });
  } catch (error) {
    console.error("Error in getSessionById:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
}



// ✅ JOIN SESSION
export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) {
      return sendResponse(res, 404, false, "Session not found");
    }

    if (session.status !== "active") {
      return sendResponse(res, 400, false, "Session is not active");
    }

    // Prevent host joining as participant
    if (session.host.toString() === userId.toString()) {
      return sendResponse(res, 400, false, "Host cannot join as participant");
    }

    // Prevent duplicate join
    if (session.participant?.toString() === userId.toString()) {
      return sendResponse(res, 400, false, "Already joined this session");
    }

    if (session.participant) {
      return sendResponse(res, 409, false, "Session is full");
    }

    session.participant = userId;
    await session.save();

    // Add to chat channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    return sendResponse(res, 200, true, "Joined session successfully", {
      session,
    });
  } catch (error) {
    console.error("Error in joinSession:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
}



// ✅ END SESSION
export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) {
      return sendResponse(res, 404, false, "Session not found");
    }

    if (session.host.toString() !== userId.toString()) {
      return sendResponse(res, 403, false, "Only host can end the session");
    }

    if (session.status === "completed") {
      return sendResponse(res, 400, false, "Session already completed");
    }

    // Delete Stream Video
    const call = streamClient.video.call("default", session.callId);
    await call.delete({ hard: true });

    // Delete Chat Channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();

    session.status = "completed";
    await session.save();

    return sendResponse(res, 200, true, "Session ended successfully", {
      session,
    });
  } catch (error) {
    console.error("Error in endSession:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
}