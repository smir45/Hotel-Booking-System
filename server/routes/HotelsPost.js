const express = require('express');
const router = express.Router();
const { getHotels, postHotels } = require("../controllers/hotelspost.controller");

router.get('/', getHotels);
router.post('/post', postHotels)


module.exports = router;