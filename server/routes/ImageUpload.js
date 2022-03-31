const express = require("express");
const upload  = require('../middlewares/multer');
const ImageUpload = require("../controllers/hotels/upload");   
const router = express.Router();
const multer = require("multer");
// const upload = multer({ dest: 'uploads/' })



router.post("/upload_files", upload.single("image"),  ImageUpload);
module.exports = router;
