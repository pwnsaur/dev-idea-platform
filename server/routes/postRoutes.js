import express from "express"
import router from "./authRoutes";

const route = express.Router();

route.get("/get");
router.put("/update/:id");
router.delete("/delete/:id");


export default router;