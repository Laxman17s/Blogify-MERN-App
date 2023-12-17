const express = require("express");

const {
  createPost,
  allPost,
  deletePost,
  updatePost,
  showPost,
  createComment,
  userPost,
} = require("../controller/postController");
const isAuthenticate = require("../middleware/Auth");

const router = express.Router();

// POST / createpost
router.route("/create").post(isAuthenticate, createPost);
// GET / allpost
router.get("/allpost", allPost);
// DELETE / deletepost
router.route("/delete/:id").delete(deletePost);
// PUT / updatePost
router.route("/update/:id").put(updatePost);
// GET // showsinglepost
router.route("/show/:id").get(showPost);
// post / comment
router.route("/comment/:id").post(isAuthenticate, createComment);
// get / post
router.route("/userpost").get(isAuthenticate, userPost);

module.exports = router;
