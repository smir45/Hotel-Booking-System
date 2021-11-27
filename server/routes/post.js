const express = require("express");
const router = express.Router();
// const userValidation = require('../middlewares/UserValidation')
const { Post } = require("../models");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/post");

router.post("/post", createPost);
router.get('/post/get', getAllPosts);
router.get("/post/:id", getPostById);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

module.exports = router;
