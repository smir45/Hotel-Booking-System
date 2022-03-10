const express = require("express");
const router = express.Router();
// const userValidation = require('../middlewares/UserValidation')
const { Post } = require("../../models");
const {
  getAllPosts,
  postDestination,
    getDestinationByCity
} = require('../../controllers/destinations');

router.post("/post", postDestination);
router.get('/', getAllPosts);
router.get("/:city", getDestinationByCity);
// router.get("/post/:slug", getPostBySlug);
// router.put("/post/:id", updatePost);
// router.delete("/post/:id", deletePost);

module.exports = router;
