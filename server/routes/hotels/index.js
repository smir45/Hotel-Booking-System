const express = require("express");
const router = express.Router();
const {
  getHotels,
  postHotels,
  postImage,
  getAHotel,
  postJsonHotel,
  deleteHotel
} = require("../../controllers/hotels");
// const userAuth = require("../../middlewares/userAuth");
router.get("/", getHotels);
router.post("/post", postHotels);
router.get("/:uniqueKey", getAHotel);
router.post('/postimage', postImage)
router.post('/postjson', postJsonHotel)
router.delete('/hotelremove/:id', deleteHotel)

module.exports = router;
