import { response } from "express";
import postModel from "../models/postModel.js";
import userModel from "../models/userModel.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new postModel({
      ...req.body,
      author: req.user.id,
      createdAt: Date(),
    });
    const user = await userModel.findById(req.user.id);
    user.posts = [...user.posts, newPost._id];
    await user.save();
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
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    if (req.body.author) {
      delete req.body.author;
    }
    await postModel.findByIdAndUpdate(req.params.id, {
      $set: { ...req.body, updatedAt: Date() },
    });
    res.status(200).send("Succesfully updated post!");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    await postModel.findByIdAndDelete(req.params.id);
    const user = await userModel.findById(req.user.id);
    user.posts = user.posts.filter((post) => post !== req.params.id);
    await user.save();
    res.status(200).send("Succesfully deleted post!");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
