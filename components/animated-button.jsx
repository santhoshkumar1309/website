"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AnimatedButton({
  href,
  variant = "default",
  size = "default",
  className,
  children,
  withArrow = false,
  withShine = true,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonVariants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    fire: "bg-primary text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg transition-all duration-300",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    gradient: "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90",
  }

  const sizeVariants = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3 text-sm",
    lg: "h-11 rounded-md px-8",
    xl: "h-12 rounded-md px-10 text-base",
  }

  return (
    <Link href={href} passHref>
      <motion.div
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
          buttonVariants[variant],
          sizeVariants[size],
          className,
        )}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        <span className="relative z-10 flex items-center">
          {children}
          {withArrow && (
            <motion.span
              initial={{ x: 0, opacity: 1 }}
              animate={isHovered ? { x: 5, opacity: 1 } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          )}
        </span>

        {withShine && (
          <motion.div
            className="absolute top-0 -left-[100%] w-[80%] h-full bg-white/20 skew-x-12 transition-all z-0"
            initial={{ left: "-100%" }}
            animate={isHovered ? { left: "200%" } : { left: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    </Link>
  )
}

