const express = require("express");
const router = express.Router();

const { getAllRestaurents } = require("../../../controllers/destinations/restaurents");


router.get("/", getAllRestaurents);

module.exports = router;