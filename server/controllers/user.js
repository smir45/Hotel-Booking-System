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

module.exports.findAll = async (req, res, next) => {
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

module.exports.createUser = async (req, res, next) => {
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

module.exports.findUser = async (req, res) => {
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

module.exports.updateUser = async (req, res) => {
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

module.exports.deleteUser = async (req, res) => {
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



module.exports.userLogin = async (req, res, next) => {
  const user = await User.findOne({
      where: { email: req.body.email },
    }
  );
  if (!user) return res.status(400).send("Invalid Email or Username");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Password");

  const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {expiresIn: '1h'});

  res.header("auth-token", token).json({
    message: "Logged in successfully",
    data: token,
  });
  next()
};
