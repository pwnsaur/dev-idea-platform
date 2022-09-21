import express from "express";
import { validateSessionToken } from "../authValidation/authValidation";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postController";
import router from "./authRoutes";

const route = express.Router();

router.post("/create", validateSessionToken, createPost);
route.get("/get", getPosts);
router.put("/update/:id", validateSessionToken, updatePost);
router.delete("/delete/:id", validateSessionToken, deletePost);

export default router;
