const express = require("express");
const router = express.Router()
const {images} = require("../../models");
const {
    postDestination,
} = require('../../controllers/destinations');

router.post("/postimage", postDestination);

module.exports = router;