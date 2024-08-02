const nodemailer = require('nodemailer');

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Email address from environment variable
    pass: process.env.EMAIL_PASS  // Email password or App password from environment variable
  }
});

// Function to send an email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
