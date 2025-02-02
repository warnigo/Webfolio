"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { AnimatePresence, motion } from "framer-motion"

// Variants for the animation (initial, animate, exit states)
const bannerVariants = {
  initial: { y: -100 },
  animate: { y: 0 },
  exit: { y: -100 },
  transition: { type: "spring", stiffness: 300, damping: 30 },
}

// BetaBanner component
const BetaBanner: FC = () => {
  const t = useTranslations("BetaBanner")

  return (
    <AnimatePresence>
      <motion.div
        animate="animate"
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-1 text-center text-sm font-medium text-white shadow-md sm:py-2"
        exit="exit"
        initial="initial"
        transition={bannerVariants.transition}
        variants={bannerVariants}
      >
        <p className="text-xs sm:text-sm md:text-base">{t("title")}</p>
      </motion.div>
    </AnimatePresence>
  )
}

BetaBanner.displayName = "BetaBanner"
export default BetaBanner
