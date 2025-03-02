"use client"

import { type FC, useEffect, useState } from "react"

import { motion } from "framer-motion"

export const CodeDecoration: FC<{ text: string; index: number }> = ({
  text,
  index,
}) => {
  // Use client-side only rendering to avoid hydration mismatch
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Set positions client-side to avoid hydration errors
    setPosition({
      x: 20 + index * 25 + Math.floor(Math.random() * 10),
      y: 10 + index * 20 + Math.floor(Math.random() * 15),
    })
  }, [index])

  return (
    <motion.div
      animate={{ opacity: 0.7 }}
      className="absolute font-mono text-4xl font-bold text-gray-800/5 dark:text-gray-100/5"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      {text}
    </motion.div>
  )
}

CodeDecoration.displayName = "CodeDecoration"
