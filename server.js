import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body

// Replace these with your email credentials
const SMTP_USER = "your-email@gmail.com";
const SMTP_PASS = "your-app-password"; // Use App Password if 2FA is on

// Configure Nodemailer SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// Contact form endpoint
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`, // sender info
    to: SMTP_USER,               // your inbox
    subject: `New Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<h3>New Contact Form Submission</h3>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
