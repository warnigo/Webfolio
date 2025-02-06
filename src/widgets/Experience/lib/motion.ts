import { type Variants } from "framer-motion"

export const cardContainer: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}
