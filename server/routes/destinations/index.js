const express = require("express");
const router = express.Router();
// const userValidation = require('../middlewares/UserValidation')
const { Post } = require("../../models");
const {
  getAllPosts
} = require('../../controllers/destinations');

// router.post("/post", createPost);
router.get('/', getAllPosts);
// router.get("/post/:slug", getPostBySlug);
// router.put("/post/:id", updatePost);
// router.delete("/post/:id", deletePost);

module.exports = router;
