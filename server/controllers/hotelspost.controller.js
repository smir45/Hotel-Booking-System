const express = require("express");
const { checkPreferences } = require("joi");
const router = express.Router();
const { Hotel } = require("../models");
const { hotelpostSchema } = require("../validation");
const fs = require("fs");
const { url } = require("inspector");
const axios = require("axios");
// for amadeus
// const amadus = require('amadeus');
require("dotenv").config();

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

module.exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    //  sort by latest five data
    hoteldata = hotels.sort(function (a, b) {
      return b.id - a.id;
    });
    res.json(hoteldata);
  } catch (err) {
    res.json(err);
  }
};




module.exports.getAHotel = async (req, res, next) => {
  try{
    const hotel = await Hotel.findByPk(req.params.id);
    res.status(200).json(hotel);
  }
  catch(err){
    res.status(500).json(err);
  }
}




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
module.exports.getHotelBySlug = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.json(hotel);
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotelByCity = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        city: req.params.city,
      },
    });
    res.json(hotels);
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotelByCountry = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        country: req.params.country,
      },
    });
    res.json(hotels);
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotelByStars = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        stars: req.params.stars,
      },
    });
    res.json(hotels);
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotelByPrice = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        price: req.params.price,
      },
    });
    res.json(hotels);
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotelByRating = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        rating: req.params.rating,
      },
    });
    res.json(hotels);
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotelByFacilities = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        facilities: req.params.facilities,
      },
    });
    res.json(hotels);
  } catch (err) {
    res.json(err);
  }
};
module.exports.getHotelByRooms = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        rooms: req.params.rooms,
      },
    });
    res.json(hotels);
  } catch (err) {
    res.json(err);
  }
};

// ---------------------------------------------------------------------------------

// module.exports.postAmadeusHotels2 = async (req, res) => {
//   try {
//     const json = require("../json/booking_hotels.json");
//     const hotels = await Hotel.bulkCreate(json);
//     res.json({
//       message: "Successfully added a new hotel",
//       data: hotels,
//     });
//   } catch (err) {
//     await res.json(err);
//   }
// }

module.exports.postAmadeusHotels = async (req, res) => {
  try{
    const url = "https://travelnext.works/api/hotel-api-v6/hotel_search";
    const datas = req.body;
    const envdatas = {
      user_id: process.env.USER_ID,
      user_password: process.env.USER_SECRET,
      access: process.env.ACCESS,
    }
    axios({
      method: "POST",
      url: url,
      
      data: {
        user_id: envdatas.user_id,
        user_password: envdatas.user_password,
        access: envdatas.access,
        ...datas,
      }
    })
    .then(function (response) {
      res.json(response.data);
    }
    )
  }
  catch(err){
    res.status(500).json(err);
  }
}