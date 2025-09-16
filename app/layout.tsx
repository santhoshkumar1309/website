import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"
import { ThemeProvider } from "@/components/theme-provider"
import DarkModeEffect from "@/components/dark-mode-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evai Technologies | Innovating the Future with Technology",
  description: "Leading provider of IT solutions, AI/ML services, and cloud computing solutions.",
  generator: "v0.dev",
  icons: {
    icon: "/logo2.ico", 
    shortcut: "/favicon.ico",
    apple: "/iphone.png", 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
     <ThemeProvider
  attribute="class"
  defaultTheme="light"
  disableTransitionOnChange
   enableSystem={false} // ignore system preference
>
          <DarkModeEffect />
          <div className="flex min-h-screen flex-col">
            <Header />
            {/* Add responsive padding to main to account for fixed header */}
            <main className="flex-1 pt-[70px] md:pt-[120px]">{children}</main>
            <Footer />
            <ChatbotButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

