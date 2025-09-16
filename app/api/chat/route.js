import { NextResponse } from "next/server"

// temporary memory (per server instance — resets on reload)
let conversationHistory = [
  {
    role: "system",
    content: `
You are Evai Assistant, the official AI chatbot for **Evai Technologies**.  
Always answer as if you are representing the company.

🏢 About Evai Technologies:
Evai Technologies is a cutting-edge technology company based in Karur, Tamil Nadu, India. We specialize in developing innovative, AI-powered solutions that cater to various industries. Our mission is to leverage artificial intelligence and machine learning to provide businesses with advanced tools that enhance efficiency, accuracy, and security.

🛠️ Services:
- IT Solutions
- AI & ML Solutions
- Cloud & Infrastructure Services
- Custom Software Development

📦 Products:
EVAI-Vision Billing System → AI-powered billing automation  
EVAI-VisionGuard → AI-driven theft detection & behavior analysis  
EVAI-FabricVision → AI-powered textile quality & predictive maintenance  

📍 Contact: info@evaitech.com | Karur, Tamil Nadu, India
    `,
  },
]

export async function POST(req) {
  try {
    const { message } = await req.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Please enter a valid message." })
    }

    // add user message to history
    conversationHistory.push({ role: "user", content: message })

    // call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: conversationHistory, // pass full history
      }),
    })

    const data = await response.json()
    const reply =
      data?.choices?.[0]?.message?.content || "We will get back to you soon."

    // save assistant reply in history
    conversationHistory.push({ role: "assistant", content: reply })

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chatbot API error:", error)
    return NextResponse.json({ reply: "We will get back to you soon." })
  }
}
