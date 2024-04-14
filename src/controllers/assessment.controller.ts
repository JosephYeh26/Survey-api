import { NextFunction, Request, Response } from "express";
import assessmentModel, { Assessment } from "../models/assessment.model";

export const getHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (id === undefined) {
      const assessments = await assessmentModel.find();
      res.status(200).json({
        status: "success",
        data: {
          assessment: assessments,
        }
      })
    } else {
      const assessment = await assessmentModel.findById(id).lean();
      res.status(200).json({
        status: "success",
        data: {
          assessment,
        }
      })
    }
  } catch (err: any) {
    next(err);
  }
};

export const createHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const assessment = await assessmentModel.create({
      title: req.body.title,
    });
    res.status(200).json({
      status: "success",
      data: {
        assessment,
      }
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    let assessment = await assessmentModel.updateOne({ _id: id }, [
      { $set: { title: req.body.title, status: req.body.status } }
    ]);
    res.status(200).json({
      status: "success",
      data: {
        assessment,
      }
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await assessmentModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: "success",
    });
  } catch (err: any) {
    next(err);
  }
};