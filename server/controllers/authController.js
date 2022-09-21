import bcrypt from "bcrypt";
import userModel from "../models/userModel";
import jwt from "jsonwebtoken";
import { set } from "mongoose";

export const registerUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new userModel({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("New user is created");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User not found!");
    }
    const pwdIsCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!pwdIsCorrect) {
      return set.status(406).send("Username or password is incorrect!");
    }
    const token = jwt.sign({ id: person._id }, process.env.JWT_SECRET, {
      expiresIn: "1 hour",
    });
    return res
      .cookie("session_token", token, { httpOnly: true })
      .status(201)
      .send("Succesfully logged in!");
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = (req, res) => {
  try {
    res
      .clearCookies("session_token")
      .status(200)
      .send("Successfully logged out");
  } catch (error) {
    console.error(error);
  }
};
