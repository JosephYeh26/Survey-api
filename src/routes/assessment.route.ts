import express from "express";
import {
  getHandler,
  createHandler,
  updateHandler,
  deleteHandler,
} from "../controllers/assessment.controller";

const router = express.Router();

router.get("/", getHandler);
router.get("/:id", getHandler);
router.post("/", createHandler);
router.post("/:id", updateHandler);
router.delete("/:id", deleteHandler);

export default router;