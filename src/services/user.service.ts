import { omit, get } from "lodash";
import { FilterQuery, QueryOptions } from "mongoose";
import config from "config";
import userModel, { User } from "../models/user.model";
import { excludedFields } from "../controllers/auth.controller";
import { signJwt } from "../utils/jwt";
import { DocumentType } from "@typegoose/typegoose";
import departmentModel, { Department } from "../models/department.model";

// CreateUser service
export const createUser = async (input: Partial<User>) => {
  const user = await userModel.create(input);
  return omit(user.toJSON(), excludedFields);
};

// Find User by Id
export const findUserById = async (id: string) => {
  const user = await userModel.findById(id).lean();
  return omit(user, excludedFields);
};

// Find All users
export const findAllUsers = async () => {
  return await userModel.find({ role: { $ne: "superAdmin" } });
};

// Find one user by any fields
export const findUser = async (
  query: FilterQuery<User>,
  options: QueryOptions = {}
) => {
  return await userModel.findOne(query, {}, options).select("+password");
};

// Sign Token
export const signToken = async (user: DocumentType<User>) => {
  // Sign the access token
  const access_token = signJwt({ sub: user._id }, "accessTokenPrivateKey", {
    expiresIn: `${config.get<number>("accessTokenExpiresIn")}m`,
  });

  // Sign the refresh token
  const refresh_token = signJwt({ sub: user._id }, "refreshTokenPrivateKey", {
    expiresIn: `${config.get<number>("refreshTokenExpiresIn")}m`,
  });

  // Return access token
  return { access_token, refresh_token };
};

export const switchUserActive = async (_id: string) => {
  return await userModel.updateOne({ _id }, [
    { $set: { permission: { $eq: [false, "$permission"] } } },
  ]);
};

export const updateUserScores = async (_id: string, _scores: number[][][]) => {
  return await userModel.updateOne({ _id }, { $set: { scores: _scores } });
};

export const updateUserRole = async (_id: string, role: string) => {
  return await userModel.updateOne({ _id }, { role });
}

export const updateUserDepartment = async (_id: string, department_id: string) => {
  return await userModel.updateOne({ _id }, { department: await departmentModel.findById(department_id) });
}