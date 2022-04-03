const express = require("express");
const upload = require('../middlewares/multer');
const {ImageUpload, ImagesUpload} = require("../controllers/hotels/upload");
const router = express.Router();
const multer = require("multer");
// const upload = multer({ dest: 'uploads/' })


router.post("/upload_file", upload.single("image"), ImageUpload);
router.post("/upload_files", upload.array("image"), ImagesUpload);
module.exports = router;
