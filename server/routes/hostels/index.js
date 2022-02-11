const express = require("express");
const router = express.Router();

const {getHostels} = require('../../controllers/hostels');


router.get('/', getHostels);

module.exports = router;