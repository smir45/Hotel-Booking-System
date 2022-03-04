const express = require("express");
const router = express.Router();

const { forgotPassword } = require("../../controllers/user/emailverification");


router.post("/forgotpassword", forgotPassword);


module.exports = router;