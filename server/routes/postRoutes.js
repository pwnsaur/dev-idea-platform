import express from "express";
import { validateSessionToken } from "../authValidation/authValidation.js";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/create", validateSessionToken, createPost);
router.get("/get", getPosts);
router.put("/update/:id", validateSessionToken, updatePost);
router.delete("/delete/:id", validateSessionToken, deletePost);

export default router;
