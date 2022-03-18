const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const {Destination} = require("../../models");
const {images} = require("../../models");
const {hotel_reviews} = require("../../models");
const {Address} = require("../../models");

module.exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Destination.findAll(
            {
                include: [
                    {
                        model: images,
                        attributes: ["name"]
                    }
                ]
            }
        )
        res.status(200).json(posts);
        console.log(posts);

    } catch (err) {
        res.status(500).json({
            message: "Error retrieving destinations",
            error: err
        });
        console.log(err)
    }
}

module.exports.postImages = async (req, res) => {
    try {
        const data = req.body
        const image = await images.create({
            name: data.image,
            destinationId: data.destinationId
        })
        res.status(200).json(image)
    } catch (err) {
        res.status(500).json({
            message: "Error uploading  image",
            error: err
        });
    }
}

module.exports.postDestination = async (req, res, next) => {

    try {
        const data = req.body;
        const slugified = slugify(data.name, {
            replacement: "-",
            lower: true
        });
        const newDestination = await Destination.create({
            name: data.name,
            desc: data.desc,
            slug: slugified,
            city: data.city,
            image: data.image

        });
        const destination = await Destination.findOne({
            where: {
                slug: slugified
            },
        });
        const newAddress = await images.create({
            name: data.image,
            destinationId: destination.id
        });
        res.status(200).json({
            message: "Destination created successfully",
            data: newDestination, newAddress
        });
    } catch (err) {
        res.status(500).json({
            message: "Error creating destination",
            error: err
        });
    }
}


module.exports.getDestinationByCity = async (req, res, next) => {
    const request = req.params;

    try {
        const destination = await Destination.findAll({
            where: {
                city: request.city
            },
            include: [
                {
                    model: images,
                    attributes: ["name"]
                }
            ]
        });
        res.status(200).json({
            message: "Destination found",
            data: destination
        });
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving destination",
            error: err
        })
    }
}


module.exports.deleteDestination = async (req, res, next) => {
    const request = req.params;

    try {
        const destination = await Destination.destroy({
            where: {
                id: request.id
            }
        });
        if (!destination) res.status(404).json({message: "Destination not found"});

        res.status(200).json({
            message: "Destination deleted Seccessfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting destination",
            error: err
        })
    }
}


module.exports.getDestinationBySlug = async (req, res, next) => {
    const request = req.params;
    try {
        const destination = await Destination.findAll({
            where: {
                slug: request.slug
            },
            include: [
                {
                    model: images,
                    attributes: ["name"]
                },
                {
                    model: hotel_reviews,

                },
                {
                    model: Address,
                }
            ]
        });
        res.status(200).json({
            message: "Destination found",
            data: destination
        });
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving destination",
            error: err
        })
    }
}