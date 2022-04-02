const express = require("express");
const {Admin} = require("../../models");
const {Address} = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
require("dotenv").config();


module.exports.createAdmin = async (req, res, next) => {
    try {
        const data = req.body;
        const admin = await Admin.findOne({
            where: {
                email: data.email
            }
        });
        if (admin) return res.status(500).json({message: "User already exists"})
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, salt)

        const username = data.name.split(" ").join("_");
        const uniqueName = await bcrypt.hash(username, salt)

        const Otp = Math.floor(Math.random() * 1000000);

        const newAdmin = new Admin({
            password: hashedPassword,
            isAdmin: true,
            email: data.email,
            name: data.name,
            phone: data.phone,
            image: `https://avatars.dicebear.com/api/adventurer-neutral/${uniqueName}.svg`,
            otp: Otp,


        })
        // send emaill with otp
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
            subject: "Verify your email",
            text: "",
            template: "verification",
            context: {
                otp: Otp,
                name: data.name.split(" ")[0],
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
        //save user

        const save = await newAdmin.save();
        res.status(201).json({
            message: "Admin created",
            save
        })

    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

module.exports.getAllAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.findAll(
            {
                attributes: {
                    exclude: ["password", "otp", "createdAt", "updatedAt", "id"]
                },
                include: [
                    {
                        model: Address,
                        attributes: ["city", "state", "country"]
                    }
                ]
            }
        );
        res.status(200).json({
            message: "Admin fetched",
            admin
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

module.exports.Login = async (req, res, next) => {
    const user = await Admin.findOne({
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
        isAdmin: user.isAdmin,
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
