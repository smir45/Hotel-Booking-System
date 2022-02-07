const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
require('dotenv').config();

exports.getTransporter = async () => {
  try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    transporter.use("compile", hbs({
        viewEngine: {
            partialsDir: "./views/",
            defaultLayout: "",
        },
        viewPath: "./views/",
        extName: ".hbs",
    }));
  } catch (err) {
    console.log(err);
  }
};
