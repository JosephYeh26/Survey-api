import { NextFunction, Request, Response } from "express";
import surveyModel, { Survey } from "../models/survey.model";
import assessmentModel, { Assessment } from "../models/assessment.model";

export const getHandler = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.params.id;
		if (id === undefined) {
			const surveies = await surveyModel.find();
			res.status(200).json({
				status: "success",
				data: {
					survey: surveies,
				}
			})
		} else {
			const survey = await surveyModel.findById(id).lean();
			res.status(200).json({
				status: "success",
				data: {
					survey,
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
		const survey = await surveyModel.create({
			title: req.body.title,
			questions: req.body.questions,
		});
		const assessmentId = req.body.assessment_id;
		let assessment = await assessmentModel.findById(assessmentId);
		assessment?.surveies.push(survey);
		await assessment?.save();
		res.status(200).json({
			status: "success",
			data: {
				survey,
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
		let survey = await surveyModel.findById(id);
		survey?.title = req.body.title;
		survey?.questions = req.body.questions;
		await survey?.save();
		const assessmentId = req.body.assessment_id;
		let assessment = await assessmentModel.findById(assessmentId);
		console.log(assessment)
		assessment?.surveies = assessment?.surveies.filter(val => String(val._id) !== id);
		assessment?.surveies.push(survey);
		await assessment?.save();
		res.status(200).json({
			status: "success",
			data: {
				survey,
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
		const assessmentId = req.body.assessment_id;
		let assessment = await assessmentModel.findById(assessmentId);
		assessment?.surveies = assessment?.surveies.filter(val => String(val._id) !== req.params.id);
		await assessment?.save();
		const survey = await surveyModel.findOneAndDelete({ _id: req.params.id });
		res.status(200).json({
			status: "success",
		});
	} catch (err: any) {
		next(err);
	}
};