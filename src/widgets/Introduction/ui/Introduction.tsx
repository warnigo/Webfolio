"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"

import { floatingElement } from "@widgets/Introduction/lib/motion"
import { floatingElements } from "@widgets/Introduction/model/constants"
import { LeftContent } from "@widgets/Introduction/ui/LeftContent"
import { RightContent } from "@widgets/Introduction/ui/RightContent"

const Introduction: FC = () => {
  const t = useTranslations()

  return (
    <motion.section
      animate={{ opacity: 1 }}
      aria-label={t("Introduction.sectionAriaLabel")}
      className="relative flex min-h-[calc(100vh-101px)] flex-col overflow-hidden lg:flex-row"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            animate="animate"
            aria-hidden="true"
            className={`absolute ${element.color} ${element.size} ${element.type === "circle" ? "rounded-full" : "rounded-lg"} blur-xl`}
            custom={element.duration}
            initial={{ opacity: 0 }}
            variants={floatingElement}
            style={{
              ...element.position,
              transitionDelay: `${element.delay}s`,
            }}
          />
        ))}
      </div>

      <LeftContent />

      <RightContent />
    </motion.section>
  )
}

Introduction.displayName = "Introduction"
export default Introduction
