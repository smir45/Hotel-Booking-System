const express = require('express');
const router = express.Router();
const {postBlog, getBlogs, createBlog, deleteBlog, getBlogBySlug} = require("../../controllers/blog");
const upload = require('../../middlewares/multer');

router.post("/postblog", postBlog);
router.post("/createblogs", createBlog);
router.get("/getblogs", getBlogs);
router.delete("/deleteblog/:id", deleteBlog);
router.get("/getblogs/:slug", getBlogBySlug);
module.exports = router;