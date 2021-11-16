const express = require("express");
const { User } = require("../models");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {loginValidation} = require('../validation')
const Joi = require("joi");
require("dotenv").config();

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
  phone: Joi.number().min(10).required(),
});

const findAll = async (req, res) => {
  try{
    const users = await User.findAll();
    res.status(200).json({
      message: 'success',
      data: users
    })
  }
  catch(err){
    res.status(400).json({
      message: 'fail',
      data: err
    })
  }
 
};

const createUser = async (req, res) => {
  const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    //checking if user already exist
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) return res.status(400).send("User already exist");
  
    // generating password hash
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
  
    // creating user
    const userdata = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
      phone: req.body.phone,
    });
    try {
      const saveUser = await userdata.save();
      res.send("Registration Successful");
      console.log("Success")
    } catch (err) {
      res.json(err);
      console.log("Error")
    }
};

const findUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({
    message: 'success',
    data: user,
  });
};

const updateUser = async (req, res) => {
  const Updateschema = Joi.object({
    name: Joi.string().min(6),
    email: Joi.string().min(6).email(),
    password: Joi.string().min(8),
    phone: Joi.number().min(10),
  });
  const { id } = req.params;
  const { error } = Updateschema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.phone = req.body.phone;

  try {
    await user.save();
    res.status(200).json({
      message: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: 'fail',
      data: err,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  try {
    await user.destroy();
    res.status(200).json({
      message: 'success',
      data: user,
    });
  }
  catch (err) {
    res.status(400).json({
      message: 'fail',
      data: err,
    });
  }
}

module.exports = {
  findAll,
  createUser,
  findUser,
  updateUser,
  deleteUser
};


