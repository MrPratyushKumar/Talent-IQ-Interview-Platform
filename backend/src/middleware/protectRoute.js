import { requireAuth } from '@clerk/express';
import User from '../models/User.js';

/**
 * protectRoute - Authentication & Authorization Middleware
 * 
 * Runs as an array of middleware functions in sequence:
 *   1. Verify Clerk token (requireAuth)
 *   2. Extract Clerk user ID
 *   3. Find user in MongoDB
 *   4. Attach user to request object
 */
export const protectRoute = [

  /**
   * STEP 1 — requireAuth()
   * Clerk's built-in middleware.
   * Validates the incoming JWT token automatically.
   * If token is missing or invalid, it blocks the request
   * immediately and returns 401 — your code never runs.
   */
  requireAuth(), 

  /**
   * STEP 2, 3, 4 — Custom async middleware
   * Runs only after Clerk confirms the token is valid.
   */
  async (req, res, next) => {
    try {

      /**
       * STEP 2 — Extract Clerk User ID
       * req.auth() is injected by Clerk's requireAuth() above.
       * userId is Clerk's own ID (not your MongoDB _id).
       * If somehow missing after auth, return 401.
       */
      const clerkId = req.auth().userId;

      if (!clerkId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - invalid token",
        });
      }

      /**
       * STEP 3 — Find User in Database
       * Look up our own MongoDB user record using the Clerk ID.
       * This links Clerk's identity to your app's user data.
       * If user doesn't exist in DB yet, return 404.
       */
      const user = await User.findOne({ clerkId });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found in DB",
        });
      }

      /**
       * STEP 4 — Attach User to Request
       * Store the full MongoDB user object on req.user.
       * Any route handler after this middleware can now
       * access req.user without hitting the DB again.
       */
      req.user = user;

      /**
       * next() — Pass control to the next middleware or route handler.
       * Only called if all checks above passed successfully.
       */
      next();

    } catch (error) {
      /**
       * Global Error Handler
       * Catches any unexpected errors (DB down, network issues, etc.)
       * Logs the error server-side and returns a generic 500.
       */
      console.error("Error in protectRoute middleware", error);

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
];