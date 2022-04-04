const express = require("express");
const {User} = require("../../models");
const {Address} = require("../../models");
const {hotel_reviews} = require("../../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const {getTransporter} = require("../../utils/sendEmail");
const otpGenerator = require("otp-generator");
const {createAvatar} = require("@dicebear/avatars");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
const {Bookings} = require("../../models");

require("dotenv").config();
const db = require("../../models");

const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
    phone: Joi.number().min(10).required(),
});

module.exports.findAll = async (req, res, next) => {
    try {
        const users = await User.findAll(
            // add another table data
            {
                include: [
                    {
                        model: Address,
                        attributes: ["country", "city", "state"],
                    },
                    {
                        model: hotel_reviews,
                        attributes: ["average", "stars", "review", "Comment"],
                    },
                ],
            }
        );
        res.status(200).json({
            message: "success",
            data: users,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
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
    if (user) return res.status(400).json({message: "User already exist"});

    // // generating password hash
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    // creating user
    const nameData = datas.name.split(" ").join("");
    const uniqueid = await bcrypt.hash(nameData, salt);

//   generate six digit numeric otp
    const otp = Math.floor(100000 + Math.random() * 900000);

    const userdata = new User({
        email: datas.email,
        password: hashedpassword,
        name: datas.name,
        phone: datas.phone,
        otp: otp,
        image: `https://avatars.dicebear.com/api/bottts/${uniqueid}.svg`,
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
            to: `${datas.email}`,
            subject: "Verify your email",
            text: "",
            template: "verification",
            context: {
                otp: otp,
                name: datas.name.split(" ")[0],
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
        const saveUser = await userdata.save();
        res.json({message: "User created successfully", data: {userdata}});
    } catch (err) {
        console.log(err);
    }
};

// ------------------------------------------------------------------------------------------------------------------------------------

module.exports.findUser = async (req, res) => {
    const {id} = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({message: "User not found"});
    }

    res.status(200).json({
        message: "success",
        data: user,
    });
};

module.exports.updateUser = async (req, res) => {
    const {id} = req.params;

    // const { error } = Updateschema.validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({message: "User not found"});
    }

    const datas = req.body;
    try {
        const userAddress = await Address.findOne({
            where: {
                userId: id,
            },
        });
        await userAddress.update(datas);
        res.status(200).json({
            message: "Updated Successfully",
            data: updatedUser,
        });
        console.log("updated");
    } catch (err) {
        res.status(400).json({
            message: "fail",
            data: err,
        });
    }
    console.log(datas);
};

module.exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({message: "User not found"});
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
        where: {email: req.body.email},
    });
    if (!user)
        return res.status(400).json({message: "Invalid email or username"});

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).json({message: "Invalid Password"});
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
            isHost: user.isHost,
            isVerified: user.isVerified,
            isAdmin: user.isAdmin,
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
            // expiresInMinutes: 1440,
        }
    );

    if (user.isVerified !== true) {
        return res.status(400).json({message: "Please verify your email"});
    }

    res.header("auth-token", token).json({
        message: {
            success: "Logged in successfully",
        },
        data: token,
    });

    next();
};

module.exports.userLogout = async (req, res) => {
    try {
        console.log("trial");
        res.send("trial");
    } catch (err) {
        res.status(400).json({
            message: "fail",
        });
    }
};

module.exports.getUserByUuid = async (req, res) => {
    try {
        const {uuidv4} = req.params.uuid;
        const userdetails = await User.findOne({
            where: {
                uuid: uuidv4,
            },
        });
        if (!userdetails)
            return res.status(404).json({message: "user doesnot exists"});
        res.status(200).json({
            message: "Success",
            data: userdetails,
        });
    } catch (err) {
        res.status(400).json({message: err});
    }
};

module.exports.googleAuthentication = async (req, res, next) => {
    const {idToken} = req.body;
    try {
        console.log("google auth");
        const data = req.body;
        const token = jwt.sign(
            {
                data,
            },
            process.env.TOKEN_SECRET,
            {
                expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
            }
        );
        res.header("auth-token", token).json({
            message: {
                success: "Logged in successfully",
            },
            data: token,
        });
        // console.log(data)
        next();
    } catch (err) {
        res.status(400).json({
            message: "fail",
            data: err,
        });
    }
};

