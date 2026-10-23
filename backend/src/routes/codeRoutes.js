import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { runCode } from "../controller/codeController.js";

const router = express.Router();

router.use(protectRoute);

router.post("/execute", runCode);

export default router;
