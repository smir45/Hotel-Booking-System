const express = require("express");
const { User } = require("../../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginValidation } = require("../../middlewares/userLoginValidation");
const Joi = require("joi");
const { getTransporter } = require("../../utils/sendEmail");
const otpGenerator = require('otp-generator')
require("dotenv").config();

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
  phone: Joi.number().min(10).required(),
});

// function Verification() {
//   // const mailgun = require('mailgun-js');

//   var API_KEY = process.env.MAILGUN_API_KEY;
//   var DOMAIN = process.env.MAILGUN_DOMAIN;
//   var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

//   sendMail = function (
//     sender_email,
//     receiver_email,
//     email_subject,
//     email_body
//   ) {
//     const data = {
//       from: sender_email,
//       to: receiver_email,
//       subject: email_subject,
//       text: email_body,
//     };

//     mailgun.messages().send(data, (error, body) => {
//       if (error) console.log(error);
//       else console.log(body);
//     });
//   };

//   var sender_email = "info@accommod.com";
//   var receiver_email = receiverEmail;
//   var email_subject = "Welcome to Accommod";
//   var email_body = "Please verify your email using this OTP";

//   // User-defined function to send email
//   sendMail(sender_email, receiver_email, email_subject, email_body);
// }
module.exports.findAll = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err,
    });
  }
};
var receiverEmail;
module.exports.createUser = async (req, res, next) => {
var datas = req.body;
  //checking if user already exist
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user) return res.status(400).json({ message: "User already exist" });

  // generating password hash
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  // creating user
  const userdata = new User({
    email: datas.email,
    password: hashedpassword,
    fullname: datas.fullname,
    phone: datas.phone,
    DOB: datas.DOB
  });
  try {
    const saveUser = await userdata.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    res.json(err);
  }
};
// ------------------------------------------------------

module.exports.createUseer = async (req, res) => {
  const { email } = req.body;
  var datas = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (user) return res.status(302).json({ message: "User already exist" });

    const jwtToken = jwt.sign(
      datas,
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    const transporter = await getTransporter();
    const mailOptions = {
      from: process.env.EMAIL,
      to: `${email}`,
      subject: "Verify your email",
      text: "",
      template: "accommodregister",
      context: {
        email,
        jwtToken,
      },
    };

    res.status(200).json({
      data: jwtToken,
      message: "Please verify your email",
    });
    const info = await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    // return info;
  }
};

// ------------------------------------------------------------------------------------------------------------------------------------

module.exports.userEmailVerification = (req, res) => {
  const { token } = req.body;
  if (!token)
    return res.status(404).json({
      message: "Token not found",
    });

  User.findOne({ email: decodedToken.email }).then((doc) => {
    if (!doc) {
      return res.status(404).json({ message: "Already verified" });
    } else {
      const userData = decodedToken;
      const user = new User(userData);
      user
        .save()
        .then((doc) => {
          const { _id, name, email, isHost, city } = doc;
          return res.status(200).json({ message: "Verified successfully" });
        })
        .catch((err) => {
          return res
            .status(500)
            .json({ message: "Error activating your Account" });
        });
    }
  });
};


// ------------------------------------------------------------------------------------------------------------------------------------

module.exports.findUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    message: "success",
    data: user,
  });
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { error } = Updateschema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const datas = req.body;
  try {
    await user.save();
    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err,
    });
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  try {
    await user.destroy();
    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
      data: err,
    });
  }
};

module.exports.userLogin = async (req, res, next) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (!user)
    return res.status(400).json({ message: "Invalid email or username" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid Password" });
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
      phone: user.phone,
      city: user.city,
      state: user.state,
      country: user.country,
      zipcode: user.zipcode,
      address: user.address,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
      // expiresInMinutes: 1440,
    }
  );

  res.header("auth-token",token).json({
    message: {
      success: "Logged in successfully",
    },
    data: token,
  });

  next();
};

module.exports.userLogout = async (req, res) => {
  try {
    res
      .clearCookie("auth-token", "", { maxAge: 1 })
      .json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(400).json({
      message: "fail",
    });
  }
};

module.exports.getUserByUuid = async (req, res) => {
  try {
    const { uuidv4 } = req.params.uuid;
    const userdetails = await User.findOne({
      where: {
        uuid: uuidv4,
      },
    });
    if (!userdetails)
      return res.status(404).json({ message: "user doesnot exists" });
    res.status(200).json({
      message: "Success",
      data: userdetails,
    });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
