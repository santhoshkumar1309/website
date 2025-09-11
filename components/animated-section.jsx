"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const getInitialAnimation = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 }
      case "down":
        return { opacity: 0, y: -50 }
      case "left":
        return { opacity: 0, x: 50 }
      case "right":
        return { opacity: 0, x: -50 }
      case "scale":
        return { opacity: 0, scale: 0.9 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getAnimationTarget = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "scale":
        return { opacity: 1, scale: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialAnimation()}
      animate={isInView ? getAnimationTarget() : getInitialAnimation()}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

