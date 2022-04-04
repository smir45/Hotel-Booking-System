const express = require("express");
const slugify = require("slugify");
const {faq} = require("../../models");

module.exports.PostQuestion = async (req, res) => {
    try {

        const datas = req.body;
        // generate slug from title
        const slug = slugify(datas.title, {
            replacement: "-",
            remove: /[*+~.()'"!:@]/g,
            lower: true,
        });
        const faaqq = await faq.create({
            title: datas.title,
            description: datas.description,

            slug: slug,
        });
        res.status(200).json(faaqq);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.GetAllQuestions = async (req, res) => {
    try {
        const faqs = await faq.findAll();
        res.status(200).json({data: faqs});
    } catch (err) {
        res.status(400).json(err);
    }
};
