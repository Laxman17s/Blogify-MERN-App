const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "post",
    },
    date: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const Comment = model("comment", CommentSchema);

module.exports = Comment;
