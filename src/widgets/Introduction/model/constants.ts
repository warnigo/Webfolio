import { type Variants } from "framer-motion"

export const handWave = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
} satisfies Variants

export const shapes = [
  { color: "bg-purple-400/30", size: "size-32", delay: 0 },
  { color: "bg-blue-400/30", size: "size-40", delay: 0.2 },
  { color: "bg-indigo-400/30", size: "size-36", delay: 0.4 },
]
