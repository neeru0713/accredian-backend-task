const nodemailer = require("nodemailer");
require("dotenv").config();

const sendReferralEmail = async (
  refereeName,
  refereeEmail,
  referrerName,
  course
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: refereeEmail,
      subject: "Referral Invitation",
      text: `Hello ${refereeName},\n\nYou have been referred by ${referrerName} for the ${course} course.\n\nBest regards,\nAccredian`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Failed to send referral email:", error);
  }
};

module.exports = {
  sendReferralEmail,
};
