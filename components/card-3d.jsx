"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function Card3D({
  children,
  className,
  glareEffect = true,
  rotateEffect = true,
  scaleOnHover = true,
  ...props
}) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!rotateEffect && !glareEffect) return

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    if (rotateEffect) {
      // Calculate rotation based on mouse position
      const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 5
      const rotateYValue = ((centerX - mouseX) / (rect.width / 2)) * 5

      setRotateX(rotateXValue)
      setRotateY(rotateYValue)
    }

    if (glareEffect) {
      // Calculate glare position
      const glareX = ((mouseX - rect.left) / rect.width) * 100
      const glareY = ((mouseY - rect.top) / rect.height) * 100

      setGlarePosition({ x: glareX, y: glareY })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-200",
        theme === "dark"
          ? "bg-gradient-to-br from-card to-card/80 border border-white/5 shadow-xl"
          : "bg-card shadow-lg",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      animate={{
        scale: isHovered && scaleOnHover ? 1.02 : 1,
      }}
      {...props}
    >
      {children}

      {glareEffect && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${theme === "dark" ? "0.2" : "0.15"}) 0%, rgba(255,255,255,0) 60%)`
              : "none",
            zIndex: 1,
          }}
        />
      )}
    </motion.div>
  )
}

