const express = require("express");
const router = express.Router();
const { Hotel } = require("../models");
const {hotelpostSchema} = require("../validation")

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
    const {error} = hotelpostSchema.validate(datas)
    if(error){
      res.json(error)
    }
    else{
      const hotel = await Hotel.create(datas)
      res.json(hotel)
    }
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotel = async (req, res) => {
  try{
    const hotel = await Hotel.findByPk(req.params.id);
    res.json(hotel)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.updateHotel = async (req, res) => {
  try{
    const hotel = await Hotel.findByPk(req.params.id);
    const datas = req.body
    const {error} = hotelpostSchema.validate(datas)
    if(error){
      res.json(error)
    }
    else{
      const updated = await hotel.update(datas)
      res.json(updated)
    }
  }
  catch(err){
    res.json(err)
  }
}
module.exports.deleteHotel = async (req, res) => {
  try{
    const hotel = await Hotel.findByPk(req.params.id);
    const deleted = await hotel.destroy()
    res.json(deleted)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelBySlug = async (req, res) => {
  try{
    const hotel = await Hotel.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.json(hotel)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelByCity = async (req, res) => {
  try{
    const hotels = await Hotel.findAll({
      where: {
        city: req.params.city
      }
    });
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelByCountry = async (req, res) => {
  try{
    const hotels = await Hotel.findAll({
      where: {
        country: req.params.country
      }
    });
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelByStars = async (req, res) => {
  try{
    const hotels = await Hotel.findAll({
      where: {
        stars: req.params.stars
      }
    });
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelByPrice = async (req, res) => {
  try{
    const hotels = await Hotel.findAll({
      where: {
        price: req.params.price
      }
    });
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelByRating = async (req, res) => {
  try{
    const hotels = await Hotel.findAll({
      where: {
        rating: req.params.rating
      }
    });
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelByFacilities = async (req, res) => {
  try{
    const hotels = await Hotel.findAll({
      where: {
        facilities: req.params.facilities
      }
    });
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
}
module.exports.getHotelByRooms = async (req, res) => {
  try{
    const hotels = await Hotel.findAll({
      where: {
        rooms: req.params.rooms
      }
    });
    res.json(hotels)
  }
  catch(err){
    res.json(err)
  }
}