import express from "express";
import { getUsers, updateUser } from "../controllers/userController.js";
import { validateSessionToken } from "../authValidation/authValidation.js";
const router = express.Router();

router.get("/get", getUsers);
router.put("/update/:id", validateSessionToken, updateUser);

export default router;
