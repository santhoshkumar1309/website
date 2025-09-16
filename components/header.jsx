"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
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
  const [mounted, setMounted] = useState(false) // ✅ mounted state for theme
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // Track scroll to shrink header
  useEffect(() => {
    setMounted(true) // ✅ mark component as mounted
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerHeight = 70
  const mobileMenuHeight = 200

  // Prevent rendering icons before hydration
  const renderThemeIcon = () => {
    if (!mounted) return null
    return theme === "dark" ? <Moon className="h-5 w-5 text-yellow-300" /> : <Sun className="h-5 w-5 text-gray-800" />
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          scrolled
            ? "bg-white dark:bg-gradient-to-r dark:from-gray-400 dark:via-gray-700 dark:to-gray-900 shadow-md py-0"
            : "bg-white dark:bg-gradient-to-r dark:from-gray-400 dark:via-gray-700 dark:to-gray-900 py-1"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center rounded-xs transition-all duration-300"
            >
              <Image
                src="/Picture1-removebg-preview.png"
                alt="Evai Logo"
                width={scrolled && theme === "dark" ? 60 : 70}
                height={scrolled && theme === "dark" ? 60 : 70}
                className="object-contain transition-all duration-300 sm:w-40 sm:h-40 w-20 h-20"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
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
                {renderThemeIcon()}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {renderThemeIcon()}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className={isOpen ? `pt-[${headerHeight + mobileMenuHeight}px] md:pt-[${headerHeight}px]` : `pt-[${headerHeight}px]`} />

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "md:hidden shadow-lg fixed top-[70px] left-0 w-full z-40",
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
      </AnimatePresence>
    </>
  )
}
