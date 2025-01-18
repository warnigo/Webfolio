"use client"

import { type FC } from "react"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

import { MotionButton } from "@/shared/motion-ui"

import { Badge } from "@shared/ui"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { ArrowDown, ChevronDown, UtilityPole } from "lucide-react"

const handWave = {
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

const shapes = [
  { color: "bg-purple-400/30", size: "size-32", delay: 0 },
  { color: "bg-blue-400/30", size: "size-40", delay: 0.2 },
  { color: "bg-indigo-400/30", size: "size-36", delay: 0.4 },
]

const Home: FC = () => {
  const t = useTranslations()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="container relative mx-auto grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-8 lg:grid-cols-2"
      initial={{ opacity: 0 }}
    >
      {/* Left Content */}
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-lg font-medium text-purple-600 dark:text-purple-400"
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

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("Common.me")}
            <span className="block text-gray-500">Frontend Developer</span>
          </motion.h1>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Badge
              withDot
              className="rounded-full border-border py-2 pr-4 font-mono text-sm"
              dotClassName="size-2 border border-green-600 mx-2"
              dotColor="bg-green-500"
              variant="secondary"
            >
              <p className="select-none">{t("Layout.availableWork")}</p>
            </Badge>
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm text-highlight/80"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Based in Uzbekistan, I&apos;m a frontend developer passionate about
            building modern web applications. I specialize in creating
            responsive, performant, and user-friendly interfaces that solve
            real-world problems.
          </motion.p>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
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
        {mounted ? (
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
        ) : null}
      </AnimatePresence>

      <motion.div
        animate={{ opacity: 1, y: 10 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="size-6 text-gray-400" />
      </motion.div>
    </motion.section>
  )
}

Home.displayName = "Home"
export default Home
