import { NextFunction, Request, Response } from "express";
import departmentModel, { Department } from "../models/department.model";

export const getHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id;
		if (id === undefined) {
			const department = await departmentModel.find();
			res.status(200).json({
				status: "success",
				data: {
					department
				}
			})
		} else {
			const department = await departmentModel.findById(id).lean();
			res.status(200).json({
				status: "success",
				data: {
					department,
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
		const department = await departmentModel.create({
			title: req.body.title,
		});
		res.status(200).json({
			status: "success",
			data: {
				department,
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
		const department = await departmentModel.updateOne({ _id: id }, { title: req.body.title });
		res.status(200).json({
			status: "success",
			data: {
				department,
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
    await departmentModel.deleteOne({ _id: req.params.id });
		res.status(200).json({
			status: "success",
		});
	} catch (err: any) {
		next(err);
	}
};