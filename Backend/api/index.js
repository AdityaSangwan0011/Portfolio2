const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middleware
app.use(
  cors({
    origin: "*", // or specify your frontend URL for security
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route for checking server
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Portfolio Email API</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: white;
          text-align: center;
          margin: 0;
        }
        .container {
          background: rgba(0, 0, 0, 0.3);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        a {
          margin-top: 20px;
          display: inline-block;
          padding: 10px 20px;
          background: white;
          color: #3a1c71;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📨 Email API by Aditya Sangwan</h1>
        <p>This backend is working perfectly!<br/>Use <code>POST /send-email</code> to send contact form data.</p>
        <a href="https://mritunjay-singh.netlify.app/" target="_blank">Visit My Portfolio</a>
      </div>
    </body>
    </html>
  `);
});

app.post("/send-email", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "adityasangwan4u@gmail.com",
    subject: subject || "New Contact Form Message",
    html: `
   <div style="font-family: 'Helvetica Neue', sans-serif; background: #eef2f3; padding: 30px;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 25px;">
      <h2 style="margin: 0;">Contact Message Received</h2>
    </div>
    <div style="padding: 20px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    </div>
    <div style="background: #f5f5f5; padding: 15px; text-align: center; font-size: 0.85rem; color: #999;">
      Sent from your website contact form.
    </div>
  </div>
</div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).send("Failed to send email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

// Export for Vercel serverless
module.exports = app;
