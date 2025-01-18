"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { MotionButton } from "@/shared/motion-ui"

import { Separator } from "@shared/ui"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, UtilityPole } from "lucide-react"

import { handWave, shapes } from "../model/constants"

const Introduction: FC = () => {
  const t = useTranslations()

  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="container relative mx-auto grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-8 lg:grid-cols-2"
      initial={{ opacity: 0 }}
    >
      <div className="max-w-3xl space-y-8">
        <div className="flex flex-col gap-2">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-lg font-medium text-highlight"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              animate="animate"
              className="inline-block"
              initial="initial"
              variants={handWave}
            >
              👋
            </motion.span>
            Hello, I&apos;m
          </motion.p>

          <div>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black md:text-5xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("Common.me")}
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-highlight"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("Introduction.occupation")}
            </motion.p>
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Separator />
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm text-highlight/80"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t("Introduction.shortAboutMe")}
          </motion.p>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MotionButton
            className="min-h-10 rounded-xl"
            hoverIcon={<ChevronDown />}
          >
            View Projects
          </MotionButton>
          <MotionButton
            className="min-h-10 rounded-xl"
            hoverIcon={<UtilityPole />}
            variant="outline"
          >
            Contact Me
          </MotionButton>
        </motion.div>
      </div>

      <AnimatePresence>
        <div className="relative hidden h-[600px] lg:block">
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              className={`absolute ${shape.color} ${shape.size} rounded-full blur-2xl`}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 0.8,
                x: 0,
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              style={{
                top: `${(index + 1) * 20}%`,
                right: `${(index + 1) * 5}%`,
              }}
              transition={{
                delay: shape.delay,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </AnimatePresence>
    </motion.section>
  )
}

Introduction.displayName = "Introduction"
export default Introduction
