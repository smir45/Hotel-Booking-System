const express = require('express');
const { User } = require("../../models");

module.exports.emailVerification = async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({
        where: { email: email }
    })
    if(user.isVerified) {
        return res.status(500).json({ message: "User already verified" })
        
    }
    if(user.VerificationOtp === otp) {
        user.isVerified = true;
        user.save();
        return res.status(200).json({ message: "User verified successfully" })
    }
    return res.status(500).json({ message: "Invalid OTP" })
}


module.exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
        where: { email: email }
    })
    if(!user) {
        return res.status(500).json({ message: "User not found" })
    }
    const otp = Math.floor(Math.random() * 100000);
    user.VerificationOtp = otp;
    user.save();
    return res.status(200).json({ message: "OTP sent successfully" })
}