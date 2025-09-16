import nodemailer from "nodemailer";

export const config = {
  api: { bodyParser: false },
};

export async function POST(req) {
  try {
    const formData = await req.formData(); // Native Web API
    const name = formData.get("name");
    const email = formData.get("email");
    const resumeFile = formData.get("resume"); // File object

    if (!resumeFile) throw new Error("Resume file is missing");

    // Convert file to buffer for nodemailer
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,     // App Password
      },
      tls: { rejectUnauthorized: false },
    });

    // Send email with attachment
    await transporter.sendMail({
      from: `"${name}" <yourgmail@gmail.com>`,
      to: "info@evaitech.com",         // Recipient email
      subject: "📄 New Job Application",
      html: `<h2>New Job Application</h2>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>`,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    });

    return new Response(
      JSON.stringify({ status: "success", message: "Application sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500 }
    );
  }
}
