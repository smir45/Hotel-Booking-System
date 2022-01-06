const nodemailer = require("nodemailer");
require("dotenv").config();

async function Nodemailer() {
  const testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user,
      password: testAccount.pass,
    },
  });
  let info = await transporter.sendMail({
    from: "smblg46@gmail.com",
    to: "smir.mishra1551@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
}

Nodemailer().catch(console.error);
module.exports = Nodemailer;
