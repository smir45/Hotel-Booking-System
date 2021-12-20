const express = require("express");
const router = express.Router();
const { Hotel } = require("../models");

module.exports.getHotels = async (req, res) => {
  try{
    const hotels = await Hotel.findAll();
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
};

module.exports.postHotels = async (req, res, next) => {
  try{
    const datas = req.body
    res.json(datas)
  }
  catch(err){
    res.json(err)
  }
}