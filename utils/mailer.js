const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
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
transporter.verify((err, success) => {
    if (err) console.log("SMTP ERROR:", err);
    else console.log("SMTP READY");
});


module.exports = sendEmail;
