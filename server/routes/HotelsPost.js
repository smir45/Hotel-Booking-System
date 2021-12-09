const express = require('express');
const router = express.Router();
const { getHotels } = require("../controllers/hotelspost.controller");

router.get('/', getHotels);

module.exports = router;