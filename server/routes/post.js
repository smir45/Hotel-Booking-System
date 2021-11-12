const express = require('express');
const router = express.Router();
const { createPost, getAllPosts} = require('../controllers/post')

router.post('/create', createPost);
router.get('/posts', getAllPosts);

module.exports = router;