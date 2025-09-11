"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? theme === "dark"
            ? "bg-background/90 backdrop-blur-md border-b border-border/30 shadow-lg shadow-black/10 py-2"
            : "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={theme === "dark" ? "drop-shadow-[0_0_10px_rgba(255,122,0,0.3)]" : ""}
          >
            <div className="flex items-center">
        <Image
  src="/image.png" // <-- remove 'public\' and use forward slash
  alt="Evai Logo"
  width={95}
  height={95}
/>


              <span className="text-xl font-bold"></span>
            </div>
          </motion.div>
        </Link>

{/* Desktop Navigation (hidden on mobile) */}
<nav className="hidden md:flex items-center gap-x-8">
  <ul className="flex items-center gap-x-8">
    {navItems.map((item, index) => (
      <motion.li
        key={item.name}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Link
          href={item.path}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.path ? "text-primary" : "text-foreground/80"
          )}
        >
          {item.name}
        </Link>
      </motion.li>
    ))}
  </ul>

  {/* Action Buttons */}
  <div className="flex items-center space-x-4">
    <Button variant="fire" size="sm" asChild>
      <Link href="/consultation">Get a Free Consultation</Link>
    </Button>
     <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300" /> // 🌞 Switch to light
      ) : (
        <Moon className="h-5 w-5 text-gray-800" />  // 🌙 Switch to dark
      )}
    </button>
  </div>
</nav>

{/* Mobile Navigation Toggle (hidden on desktop) */}
<div className="flex md:hidden items-center">
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-2 mr-2 rounded-full hover:bg-muted transition-colors"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? (
      <Sun className="h-5 w-5 text-yellow-300" />
    ) : (
      <Moon className="h-5 w-5" />
    )}
  </button>
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="p-2 rounded-md hover:bg-muted transition-colors"
    aria-label="Toggle menu"
  >
    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
</div>


      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "md:hidden shadow-lg",
            theme === "dark"
              ? "bg-background/95 backdrop-blur-md border-b border-white/5"
              : "bg-background/95 backdrop-blur-md"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={cn(
                      "block py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.path ? "text-primary" : "text-foreground/80"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button variant="fire" className="w-full mt-2" asChild>
                  <Link href="/consultation">Get a Free Consultation</Link>
                </Button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  )
}
