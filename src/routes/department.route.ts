import express from "express";
import {
    getHandler,
    createHandler,
    updateHandler,
    deleteHandler,
} from "../controllers/department.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";

const router = express.Router();

router.get("/", getHandler);
router.get("/:id", getHandler);
router.post("/", createHandler);
router.post("/:id", updateHandler);
router.delete("/:id", deleteHandler);

export default router;
