import { chatClient } from "../lib/stream.js";

/**
 * getStreamToken — Controller
 *
 * Generates a Stream Chat token for the authenticated user.
 * This token is used on the frontend to connect to Stream's
 * real-time chat service securely.
 *
 * Route:  GET /api/stream/token
 * Access: Protected (requires protectRoute middleware)
 */
export async function getStreamToken(req, res) {
  try {

    /**
     * Generate Stream Token using Clerk ID
     * 
     * We use clerkId (NOT MongoDB _id) because Stream Dashboard
     * identifies users by the same ID we registered them with.
     * req.user is already attached by protectRoute middleware.
     */
    const token = chatClient.createToken(req.user.clerkId);

    if (!token) {
      return res.status(404).json({
        success: false,
        message: "Stream token could not be created",
      });
    }

    /**
     * Return the token + user info to the frontend.
     * The client needs all 4 values to connect to Stream Chat:
     *   - token     → authenticates the user with Stream
     *   - userId    → identifies who is connecting
     *   - userName  → displayed in chat UI
     *   - userImage → avatar shown in chat UI
     * 
     */
    res.status(200).json({
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image,
    });

  } catch (error) {

    
    console.error("Error in getStreamToken controller:", error.message);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}