const express = require("express");
const axios = require("axios");
require("dotenv").config();

module.exports.GetImpalaHotels = async (req, res) => {
  try {
    var options = {
      url: "https://sandbox.impala.travel/v1/hotels",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.IMPALA_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {
    res.json(err);
  }
};

module.exports.GetImpalaHotelById = async (req, res) => {
  try {
    const hotelid = req.params.id;
    var options = {
      url: `https://sandbox.impala.travel/v1/hotels/${hotelid}`,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.IMPALA_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {
    res.json(err);
  }
};

module.exports.GetAllBookings = async (req, res) => {
  try {
    var options = {
      url: "https://sandbox.impala.travel/v1/bookings",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.IMPALA_API_KEY,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response);
      })
      .catch(function (error) {
        res.json(error);
      });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};
