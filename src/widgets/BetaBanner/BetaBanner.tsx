"use client"

import { type FC, useState } from "react"
import { useTranslations } from "next-intl"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

const BetaBanner: FC = () => {
  const t = useTranslations("BetaBanner")
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        animate={{ y: 0 }}
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-2 text-center text-sm font-medium text-white shadow-md"
        exit={{ y: -100 }}
        initial={{ y: -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <p>{t("title")}</p>
        <button
          aria-label={t("close")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 focus:outline-none"
          onClick={() => setIsVisible(false)}
        >
          <X size={18} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

BetaBanner.displayName = "BetaBanner"
export default BetaBanner
