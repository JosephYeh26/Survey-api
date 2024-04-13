import express from "express";
import {
  getAllUsersHandler,
  getMeHandler,
  switchUserActiveHandler,
  updateUserScoresHandler,
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";

const router = express.Router();
router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get("/", restrictTo("admin"), getAllUsersHandler);

// Get my info route
router.get("/me", getMeHandler);

// Admin Enable User route
router.post("/switch", restrictTo("admin"), switchUserActiveHandler);

// Save my score route
router.patch("/score", restrictTo("user"), updateUserScoresHandler);

export default router;
