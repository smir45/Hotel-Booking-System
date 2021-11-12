const express = require('express');
const router = express.Router();
const { Post } = require("../models");

const createPost = async (req, res) => {
  const postData =  req.body;
  try{
    const post = await Post.create(postData);
    res.status(201).json(post);
  }
  catch(err){
    res.status(400).json(err);
  }
};

const getAllPosts = async (req, res) => {
  try{
    const posts = await Post.findAll();
    res.status(200).json({
      message: 'success',
      data: posts
    })
  }
  catch(err){
    res.status(400).json({
      message: 'fail',
      data: err
    })
  }
 
};

module.exports = {
  createPost,
  getAllPosts,
};
