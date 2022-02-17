const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
require("dotenv").config();

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },

    });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "smblg46@gmail.com",
      subject: subject,
      text: text,
    });
    console.log("Email sent");
  } catch (error) {
    console.log(error);
  }
};
