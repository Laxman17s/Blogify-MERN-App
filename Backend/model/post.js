const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    // unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: String,
    required: true,
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  createdDate: {
    type: Date,
  },
});

const Post = model("post", postSchema);
module.exports = Post;
