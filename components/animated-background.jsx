"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground({
  children,
  className,
  type = "gradient", // "gradient", "particles", "waves", "grid"
  ...props
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  if (type === "particles") {
    return (
      <div className={`relative overflow-hidden ${className}`} {...props}>
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  if (type === "waves") {
    return (
      <div className={`relative overflow-hidden ${className}`} {...props}>
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 left-0 right-0 bg-primary/10"
              initial={{
                y: 0,
                height: `${(i + 1) * 100}px`,
                opacity: 0.1 - i * 0.02,
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  if (type === "grid") {
    return (
      <div className={`relative overflow-hidden ${className}`} {...props}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  // Default "gradient" type
  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

