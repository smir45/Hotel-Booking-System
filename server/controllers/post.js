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
    res.status(200).json({ posts });
  }
  catch(err){
    res.status(400).json({
      message: 'fail',
      data: err
    })
  }
 
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({
    where: { id }
  });
  if(!post){
    res.status(404).json({
      message: 'post doesnot exists',
    })
  }
  try{
    const post = await Post.findOne({
      where: { id }
    });
    res.status(200).json({ post });
  }
  catch(err){
    res.status(400).json({
      message: 'fail',
      data: err
    })
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const postData = req.body;
  const postdata = await Post.findOne({
    where: { id }
  });
  if(!postdata){
    res.status(404).json({
      message: 'post doesnot exists',
    })
  }
  try{
    const post = await Post.update(postData, {
      where: { id }
    });
    res.status(200).json({ message: "Updated Successfully", post });
  }
  catch(err){
    res.status(400).json({
      message: 'fail',
      data: err
    })
  } 
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try{
    const post = await Post.destroy({
      where: { id }
    });
    res.status(200).json({ post });
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
  getPostById,
  updatePost,
  deletePost
};
