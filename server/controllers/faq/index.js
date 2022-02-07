const express = require("express");
const slugify = require("slugify");
const { Faq } = require("../../models");

module.exports.PostQuestion = async (req, res) => {
  try {
    const datas = req.body;
    // generate slug from title
    const slug = slugify(datas.title, {
      replacement: "-",
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    });
    try {
      const faq = await Faq.create({
        ...datas,
        slug,
      });
      res.status(201).json(faq);
    } catch (err) {
      res.status(400).json(err);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.GetAllQuestions = async (req, res) => {
  try {
    const faqs = await Faq.findAll();
    res.status(200).json(faqs);
  } catch (err) {
    res.status(400).json(err);
  }
};
