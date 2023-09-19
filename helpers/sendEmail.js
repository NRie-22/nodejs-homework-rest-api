const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "inna.pokydko@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (email) => {
  try {
    await transport.sendMail(email);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error.message);
    throw error;
  }
};
module.exports = sendEmail;
