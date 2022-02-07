const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { registrationschema, UpdateSchema } = require("../../validation");
const { Hostusers } = require("../../models");

module.exports.CreateHostUser = async (req, res, next) => {
  const { error } = registrationschema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "fail",
      data: error.details[0].message,
    });
  }
  const email = req.body.email;
  const hostuser = await Hostusers.findOne({
    where: {
      email: email,
    },
  });
  if (hostuser) {
    return res.status(400).send("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const newHostuser = new Hostusers({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword,
    phone: req.body.phone,
  });
  try {
    const savedHostUser = await newHostuser.save();
    res.status(200).json(savedHostUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.GetHostUser = async (req, res) => {
  const hostuser = await Hostusers.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });
  if (!hostuser) {
    res.status(500).json({ message: "User Doesn't exists" });
  }
  res.status(200).json(hostuser);
};

module.exports.GetAllHosts = async (req, res) => {
  try {
    const hostuser = await Hostusers.findAll();
    res.status(200).json(hostuser);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.UpdateAHost = async (req, res) => {
  const uuid = req.params.uuid;
  const hostuser = await Hostusers.findOne({
    where: {
      uuid: uuid,
    },
  });
  if (!hostuser) {
    return res.status(404).json({ message: "hostuser not found" });
  }
  const { error } = UpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "fail",
      data: error.details[0].message,
    });
  }
  try {
    const updatedHostuser = await Hostusers.update(
      {
        ...req.body,
      },
      {
        where: {
          uuid: uuid,
        },
      }
    );
    res.status(200).json(hostuser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.DeleteAHost = async (req, res) => {
  const uuid = req.params.uuid;
  const hostuser = await Hostusers.findOne({
    where: {
      uuid: uuid,
    },
  });
  if (!hostuser) {
    return res.status(404).json({ message: "hostuser not found" });
  }
  try {
    const deletedHostuser = await Hostusers.destroy({
      where: {
        uuid: uuid,
      },
    });
    res.status(200).json({ message: "hostuser deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.Login = async (req, res, next) => {
    const user = await Hostusers.findOne({
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