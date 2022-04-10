const express = require('express');
const router = express.Router();
const {postBlog, getBlogs, createBlog} = require("../../controllers/blog");
const upload = require('../../middlewares/multer');

router.post("/postblog", postBlog);
router.post("/createblogs", createBlog);
router.get("/getblogs", getBlogs);

module.exports = router;