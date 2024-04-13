import { NextFunction, Request, Response } from "express";
import {
  findAllUsers,
  switchUserActive,
  updateUserScores,
} from "../services/user.service";

export const getMeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const switchUserActiveHandler = async (
  req: Request<{}, {}, { _id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    await switchUserActive(req.body._id);
    res.status(201).json({
      status: "success",
      message: "User permission changed successfully",
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateUserScoresHandler = async (
  req: Request<{}, {}, { scores: number[][][] }>,
  res: Response,
  next: NextFunction
) => {
  try {
    await updateUserScores(res.locals.user._id, req.body.scores);
    res.status(201).json({
      status: "success",
      message: "User score saved successfully",
    });
  } catch (err: any) {
    next(err);
  }
};
