const express = require('express');
const router = express.Router();
const { getHotels, postHotels, getHotelBySlug } = require("../controllers/hotelspost.controller");

router.get('/', getHotels);
router.post('/post', postHotels)
router.get('/slug/:slug', getHotelBySlug)


module.exports = router;