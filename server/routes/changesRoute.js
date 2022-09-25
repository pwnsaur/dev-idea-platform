import express from "express";
import { getLatestChanges } from "../controllers/changeController.js";

const router = express.Router();

router.get("/get", getLatestChanges);

export default router;
