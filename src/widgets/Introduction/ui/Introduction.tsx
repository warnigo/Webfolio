/* eslint-disable tailwindcss/no-contradicting-classname */
"use client"

import { type FC, useRef } from "react"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { Code, ExternalLink } from "lucide-react"

import { MotionButton } from "@shared/motion-ui"
import { Separator } from "@shared/ui"
import { Terminal } from "@entities/Terminal"

import { CodeDecoration } from "./CodeDecoration"
import { MatrixBackground } from "./MatrixBackground"

const Introduction: FC = () => {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)

  // Code-like decorative elements
  const codeDecorations = [
    { text: "</>" },
    { text: "{}" },
    { text: "[]" },
    { text: "()" },
  ]

  return (
    <motion.section
      ref={sectionRef}
      animate={{ opacity: 1 }}
      aria-label={t("Introduction.sectionAriaLabel")}
      className="relative grid min-h-screen grid-cols-1 items-center px-4 py-12 lg:grid-cols-12 lg:gap-8"
      initial={{ opacity: 0 }}
      role="region"
      transition={{ duration: 0.6 }}
    >
      <MatrixBackground />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {codeDecorations.map((item, index) => (
          <CodeDecoration key={index} index={index} text={item.text} />
        ))}

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(120,120,120,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="z-10 col-span-1 lg:col-span-5">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-sm text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-400"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold">~/</span>
              <span>Software Developer</span>
            </motion.span>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="font-sans text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-gray-100">
              {t("Common.me")}
              <span className="text-emerald-500">.</span>
            </h1>
            <div className="mt-3 font-mono text-base text-gray-600 dark:text-gray-400">
              <span className="text-gray-500 dark:text-gray-500">$ </span>
              {t("Introduction.occupation")}
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scaleX: 1 }}
            className="py-2"
            initial={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Separator className="bg-emerald-500/20" />
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg font-sans text-base leading-relaxed text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I craft elegant, efficient solutions to complex problems. With a
            focus on performance and user experience, I build applications that
            make an impact. Let&apos;s turn ideas into reality.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <MotionButton
              aria-label={t("Common.aboutMe")}
              className="rounded-md bg-emerald-600 font-sans text-sm font-medium text-white transition-all hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
              hoverIcon={<Code className="size-4" />}
            >
              {t("Common.aboutMe")}
            </MotionButton>

            <MotionButton
              aria-label={t("Common.contactMe")}
              className="rounded-md border-gray-300 font-sans text-sm font-medium text-gray-800 transition-all hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              hoverIcon={<ExternalLink className="size-4" />}
              variant="outline"
            >
              {t("Common.contactMe")}
            </MotionButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="col-span-1 mt-12 lg:col-span-7 lg:mt-0"
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Terminal />
      </motion.div>

      <motion.div
        animate={{ opacity: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          className="flex flex-col items-center gap-1"
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Scroll
          </div>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="text-gray-500 dark:text-gray-400"
              d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

Introduction.displayName = "Introduction"
export default Introduction
