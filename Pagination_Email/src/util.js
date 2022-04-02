const transporter = require("./config/mail");

const sendMail= async ({from, to, subject, text, html, attachments, alternatives})=>{
     await transporter.sendMail({
          from, // sender address
          to, // list of receivers
          subject, // Subject line
          text, // plain text body
          html, // html body
          attachments,
          alternatives,
     });
}

const verificationMail = async({from, to, user, attachments, alternatives})=>{
     await sendMail({
          from,
          to,
          subject: `Send Verification Email to ${user.name}`,
          text: `Please ${user.name} Verify your Email`, 
          html: `<h1>Please ${user.name} Verify your Email</h1>`,
          attachments,
          alternatives,
     })
}
const welcomeMail = async({from, to, user, attachments, alternatives})=>{
     await sendMail({
          from,
          to,
          subject: `Send welcome Email to ${user.name}`,
          text: `${user.name} welcome`, 
          html: `<h1>${user.name} welcome</h1>`,
          attachments,
          alternatives,
     })
}

module.exports = {sendMail,verificationMail,welcomeMail};


