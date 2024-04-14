import express from "express";
import {
  getAllUsersHandler,
  getMeHandler,
  switchUserActiveHandler,
  updateUserRoleHandler,
  updateUserScoresHandler,
  updateUserDepartmentHandler,
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";

const router = express.Router();
router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get("/", restrictTo("superAdmin"), getAllUsersHandler);

// Get my info route
router.get("/me", getMeHandler);

// Admin Enable User route
router.post("/switch", restrictTo("superAdmin"), switchUserActiveHandler);

// Save my score route
router.patch("/score", restrictTo("user"), updateUserScoresHandler);

// Admin update user role route
router.patch("/role", restrictTo("superAdmin"), updateUserRoleHandler);

// Admin update user department
router.patch("/department", restrictTo("superAdmin"), updateUserDepartmentHandler);

export default router;
