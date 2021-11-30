const express = require("express");
const router = express.Router();
const {
//   findAll,
CreateHostUser,
//   findUser,
//   updateUser,
//   deleteUser,
//   userLogin,
} = require("../controllers/HostUser.controller");

router.post("/", CreateHostUser);

module.exports = router;
