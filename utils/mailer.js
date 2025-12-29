const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host:"smtp.gmail.com",
  port: 456,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,  
  }
});

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: '"QuickCureHealth" <quickcurehealth@gmail.com>',
    to,
    subject,
    html
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
