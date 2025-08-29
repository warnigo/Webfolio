"use client"

import { type FC } from "react"

import { motion } from "framer-motion"

import { homeSections } from "../model/constants"

export const sectionVariants = {
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  initial: { opacity: 0, y: 20 },
  transition: { duration: 0.5 },
}

const Home: FC = () =>
  Object.entries(homeSections).map(([key, SectionComponent]) => (
    <motion.div
      key={key}
      animate="animate"
      className="container mx-auto"
      exit="exit"
      initial="initial"
      transition={sectionVariants.transition}
      variants={sectionVariants}
    >
      <SectionComponent />
    </motion.div>
  ))

Home.displayName = "Home"
export default Home
