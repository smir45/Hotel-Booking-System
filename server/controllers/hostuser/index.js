const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { registrationschema, UpdateSchema } = require("../../validation");
const { Admin } = require("../../models");

module.exports.CreateHostUser = async (req, res, next) => {
  const { error } = registrationschema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "fail",
      data: error.details[0].message,
    });
  }
  const email = req.body.email;
  const hostuser = await Admin.findOne({
    where: {
      email: email,
    },
  });
  if (hostuser) {
    return res.status(400).send("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const newHostuser = new Admin({
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
  const hostuser = await Admin.findOne({
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
    const hostuser = await Admin.findAll();
    res.status(200).json(hostuser);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.UpdateAHost = async (req, res) => {
  const uuid = req.params.uuid;
  const hostuser = await Admin.findOne({
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
    const updatedHostuser = await Admin.update(
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
  const hostuser = await Admin.findOne({
    where: {
      uuid: uuid,
    },
  });
  if (!hostuser) {
    return res.status(404).json({ message: "hostuser not found" });
  }
  try {
    const deletedHostuser = await Admin.destroy({
      where: {
        uuid: uuid,
      },
    });
    res.status(200).json({ message: "hostuser deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

