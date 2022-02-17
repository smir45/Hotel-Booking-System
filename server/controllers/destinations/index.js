const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const {Destinations} = require("../../models");

module.exports.getAllPosts = async (req, res, next) => {
 try{
   const posts = await Destinations.findAll()
    res.status(200).json(posts);
    console.log(posts);

 }catch(err){
   res.status(500).json({
      message: "Error retrieving destinations",
      error: err
    });
    console.log(err)
 }
}