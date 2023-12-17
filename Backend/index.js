const express = require("express");
const dotenv = require("dotenv");
const connetToDatabase = require("./config/db");
const cookieParser = require("cookie-parser");
const userRouter = require("./routers/userRoute");
const postRouter = require("./routers/postRoute");

dotenv.config({ path: "config/config.env" });

const app = express();

const PORT = process.env.PORT || 8002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connetToDatabase();

app.use("/user", userRouter);

app.use("/post", postRouter);

// app.use("/comments",commentRoute)

app.listen(PORT, () => {
  console.log(`Server is runing at port ${PORT}`);
});
