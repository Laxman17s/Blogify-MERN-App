const express = require("express");

const {
  userRegister,
  userLogin,
  userLogOut,
} = require("../controller/userController");
const isAuthenticate = require("../middleware/Auth");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send({ message: "Successfully user Route" });
});

router.route("/register").post(userRegister);

router.route("/login").post(userLogin);

router.route("/logout").get(isAuthenticate, userLogOut);

module.exports = router;
