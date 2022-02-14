const express = require("express");
const router = express.Router();
const {
  getHotels,
  postHotels,
  postImage,
  getAHotel,
  gethoteels,
} = require("../../controllers/hotels");
const userAuth = require("../../middlewares/userAuth");
router.get("/", getHotels);
router.post("/post", postHotels);
router.get("/:id", getAHotel);
router.post('/postimage', postImage)

module.exports = router;
