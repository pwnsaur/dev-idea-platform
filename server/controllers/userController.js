import userModel from "../models/userModel.js";
// import { ValidateFn } from "mongoose";


export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { password, username, posts, ...data } = req.body;
    userModel.findByIdAndUpdate(req.params.id, { $set: { ...data } });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
