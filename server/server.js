const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

app.post("/send-email", async (req, res) => {
  const { text } = req.body;

  try {
    transporter.sendMail({
      from: process.env.USER,
      to: "lorenacapraru@gmail.com",
      subject: "Contact from Lorena Portofolio",
      text,
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Email failed to send");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
