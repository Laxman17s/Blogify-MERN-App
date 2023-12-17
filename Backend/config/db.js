const mongoose = require("mongoose");

require("dotenv").config({ path: "config.env" });

const connetToDatabase = async () => {
  const MONGODB_URL = process.env.MONGODB_URL;
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Successfully connect to MongoDB");
  } catch (error) {
    console.log("Something error while to connect to database", error);
  }
};

module.exports = connetToDatabase;
