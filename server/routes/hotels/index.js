const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
    getHotels,
    postHotels,
    postImage,
    getAHotel,
    postJsonHotel,
    deleteHotel,
    bookingHotel,
    AddImages,
    addNewHotel
} = require("../../controllers/hotels");
// const userAuth = require("../../middlewares/userAuth");
router.get("/", getHotels);
router.post("/post", postHotels);
router.get("/:uniqueKey", getAHotel);
router.post('/postimage', postImage)
router.post('/postjson', postJsonHotel)
router.delete('/hotelremove/:id', deleteHotel)
router.post('/booking', bookingHotel)
router.post('/addimages',upload.single("file"), AddImages)

module.exports = router;
