import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectionToMongo from "./utils/connection";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));



const port = process.env.PORT || 3001;
app.listen(port, () => {
  connectionToMongo();
  console.log(`server started on port: ${port}`);
});
