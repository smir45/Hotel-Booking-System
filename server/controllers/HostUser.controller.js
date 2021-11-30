const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi")
const { registrationschema } = require("../validation");
const { Hostusers } = require("../models")


module.exports.CreateHostUser = async (req, res) => {
    const { error } = registrationschema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "fail",
        data: error.details[0].message
      });
    }
    const email = req.body.email;
    const hostuser = await Hostusers.findOne({
        where: {
            email: email
        },
    });
    if(hostuser){
        return res.status(400).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    const newHostuser = new Hostusers({
        name: req.body.name,
        email: req.body.email,
        password: hashedpassword,
        phone: req.body.phone,
    })
    try{
        const savedHostUser = await newHostuser.save();
        res.status(200).json(savedHostUser);
    }catch(err){
        res.status(500).json(err);
    }
    

}
