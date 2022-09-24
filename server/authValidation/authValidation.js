import jwt from "jsonwebtoken";
import postModel from "../models/postModel.js";

const midFunc = (req, res, next, id) => {
  if (req.user.id === id) {
    return next();
  } else {
    return res.status(406).send("You don't have necessary access");
  }
};

const pathMethod = {
  ["/post"]: async (req, res, next) => {
    const post = await postModel.findById(req.params.id);
    midFunc(req, res, next, post.author);
  },
  ["/user"]: async (req, res, next) => {
    midFunc(req, res, next, req.params.id);
  },
};

const validateUser = async (req, res, next) => {
  try {
    await pathMethod[req.baseUrl](req, res, next);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
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
    if (req.route.path !== "/create") {
      return await validateUser(req, res, next);
    }
    next();
  });
};
