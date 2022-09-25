import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectionToMongo from "./utils/connection.js";
import authRoute from "./routes/authRoutes.js";
import postRoute from "./routes/postRoutes.js";
import userRoute from "./routes/userRoutes.js";
import changeRoute from "./routes/changesRoute.js";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/auth", authRoute);
app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/changes", changeRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  connectionToMongo();
  console.log(`server started on port: ${port}`);
});
