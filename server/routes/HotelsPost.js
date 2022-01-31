const express = require('express');
const router = express.Router();
const { getHotels, postHotels, getHotelBySlug, postAmadeusHotels , getAHotel} = require("../controllers/hotelspost.controller");

router.get('/', getHotels);
router.post('/post', postHotels)
router.post('/json', postAmadeusHotels)
router.get('/slug/:slug', getHotelBySlug)
router.get('/:id', getAHotel)


module.exports = router;