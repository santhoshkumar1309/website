"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ReactMarkdown from "react-markdown"

type Message = {
  role: "user" | "bot"
  content: string
}

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi there! How can I help you today?" },
  ])
  const [input, setInput] = useState<string>("")

  const quickOptions: string[] = [
    "About Evai Technologies",
    "Services",
    "Contact Info",
    "Social Media",
  ]

  const predefinedReplies: Record<string, string> = {
  "About Evai Technologies": `Evai Technologies is a cutting-edge technology company based in Karur, Tamil Nadu, India. We specialize in developing innovative, AI-powered solutions that cater to various industries. Our mission is to leverage artificial intelligence and machine learning to provide businesses with advanced tools that enhance efficiency, accuracy, and security.`,

  "Services": `**IT Solutions** → Comprehensive IT solutions tailored to business needs.  
- **Software Development** → Custom software for unique business challenges.  
- **Web Development** → Responsive, user-friendly websites & web apps.  
- **Mobile App Development** → Native & cross-platform iOS/Android apps.  
- **AI & ML Solutions** → Unlock business potential with AI & ML.  
- **Data Analytics** → Transform data into actionable insights.  
- **Natural Language Processing (NLP)** → Chatbots, sentiment analysis, text classification.  
- **Predictive Analytics** → Forecast trends & behaviors with ML models.`,

  "Contact Info": `📍 Karur, Tamil Nadu, India, 639114  
📞 +91-6369628052  
📧 info@evaitech.com`,

  "Social Media": `[LinkedIn](https://linkedin.com) | [Twitter](https://twitter.com) | [Facebook](https://facebook.com) | [Instagram](https://instagram.com)`,
}


const handleSend = async (userMessage: string) => {
  if (!userMessage.trim()) return

  setMessages((prev) => [...prev, { role: "user", content: userMessage }])
  setInput("")

  // If it’s a predefined option, return instantly
  if (predefinedReplies[userMessage]) {
    setMessages((prev) => [
      ...prev,
      { role: "bot", content: predefinedReplies[userMessage] },
    ])
    return
  }

  // Otherwise, call API
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    })

    const data: { reply: string } = await res.json()
    setMessages((prev) => [...prev, { role: "bot", content: data.reply }])
  } catch (err) {
    console.error(err)
    setMessages((prev) => [
      ...prev,
      { role: "bot", content: "We will get back to you soon." },
    ])
  }
}

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Open chatbot"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-background border rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-medium">Evai Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chatbot"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 ${
                    message.role === "user" ? "flex justify-end" : "flex justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-muted rounded-bl-none"
                    }`}
                  >
                    {message.role === "bot" ? (
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Quick options */}
              {messages[messages.length - 1]?.role === "bot" && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickOptions.map((option, idx) => (
                    <Button
                      key={idx}
                      size="sm"
                      variant="outline"
                      onClick={() => handleSend(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t p-3">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  onClick={() => handleSend(input)}
                  size="icon"
                  variant="default"
                  disabled={!input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
