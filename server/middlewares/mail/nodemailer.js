const nodemailer = require("nodemailer");
const hbs = require('nodemailer-handlebars');

exports.getTransporter = async () => {
  try {
    //App password Method
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
      }
    });

    transporter.use("compile", hbs({
      viewEngine:{
         partialsDir:"./views/",
         defaultLayout:""
     },
    viewPath:"./views/",
    extName:".hbs"
    }));
    return transporter;
  } catch (error) {
    console.log(error);
  }
};
