const express = require("express");
const router = express.Router();
// const userValidation = require('../middlewares/UserValidation')
const { Post } = require("../../models");
const {
  getAllPosts,
  postDestination,
    getDestinationByCity,
    deleteDestination,
    getDestinationBySlug
} = require('../../controllers/destinations');

router.post("/post", postDestination);
router.get('/', getAllPosts);
router.get("/:slug", getDestinationBySlug);
router.get("/:city", getDestinationByCity);
router.delete("/delete/:id", deleteDestination);

module.exports = router;
