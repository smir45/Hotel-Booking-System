const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const {Destination} = require("../../models");
const {images} = require("../../models");

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

module.exports.postDestination = async (req, res, next) => {

    try {
        const data = req.body;
        // const slugified = slugify(data.name, {
        //     replacement: "-",
        //     lower: true
        // });
        const newDestination = await Destination.create({
            name: data.name,
            desc: data.desc

        });
        const newAddress = await images.create({
            name: data.image,
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
        console.log(err)
    }
}


module.exports.getDestinationByCity = async (req, res, next) => {
    const request = req.params;

    try {
        const destination = await Destinations.findAll({
            where: {
                city: request.city
            }
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
        const destination = await Destinations.destroy({
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
        const destination = await Destinations.findAll({
            where: {
                slug: request.slug
            }
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