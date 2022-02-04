const express = require('express');
const router = express.Router();
const { getHotels, postHotels, getHotelBySlug, postAmadeusHotels , getAHotel} = require("../controllers/hotelspost.controller");
const { GetImpalaHotels, GetImpalaHotelById, GetAllBookings} = require("../controllers/hotelBooking.controller");
router.get('/', getHotels);
router.post('/post', postHotels)
router.post('/json', postAmadeusHotels)
router.get('/slug/:slug', getHotelBySlug)
router.get('/:id', getAHotel)


router.get('/impala/get', GetImpalaHotels)
router.get('/impala/get/:id', GetImpalaHotelById)
router.get('/impala/get/bookings', GetAllBookings)

module.exports = router;