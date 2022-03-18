const express = require("express");
const router = express.Router();
// const userValidation = require('../middlewares/UserValidation')
const {Post} = require("../../models");
const {
    getAllPosts,
    postDestination,
    getDestinationByCity,
    deleteDestination,
    getDestinationBySlug,
    postImages,
} = require('../../controllers/destinations');

router.post("/post", postDestination);
router.get('/', getAllPosts);
router.get("/search/:city", getDestinationByCity);
router.post("/upload/image", postImages);
router.get("/:slug", getDestinationBySlug);
router.delete("/delete/:id", deleteDestination);

module.exports = router;
