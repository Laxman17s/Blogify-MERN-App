const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "config/config.env" });

const JWT_TOKEN = process.env.JWT_TOKEN;

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    name: user.name,
  };
  return jwt.sign(payload, process.env.JWT_TOKEN);
};

const validateToken = (token) => {
  const payload = jwt.verify(token, process.env.JWT_TOKEN);
  return payload;
};

module.exports = {
  generateToken,
  validateToken,
};
