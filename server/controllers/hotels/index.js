const express = require("express");
const { checkPreferences, date } = require("joi");
const router = express.Router();
const { hotel } = require("../../models");
const { Address } = require("../../models");
const { hotel_reviews } = require("../../models");
// const {Bookings} = require("../../models");
const { User } = require("../../models");
const { facilities } = require("../../models");
const { images } = require("../../models");
const slugify = require("slugify");
const multer = require("multer");

const { Currency } = require("../../models");
const { hotelpostSchema } = require("../../validation");
const fs = require("fs");
const { url } = require("inspector");
const axios = require("axios");
require("dotenv").config();
const imgur = require("imgur");
const fileUpload = require("express-fileupload");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
const crypto = require("crypto");
const { where } = require("sequelize");
const { Bookings } = require("../../models");
const { Room } = require("../../models");
const { Admin } = require("../../models");
const imageKit = require("../../utils/imagekit.config");
module.exports.getHotels = async (req, res) => {
  try {
    const hotel_data = await hotel.findAll({
      include: [
        {
          model: Currency,
          // as: "address",
          attributes: ["id", "name"],
        },
        {
          model: Address,
          attributes: ["id", "city", "state", "country"],
        },
        {
          model: hotel_reviews,
        },
        {
          model: facilities,
        },
        {
          model: images,
          attributes: ["name"],
        },
      ],
    });

    res.send(hotel_data);
  } catch (err) {
    res.json(err);
  }
};

module.exports.getAHotel = async (req, res, next) => {
  try {
    const hotelData = await hotel.findOne({
      where: {
        slug: req.params.uniqueKey,
      },
      include: [
        {
          model: Currency,
        },
        {
          model: Address,
        },
        {
          model: hotel_reviews,
        },
        {
          model: facilities,
        },
        {
          model: Room,
          exclude: ["hotelId", "createdAt", "updatedAt", "id"],
        },
        {
          model: User,
          attributes: ["name", "image"],
        },
        {
          model: images,
          attributes: ["name"],
        },
      ],
    });
    res.send(hotelData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

module.exports.postHotels = async (req, res, next) => {
  try {
    const data = req.body;
    const slugdata = data.title.toLowerCase().replace(/\s/g, "-");
    var modifiedUrl;

    const newHotel = new hotel({
      slug: slugdata,
      title: data.title,
      desc: data.desc,
      distance: data.distance,
      only_left: data.only_left,
      currency_id: data.currency_id,
      checkin: Date.now(),
      checkout: Date.now(),
      city: data.city,
      state: data.state,
      country: data.country,
    });
    const hotelData = await newHotel.save();
    const hotellId = await hotel.findOne({
      where: {
        slug: slugdata,
      },
      attributes: ["id"],
    });
    const newAddress = Address.create({
      city: data.city,
      state: data.state,
      country: data.country,
      hotelId: hotellId.id,
    });

    const facilitiesData = await facilities.create({
      wifi: data.wifi,
      parking: data.parking,
      pets: data.pets,
      swimming_pool: data.swimming_pool,
      hotelId: hotellId.id,
    });
    // -----------------------------------------------------------------------

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
            modifiedUrl = url;

            const thumbn = images.create({
              name: modifiedUrl,
              hotelId: hotellId.id,
            });
            const destinationUpdated = await hotel.update(
              {
                thumbnail: modifiedUrl,
              },
              {
                where: {
                  id: hotellId.id,
                },
              }
            );
          }
        }
      );
    });

    // -----------------------------------------------------------------------
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

module.exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    const datas = req.body;
    const { error } = hotelpostSchema.validate(datas);
    if (error) {
      res.json(error);
    } else {
      const updated = await hotel.update(datas);
      res.json(updated);
    }
  } catch (err) {
    res.json(err);
  }
};
module.exports.deleteHotel = async (req, res) => {
  try {
    const Hotel = await hotel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!Hotel) {
      res.status(404).send("Hotel not found");
    } else {
      const deleted = await Hotel.destroy();
      res.json("Hotel deleted successfully");
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports.postImage = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send("No files were uploaded.");
    }

    let sampleFile = req.files.sampleFile;
    let uploadPath = __dirname + "/uploads/" + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).send(err);
      }

      imgur.uploadFile(uploadPath).then((urlObject) => {
        fs.unlinkSync(uploadPath);
        res.json({ message: "done", link: urlObject.link });
      });
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports.postReview = async (req, res) => {
  try {
    const data = req.body;
    const slug = req.body.slug.toLowerCase().replace(/\s/g, "-");
    const userDetails = await User.findOne({
      where: {
        email: data.email,
      },
    });
    console.log(data);
    const hotelDetails = await hotel.findOne({
      where: {
        slug: slug,
      },
    });
    const newReview = new hotel_reviews({
      average: data.stars,
      stars: data.stars,
      review: data.review,
      Comment: data.comment,
      hotelId: hotelDetails.id,
      userId: userDetails.id,
    });
    const reviewData = await newReview.save();
    console.log(hotelDetails);
    res.status(200).json({
      message: "Review created successfully",
      data: reviewData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error uploading  review",
      error: err,
    });
  }
};

module.exports.bookingHotel = async (req, res) => {
  let data = req.body;
  console.log(data.email);
  const BookingId = crypto.randomBytes(8).toString("hex").toUpperCase();
  const userID = await User.findOne({
    where: {
      email: data.email,
    },
    attributes: ["id", "name"],
  });
  console.log(userID, "userID");
  const hotelID = await hotel.findOne({
    where: {
      slug: data.slug,
    },
    attributes: ["id", "title", "only_left"],
  });
  const availability = await hotel.update(
    {
      only_left: hotelID.only_left - 1,
    },
    {
      where: {
        id: hotelID.id,
      },
    }
  );

  const newBooking = new Bookings({
    userId: userID.id,
    hotelId: hotelID.id,
    checkin: Date.now(),
    checkout: Date.now(),
    no_of_person: data.no_of_person,
    total_price: "5000",
    currency_id: "Rs",
    status: "booked",
  });
  const adminID = await hotel.findOne({
    where: {
      id: newBooking.hotelId,
    },
    attributes: ["adminId"],
  });
  const adminDetails = await Admin.findOne({
    where: {
      id: adminID.adminId,
    },
    attributes: ["email"],
  });
  try {
    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "29adeee43c4543",
        pass: "bc9d27d8c27b8b",
      },
    });
    var mailOptions = {
      from: process.env.EMAIL,
      to: `${data.email}`,
      subject: "Booking Confirmation",
      text: "",
      template: "booking",
      context: {
        Bookingid: `#${BookingId}`,
        hotel: `${hotelID.title}`,
        name: `${userID.name.split(" ")[0]}`,
      },
    };
    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          partialsDir: "./views/",
          defaultLayout: "",
        },
        viewPath: "./views/",
        extName: ".hbs",
      })
    );
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response + " " + data.email);
      }
    });

    // ------------------------------------------------------
    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "29adeee43c4543",
        pass: "bc9d27d8c27b8b",
      },
    });
    var mailOptions = {
      from: process.env.EMAIL,
      to: `${adminDetails.email}`,
      subject: "Booking Confirmation",
      text: "",
      template: "verification",
      context: {
        Bookingid: `#${BookingId}`,
        hotel: `${hotelID.title}`,
        name: `${userID.name.split(" ")[0]}`,
      },
    };
    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          partialsDir: "./views/",
          defaultLayout: "",
        },
        viewPath: "./views/",
        extName: ".hbs",
      })
    );
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const booking = await newBooking.save();
    res.status(200).json({
      message: "Successfully booked",
      data: booking,
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports.AddImages = async (req, res) => {
  try {
    console.log("req");
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

module.exports.getUserHistory = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id"],
    });
    const booking = await Bookings.findAll({
      where: {
        userId: user.id,
      },
      include: [
        {
          model: hotel,
          attributes: ["id", "title", "slug", "updatedAt"],
        },
      ],
    });
    res.status(200).json({
      message: "Successfully get user history",
      data: booking,
      user,
    });
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

module.exports.searchHotelFromCity = async (req, res) => {
  const { city } = req.params;
  try {
    const hotels = await hotel.findAll({
      include: [
        {
          model: Currency,
          // as: "address",
          attributes: ["id", "name"],
        },
        {
          model: Address,
          attributes: ["id", "city", "state", "country"],
        },
        {
          model: hotel_reviews,
        },
        {
          model: facilities,
        },
        {
          model: images,
          attributes: ["name"],
        },
      ],
    });
    const filteredHotels = hotels.filter((hotel) => {
      return hotel.Addresses.map((address) => {
        return address.city === city;
      });
    });
    res.status(200).json({
      message: "Successfully get user history",
      data: filteredHotels,
    });
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};
