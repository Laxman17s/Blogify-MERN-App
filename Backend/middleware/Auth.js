const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "config/config.env" });

const JWT_TOKEN = process.env.JWT_TOKEN;

const isAuthenticate = (req, res, next) => {
  // const headerToken = req.headers.authorization; because i send only token
  // req.headers?.authorization.startWith("Bearer") than is split(" ")[1]
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[0];
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    req.user = decoded;

    next();
  }
  if (!token) {
    return res.send({ message: "Login first because Token is expire" });
  }
};

module.exports = isAuthenticate;

/* 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTdhODE3MDY0YmU0ZDEzMDJjNWIxMmMiLCJuYW1lIjoibHVja3kiLCJpYXQiOjE3MDI1NjI0MTN9.uyiuea835FgGVOYmbIqjyAxyYdAeB2hk7dEJ3TrTznw
*/
