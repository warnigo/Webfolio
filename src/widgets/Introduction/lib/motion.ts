// Staggered text reveal for each line
import { type Variants } from "framer-motion"

export const lineReveal = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * i,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

// Text highlight effect
export const highlightText = {
  initial: {
    backgroundSize: "0% 100%",
    backgroundPosition: "0% 100%",
  },
  animate: {
    backgroundSize: "100% 100%",
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "circOut",
    },
  },
}

// Floating hand animation
export const handWave = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 4,
    },
  },
}

// Subtle floating animation
export const floatingElement = {
  animate: (duration: number) => ({
    y: [0, -10, 0, 10, 0],
    x: [0, 5, 0, -5, 0],
    rotate: [0, 2, 0, -2, 0],
    opacity: [0.3, 0.5, 0.7, 0.5, 0.3],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
} satisfies Variants

// Progressive image reveal
export const imageReveal = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    filter: "grayscale(1) contrast(1.2)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    filter: "grayscale(0.3) contrast(1)",
    transition: {
      clipPath: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
      filter: { duration: 1, delay: 0.8 },
    },
  },
  hover: {
    filter: "grayscale(0) contrast(1.05)",
    scale: 1.02,
    transition: { duration: 0.4 },
  },
}

// Social link item animation
export const socialLinkAnimation = {
  initial: { x: -10, opacity: 0 },
  animate: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 1.2 + i * 0.1, duration: 0.5 },
  }),
  hover: {
    y: -3,
    transition: { duration: 0.2 },
  },
}
