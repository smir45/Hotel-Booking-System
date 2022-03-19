const express = require("express");
const {User} = require("../../models");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
const bcrypt = require("bcrypt");

module.exports.emailVerification = async (req, res) => {
    const details = req.body;
    const user = await User.findOne({
        where: {email: details.email},
    });
    const reservedOtp = user.otp;
    if (user.isVerified) {
        return res.status(500).json({message: "User already verified"});
    }

    if (reservedOtp == details.otp) {
        user.isVerified = true;
        user.save()
        return res.status(200).json({message: "User verified successfully"});
    }
    return res.status(500).json({message: "Invalid OTP"});
};

module.exports.sendResetOtp = async (req, res) => {
    const {email} = req.body;
    const user = await User.findOne({
        where: {email: email},
    });
    if (!user) {
        return res.status(500).json({message: "User not found"});
    }
    const otp = Math.floor(Math.random() * 100000);
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
            to: `${email}`,
            subject: "Reset Password",
            text: "",
            template: "forgotpassword",
            context: {
                otp: otp,
                name: user.name.split(" ")[0],
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
        user.VerificationOtp = otp;
        user.save();
        return res.status(200).json({message: "OTP sent successfully"});
        // console.log("trying")
    } catch (err) {
        return res.status(500).json({message: "Something went wrong", data: err});
    }
};

module.exports.verifyResetOtp = async (req, res) => {
    const {email, otp} = req.body;
    const user = await User.findOne({
        where: {email: email},
    });
    if (user.VerificationOtp === otp) {
        return res.status(200).json({message: "OTP Verified"});
    }
    return res.status(500).json({message: "Invalid OTP"});
};

module.exports.resetPassword = async (req, res) => {
    const {email, password, password2} = req.body;
    const user = await User.findOne({
        where: {email: email},
    });
    if (!user) {
        return res.status(500).json({message: "User not found"});
    }
    if (password !== password2) {
        return res.status(500).json({message: "Passwords do not match"});
    }
    user.password = password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.save();
    return res.status(200).json({message: "Password reset successfully", data: {user}});
};
