const express = require('express');
const router = express.Router();
const {postBlog, getBlogs} = require("../../controllers/blog");
const upload = require('../../middlewares/multer');

router.post("/postblog", upload.single("image"), postBlog);
router.get("/getblogs", getBlogs);

module.exports = router;