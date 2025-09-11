"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxSection({ children, className, speed = 0.5, direction = "up", ...props }) {
  const ref = useRef(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const { scrollY } = useScroll()

  // Calculate the transform values based on scroll position
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    direction === "up" ? [speed * 100, -speed * 100] : [-speed * 100, speed * 100],
  )

  useEffect(() => {
    setIsClient(true)

    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setClientHeight(window.innerHeight)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)

    return () => {
      window.removeEventListener("resize", updatePosition)
    }
  }, [])

  if (!isClient) {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={className} {...props}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

