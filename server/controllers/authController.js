import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { set } from "mongoose";
import { updateChange } from "./changeController.js";
const STRONG_PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const registerUser = async (req, res) => {
  try {
    if (!STRONG_PWD_REGEX.test(req.body.password)) {
      return res.status(400).json({ message: "Password must be strong" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new userModel({
      ...req.body,
      password: hash,
    });
    await updateChange();
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
      return res.status(406).send("Username or password is incorrect!");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1 hour",
    });
    return res
      .cookie("session_token", token, { httpOnly: true })
      .status(201)
      .json({ message: "Successfully logged in", id: user._id });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const logoutUser = (req, res) => {
  try {
    res
      .clearCookie("session_token")
      .status(200)
      .send("Successfully logged out");
  } catch (error) {
    console.error(error);
    res.status(400).sent(error);
  }
};
