import { response } from "express";
import postModel from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new postModel({ ...req.body });
    await newPost.save();
    res.status(201).send("Succesfully created new post!");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    response.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    await postModel.findByIdAndUpdate(req.params.id, { $set: { ...req.body } });
    res.status(200).send("Succesfully updated post!");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    await postModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Succesfully deleted post!");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
