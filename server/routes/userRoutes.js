import express from "express";
import {getUsers, updateUser} from "../controllers/userController.js"
const router = express.Router();

router.get("/get", getUsers)
router.put("/update/:id", updateUser)

export default router;
