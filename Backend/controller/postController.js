const Post = require("../model/post");
const Comment = require("../model/comments");

const createPost = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    let post = await Post.create({
      title,
      description,
      category,
      userId: req.user._id,
      username: req.user.name,
    });

    return res.status(200).send({ message: "Successfully user created", post });
  } catch (error) {
    return res.status(400).send({ message: "Unable create post ", error });
  }
};

// show seleted post
const showPost = async (req, res) => {
  try {
    const Id = req.params.id;
    const post = await Post.findById({ _id: Id }).populate("userId");

    if (!post) {
      return res.status(404).send({ message: "Post does not found" });
    }

    return res.status(200).send({ message: "Successfully post load", post });
  } catch (error) {
    return res.status(400).send({ message: "Unable show all post ", error });
  }
};

// show all post
const allPost = async (req, res) => {
  try {
    const allPosts = await Post.find({});

    return res
      .status(200)
      .send({ message: "Successfully data load", allPosts });
  } catch (error) {
    return res.status(400).send({ message: "Unable show all post ", error });
  }
};
// delete post
const deletePost = async (req, res) => {
  try {
    const Id = req.params.id;
    const post = await Post.findByIdAndDelete({ _id: Id });

    // if (!post) {
    //   return res.status(404).send({ message: "Post does not found" });
    // }

    return res.status(200).send({ message: "Deleted successfully", post });
  } catch (error) {
    return res.status(400).send({ message: "Unable to delete post ", error });
  }
};

// update post
const updatePost = async (req, res) => {
  try {
    const Id = req.params.id;

    const post = await Post.findByIdAndUpdate(
      { _id: Id },
      { ...req.body },
      { new: true }
    );

    //  if(!post){
    //   return res.status(404).send({message:"Post does not found"})
    //  }

    return res.status(200).send({ message: "Update successfully", post });
  } catch (error) {
    return res.status(400).send({ message: "Unable to update post " });
  }
};

const createComment = async (req, res) => {
  try {
    const userId = req.user._id;
    const blogId = req.params.id;
    const { content } = req.body;
    const comment = await Comment.create({
      content,
      postId: blogId,
      userId: userId,
    });

    return res
      .status(201)
      .send({ message: "Comment create successfully", comment });
  } catch (error) {
    return res.status(400).send({
      message: "faile to create comment",
      error,
    });
  }
};
// userpost
const userPost = async (req, res) => {
  try {
    // const Id =req.user._id;
    const userpost = await Post.find({ userId: req.user._id });

    if (!userpost) {
      return res.status(400).send({
        message: "your post does not find",
      });
    }
    return res.status(200).send({
      message: "Successfuly find your post",
      userpost,
    });
  } catch (error) {
    return res.status(400).send({
      message: "fail to find user post",
      error,
    });
  }
};

module.exports = {
  createPost,
  allPost,
  deletePost,
  updatePost,
  showPost,
  createComment,
  userPost,
};
