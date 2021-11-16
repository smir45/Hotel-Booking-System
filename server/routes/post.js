const express = require('express');
const router = express.Router();
const { createPost, getAllPosts,getPostById, updatePost, deletePost} = require('../controllers/post')

router.post('/post', createPost);
router.get('/post', getAllPosts);
router.get('/post/:id', getPostById);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


module.exports = router;