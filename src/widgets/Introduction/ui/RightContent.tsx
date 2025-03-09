"use client"

import { type FC } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

import { AnimatePresence, motion } from "framer-motion"

import { imageReveal } from "@widgets/Introduction/lib/motion"

export const RightContent: FC = () => {
  const t = useTranslations()

  return (
    <div className="relative flex flex-1 items-center justify-center py-8">
      <AnimatePresence>
        <motion.div
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
          className="relative max-w-md"
          initial={{ opacity: 0 }}
        >
          <motion.div
            className="absolute -inset-4 rounded-lg border border-highlight/10 opacity-60"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, duration: 0.8 },
            }}
          />

          <motion.div
            className="absolute -left-2 -top-2 size-6 rounded-tl-md border-l border-t border-highlight/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.8,
              scale: 1,
              transition: { delay: 1.2, duration: 0.5 },
            }}
          />

          <motion.div
            className="absolute -bottom-2 -right-2 size-6 rounded-br-md border-b border-r border-highlight/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.8,
              scale: 1,
              transition: { delay: 1.4, duration: 0.5 },
            }}
          />

          <motion.div
            animate="animate"
            className="relative z-10 overflow-hidden rounded-lg"
            initial="initial"
            variants={imageReveal}
            whileHover="hover"
          >
            <Image
              priority
              alt={t("Introduction.profileImageAlt")}
              className="h-auto w-full object-cover"
              height={480}
              src="/me.webp"
              width={400}
            />

            <motion.div
              className="absolute inset-0 bg-highlight/10"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ opacity: 0.2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.6, duration: 0.6 },
            }}
            className="absolute -bottom-6 -right-6 z-10 rounded-lg border border-white/10 bg-white/5
                        p-4 shadow-lg backdrop-blur-xl"
          >
            <div className="flex select-none gap-4 font-mono text-highlight">
              <div className="text-center">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-xs text-highlight/60">
                  {t("Introduction.yearsExp")}
                </p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xs text-highlight/80">
                  {t("Introduction.projects")}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

RightContent.displayName = "RightContent"
