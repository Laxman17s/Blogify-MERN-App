const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "config/config.env" });

const JWT_TOKEN = process.env.JWT_TOKEN;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password must be at least 6 characters"],
      select: false,
      //select:false -not allow to show in sever only store and show/select at passwordcheck use-> select("+password")
    },
    post: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
  }
  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generatedToken = function () {
  const payload = {
    _id: this._id,
    name: this.name,
  };
  const token = jwt.sign(payload, process.env.JWT_TOKEN);
  return token;
};

const User = model("user", userSchema);

module.exports = User;
