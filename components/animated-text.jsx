"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export function AnimatedText({
  text,
  className,
  once = true,
  repeatDelay = 10,
  animation = "reveal", // "reveal", "typewriter", "bounce", "wave"
  ...props
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  if (!isClient) {
    return (
      <span className={className} {...props}>
        {text}
      </span>
    )
  }

  if (animation === "typewriter") {
    return (
      <motion.span ref={ref} className={className} {...props}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.1, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  if (animation === "bounce") {
    return (
      <motion.span ref={ref} className={className} {...props}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={
              isInView
                ? {
                    y: [0, -10, 0],
                    transition: {
                      delay: index * 0.05,
                      duration: 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: repeatDelay,
                    },
                  }
                : { y: 0 }
            }
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  if (animation === "wave") {
    return (
      <motion.span ref={ref} className={className} {...props}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ rotate: 0 }}
            animate={
              isInView
                ? {
                    rotate: [0, 15, -15, 0],
                    transition: {
                      delay: index * 0.05,
                      duration: 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: repeatDelay,
                    },
                  }
                : { rotate: 0 }
            }
            style={{ display: "inline-block", transformOrigin: "center bottom" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  // Default "reveal" animation
  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {text}
    </motion.span>
  )
}

