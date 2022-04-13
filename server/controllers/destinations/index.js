const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const { Destination } = require("../../models");
const { images } = require("../../models");
const { hotel_reviews } = require("../../models");
const { Address } = require("../../models");
const imageKit = require("../../utils/imagekit.config");
const { User } = require("../../models");
module.exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Destination.findAll({
      include: [
        {
          model: images,
          attributes: ["name"],
        },
      ],
    });
    if(!posts) res.status(404).json({ message: "Destination not found" });
    res.status(200).json(posts);
    // console.log(posts);
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving destinations",
      error: err,
    });
    console.log(err);
  }
};

module.exports.postImages = async (req, res) => {
  try {
    const data = req.body;
    const image = await images.create({
      name: data.image,
      destinationId: data.destinationId,
    });
    res.status(200).json(image);
  } catch (err) {
    res.status(500).json({
      message: "Error uploading  image",
      error: err,
    });
  }
};

module.exports.postDestinationReviews = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
    const destination = await Destination.findOne({
      where: {
        slug: data.slug,
      },
    });
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });

    const review = await hotel_reviews.create({
      average: data.stars,
      stars: data.stars,
      review: data.review,
      Comment: data.comment,
      destinationId: destination.id,
      userId: user.id,
    });
    res.status(200).json({
      message: "Review created successfully",
      data: review,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error uploading  review",
      error: err,
    });
  }
};

module.exports.deleteReview = async (req, res, next) => {
  const request = req.params;
  try {
    const review = await hotel_reviews.destroy({
      where: {
        id: request.id,
      },
    });
    if (!review) res.status(404).json({ message: "Review not found" });
    res.status(200).json({
      message: "Review deleted Seccessfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.postDestination = async (req, res, next) => {
  try {
    const data = req.body;
    var modifiedUrl;
    const slugified = slugify(data.name, {
      replacement: "-",
      lower: true,
    });
    const newDestination = await Destination.create({
      name: data.name,
      desc: data.desc,
      slug: slugified,
      city: data.city,
      state: data.state,
      longitude: data.longitude,
      latitude: data.latitude,
    });
    const destination = await Destination.findOne({
      where: {
        slug: slugified,
      },
    });
    const destinationAddress = await Address.create({
      country: data.country,
      city: data.city,
      state: data.state,
      destinationId: destination.id,
    });
    // ----------------------------------------------------------------------

    if (!req.files) {
      res.send("No file uploaded");
      return;
    }

    req.files.image.map((file) => {
      imageKit.upload(
        {
          file: file.data,
          fileName: file.name,
          folder: "Destinations",
        },
        async (err, response) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              status: "failed",
              message: "An error occured during file upload. Please try again.",
            });
          } else {
            const { url } = response;
            modifiedUrl = url

            const newAddress = await images.create({
              name: url,
              destinationId: destination.id,
            });
            const destinationUpdated = await Destination.update(
                {
                    image: modifiedUrl,
                },
                {
                    where: {
                        id: destination.id,
                    },
                }
            );
          }
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getDestinationByCity = async (req, res, next) => {
  const request = req.params;

  try {
    const destination = await Destination.findAll({
      where: {
        city: request.city,
      },
      include: [
        {
          model: images,
          attributes: ["name"],
        },
      ],
    });
    if (!destination) return res.status(404).json({ message: "there are no destinations on this city" });
    res.status(200).json({
      message: "Destination found",
      data: destination,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving destination",
      error: err,
    });
  }
};

module.exports.deleteDestination = async (req, res, next) => {
  const request = req.params;

  try {
    const destination = await Destination.destroy({
      where: {
        id: request.id,
      },
    });
    if (!destination)
      res.status(404).json({ message: "Destination not found" });
    const imagess = await images.destroy({
      where: {
        destinationId: request.id,
      },
    });
    res.status(200).json({
      message: "Destination deleted Seccessfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting destination",
      error: err,
    });
  }
};

module.exports.getDestinationBySlug = async (req, res, next) => {
  const request = req.params;
  try {
    const destination = await Destination.findAll({
      where: {
        slug: request.slug,
      },
      include: [images, Address, hotel_reviews],
    });
    res.status(200).json({
      message: "Destination found",
      data: destination,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving destination",
      error: err,
    });
  }
};
