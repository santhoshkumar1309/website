import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const { name, email, company, phone, projectType, message } = data;

    // Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "info@evaitech.com", // your business email
      subject: `New Consultation Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Phone: ${phone || "N/A"}
Project Type: ${projectType}
Message: ${message || "N/A"}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
