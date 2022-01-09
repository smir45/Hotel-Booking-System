const express = require("express");
const router = express.Router();
const { PostQuestion, GetAllQuestions } = require("../controllers/faq.controller");

router.post("/post", PostQuestion);
router.get("/get", GetAllQuestions);

module.exports = router;
