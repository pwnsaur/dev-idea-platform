import jwt from "jsonwebtoken";
import postModel from "../models/postModel.js";

const validateUser = async (req, res, next) => {
  const post = await postModel.findById(req.params.id);
  if (req.user.id === post.author) {
    next();
  } else {
    return res.status(406).send("You don't have necessary access");
  }
};

export const validateSessionToken = (req, res, next) => {
  const token = req.cookies.session_token;
  if (!token) {
    return res.status(401).send("Not authorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
    if (error) {
      return res.status(404).send("Token is invalid!");
    }
    req.user = decoded;
    // console.log(req.route.path);
    if (req.route.path !== "/create") {
      return await validateUser(req, res, next);
    }
    next();
  });
};
