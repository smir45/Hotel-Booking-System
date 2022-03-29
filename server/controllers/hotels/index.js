const express = require("express");
const { checkPreferences, date } = require("joi");
const router = express.Router();
const { hotel } = require("../../models");
const { Address } = require("../../models");
const { hotel_reviews } = require("../../models");
const { Bookings } = require("../../models");
const { User } = require("../../models");
const { facilities } = require("../../models");
const { images } = require("../../models");
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
          model: User,
          attributes: ["name", "image"],
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

    const newHotel = new hotel({
      slug: slugdata,
      title: data.title,
      desc: data.desc,
      distance: data.distance,
      only_left: data.only_left,
      currency_id: data.currency_id,
      checkin: Date.now(),
      checkout: Date.now(),
      thumbnail: data.thumbnail,
    });
    const hotelData = await newHotel.save();
    const hotellId = await hotel.findOne({
      where: {
        slug: slugdata,
      },
      attributes: ["id"],
    });
    const thumbn = images.create({
      name: data.thumbnail,
      hotelId: hotellId.id,
    });
    res.json({
      message: "Successfully added a new hotel",
      data: hotelData,
    });
  } catch (err) {
    res.json(err);
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
    const hotel = await Hotel.findByPk(req.params.id);
    const deleted = await hotel.destroy();
    res.json(deleted);
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

module.exports.postJsonHotel = async (req, res) => {
  // import json file
  const jsonfile = require("../../json/bookin_hotels.json");
  try {
    const datas = jsonfile;
    const uniqueArray = datas.filter(function (elem, pos) {
      return datas.indexOf(elem) == pos;
    });
    // bulk create
    const hotel = await Hotel.bulkCreate(uniqueArray);

    res.send(hotel);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

module.exports.bookingHotel = async (req, res) => {
  let data = req.body;
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
      slug: data.hotelSlug,
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

  // console.log(userID.id);
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
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
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
  try{
    const file = new images({
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
    });
    await file.save();
    res.status(201).send('File Uploaded Successfully');
}catch(error) {
    res.status(400).send(error.message);
}
}