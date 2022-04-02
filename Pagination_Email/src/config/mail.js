const nodemailer =require("nodemailer");

module.exports = nodemailer.createTransport({
     host: "smtp.mailtrap.io",
     port: 587,
     secure: false, // true for 465, false for other ports
     auth: {
          user: "40f1158a8e6524", // generated ethereal user
          pass: "3583f398aa9f71", // generated ethereal password
     },
});