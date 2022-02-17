const express = require("express");
const { checkPreferences } = require("joi");
const router = express.Router();
const { Hotel } = require("../../models");
const { hotelpostSchema } = require("../../validation");
const fs = require("fs");
const { url } = require("inspector");
const axios = require("axios");
require("dotenv").config();
const imgur = require('imgur');
const fileUpload = require('express-fileupload');
module.exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    hoteldata = hotels.sort(function (a, b) {
      return b.id - a.id;
    });
    res.json(hoteldata);
  } catch (err) {
    res.json(err);
  }
};

module.exports.getAHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.postHotels = async (req, res, next) => {
  try {
    const datas = req.body;
    const slugdata = datas.name.toLowerCase().replace(/ /g, "-");
    const { error } = hotelpostSchema.validate(datas);
    if (error) {
      res.json(error.details[0].message);
    } else {
      const hotel = await Hotel.create({
        slug: slugdata,
        ...datas,
      });
      res.json({
        message: "Successfully added a new hotel",
        hotel,
      });
    }
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    res.json(hotel);
  } catch (err) {
    res.json(err);
  }
};

module.exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    const datas = req.body;
    const { error } = hotelpostSchema.validate(datas);
    if (error) {
      res.json(error);
    } else {
      const updated = await hotel.update(datas);
      res.json(updated);
    }
  } catch (err) {
    res.json(err);
  }
};
module.exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    const deleted = await hotel.destroy();
    res.json(deleted);
  } catch (err) {
    res.json(err);
  }
};

module.exports.postImage = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send('No files were uploaded.')
    }
  
    let sampleFile = req.files.sampleFile
    let uploadPath = __dirname + '/uploads/' + sampleFile.name
  
    sampleFile.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).send(err)
      }
  
      imgur.uploadFile(uploadPath).then((urlObject) => {
        fs.unlinkSync(uploadPath)
        res.json({ message: "done", link: urlObject.link })
      })
    })
  } catch (err) {
    res.json(err);
  }
}

module.exports.postJsonHotel = async (req, res) => {
  // import json file
  const jsonfile = require("../../json/booking_hotels.json");
  try{
    const datas = jsonfile;
    const hotels = await Hotel.bulkCreate(datas);
    res.json(hotels);
  }
  catch(err){
    res.json(err);
  }
}