const express = require("express");
const router = express.Router();
const axios = require("axios")


module.exports.getHostels = async (req, res, next) => {
    var options = {
        method: 'GET',
        url: 'https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json',
        params: {query: 'San Francisco', locale: 'en_US'},
        headers: {
          'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com',
          'x-rapidapi-key': '4ef40a5d6dmshbad9841ad2932b3p162d32jsn9ae87a92d911'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}