import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465
      auth: {
     user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // fix for self-signed cert issue
      },
    });

    await transporter.sendMail({
      from: `"${name}"`, // same as above Gmail
      to: "info@evaitech.com",         // recipient
      subject: subject || "New Contact Form Message",
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500 }
    );
  }
}
