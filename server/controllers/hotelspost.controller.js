const express = require("express");
const router = express.Router();
const { Hotel } = require("../models");

module.exports.getHotels = async (req, res) => {
  const user = await Hotel.findAll();
  res.json(user);
};

module.exports.addHotel = async (req, res) => {
  const slug = req.body.title.slugify();
  const hotel = await Hotel.create(...req.body);
};

module.exports.getHotel = async (req, res) => {
  const hotel = await Hotel.findByPk(req.params.id);
  res.json(hotel);
}