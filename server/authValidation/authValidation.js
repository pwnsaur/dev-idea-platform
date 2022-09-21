import jwt from "jsonwebtoken";

const validateUser = (req, res, next) => {
  if (req.user.id === req.params.id) {
    next();
  } else {
    return res.status(406).send("You don't have necessary access");
  }
};

export const validateSessionToken = (req, res, next) => {
  const token = req.cookie.session_token;
  if (!token) {
    return res.status(401).send("Not authorized!");
  }
  jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
    if (error) {
      return res.status(404).send("Token is invalid!");
    }
    req.user = decoded;
    validateUser(req, res, next);
  });
};
