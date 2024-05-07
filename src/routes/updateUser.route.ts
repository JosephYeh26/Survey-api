import express from "express";
import {
  updateUserRoleHandler,
  updateUserDepartmentHandler,
} from "../controllers/user.controller";

const router = express.Router();

// Admin update user role route
router.patch("/role",  updateUserRoleHandler);

// Admin update user department
router.patch("/department",  updateUserDepartmentHandler);

export default router;
