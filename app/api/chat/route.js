import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { message } = await req.json()

    // Website content context
    const websiteContext = `
You are Evai Assistant for Evai Technologies. The user might ask about our products, services, features, or contact info.

Company Info:
- Evai Technologies, Karur, Tamil Nadu, India
- Contact: +91-6369628052 | info@evaitech.com
- Website sections: Home, About Us, Services, Products, Contact

Products:
1. EVAI-Vision Billing System: AI-powered automated billing system; features: automated invoice extraction, high accuracy, integration with accounting systems.
2. EVAI-VisionGuard: AI-driven behavior analysis system for theft control; features: real-time suspicious activity detection, alerting, analytics.
3. EVAI-FabricVision: AI textile solutions; features: defect detection, color quality monitoring, fabric classification, machine monitoring.

Key Features:
- AI-Powered
- Secure by Design
- Scalable Architecture
- User-Friendly
- Data Integration
- Advanced Analytics

Services:
- IT Solutions
- AI & ML Solutions
- Custom Technology Products

Socials:
- LinkedIn, Twitter, Facebook, Instagram
`

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: websiteContext },
          { role: "user", content: message },
        ],
      }),
    })

    const data = await response.json()

    // Always return a polite message
    const reply = data?.choices?.[0]?.message?.content || "We will get back to you soon."
    return NextResponse.json({ reply })

  } catch (error) {
    // On any error, respond politely
    return NextResponse.json({ reply: "We will get back to you soon." })
  }
}
