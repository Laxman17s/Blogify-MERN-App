const User = require("../model/user");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let exitUser = await User.findOne({ email });

    if (exitUser) {
      return res.status(403).send({ message: "User already exit" });
    }

    exitUser = await User.create({
      name,
      email,
      password,
    });

    return res
      .status(200)
      .send({ exitUser, message: "Successfully user created" });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "something wrong to create in user", error });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(404)
        .send({ message: "User not Found . Please check you email " });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).send({ message: "Wrong password" });
    }

    const token = await user.generatedToken();

    return res
      .status(200)
      .send({ message: "Successfully login ", token, user: user });
  } catch (error) {
    return res.status(500).send({
      message: "Somethig error in login account",
      error,
    });
  }
};

const userLogOut = async (req, res) => {
  try {
    const exituser = req.user;
    // console.log(exituser.name);
    const user = await User.find({});
    return res.status(200).send({ user, exituser });
  } catch (error) {
    return res.status(400).send({ message: "something wrong in Logout" });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userLogOut,
};
