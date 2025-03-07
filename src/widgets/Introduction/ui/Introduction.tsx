"use client"

import { type FC } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

import { AnimatePresence, motion, type Variants } from "framer-motion"
import { User, UtilityPole } from "lucide-react"

import { MotionButton } from "@shared/motion-ui"
import { Separator } from "@shared/ui"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeInRight = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const handWave = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
      delay: 0.5,
    },
  },
}

// Improved background shapes with better positioning
const shapes = [
  {
    color: "bg-purple-500/20",
    size: "size-24",
    delay: 0,
    position: { top: "15%", right: "10%" },
  },
  {
    color: "bg-blue-500/20",
    size: "size-32",
    delay: 0.3,
    position: { top: "40%", right: "5%" },
  },
  {
    color: "bg-indigo-500/20",
    size: "size-36",
    delay: 0.6,
    position: { top: "65%", right: "15%" },
  },
]

// Enhanced floating animation for shapes
const floatingShapes = {
  animate: {
    opacity: [0.4, 0.7, 0.4],
    x: [0, 10, 0],
    y: [0, 15, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
} satisfies Variants

const imageAnimation = {
  initial: {
    clipPath: "circle(0% at 50% 50%)",
    filter: "grayscale(1)",
    opacity: 0,
  },
  animate: {
    clipPath: "circle(100% at 50% 50%)",
    filter: "grayscale(0.3)",
    opacity: 1,
    transition: {
      clipPath: { duration: 1.2, ease: "easeOut" },
      filter: { duration: 0.8, delay: 0.8 },
      opacity: { duration: 0.5 },
    },
  },
  hover: {
    filter: "grayscale(0)",
    scale: 1.03,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  },
}

const Introduction: FC = () => {
  const t = useTranslations()

  return (
    <motion.section
      animate={{ opacity: 1 }}
      aria-label={t("Introduction.sectionAriaLabel")}
      className="relative grid min-h-[calc(100vh-101px)] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2"
      initial={{ opacity: 0 }}
      role="region"
    >
      <div className="max-w-3xl space-y-8">
        <div className="flex flex-col gap-3">
          <motion.p
            animate="animate"
            className="inline-flex items-center gap-2 text-lg font-medium text-highlight"
            initial="initial"
            role="text"
            variants={fadeInUp}
          >
            <motion.span
              animate="animate"
              aria-hidden="true"
              className="inline-block"
              initial="initial"
              variants={handWave}
            >
              👋
            </motion.span>
            {t("Introduction.hello")}
          </motion.p>

          <div>
            <motion.h1
              animate="animate"
              className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl"
              initial="initial"
              transition={{ delay: 0.1 }}
              variants={fadeInUp}
            >
              {t("Common.me")}
            </motion.h1>

            <motion.p
              animate="animate"
              className="font-mono text-highlight"
              initial="initial"
              transition={{ delay: 0.2 }}
              variants={fadeInUp}
            >
              {t("Introduction.occupation")}
            </motion.p>
          </div>

          <motion.div
            animate="animate"
            className="flex items-center gap-4"
            initial="initial"
            transition={{ delay: 0.3 }}
            variants={fadeInUp}
          >
            <Separator className="w-16 bg-highlight/40" />
          </motion.div>

          <motion.p
            animate="animate"
            className="font-mono text-sm leading-relaxed text-highlight/80"
            initial="initial"
            transition={{ delay: 0.4 }}
            variants={fadeInUp}
          >
            {t("Introduction.shortAboutMe")}
          </motion.p>
        </div>

        <motion.div
          animate="animate"
          className="flex flex-wrap gap-4 pt-4"
          initial="initial"
          transition={{ delay: 0.5 }}
          variants={fadeInUp}
        >
          <MotionButton
            aria-label={t("Common.aboutMe")}
            className="min-h-10 rounded-xl bg-highlight/10 text-highlight hover:bg-highlight/20"
            hoverIcon={<User size={18} />}
          >
            {t("Common.aboutMe")}
          </MotionButton>
          {/*<MotionButton*/}
          {/*  aria-label={t("Common.myProjects")}*/}
          {/*  className="min-h-10 rounded-xl border-highlight/20 text-highlight hover:bg-highlight/5"*/}
          {/*  hoverIcon={<Code size={18} />}*/}
          {/*  variant="outline"*/}
          {/*>*/}
          {/*  {t("Common.myProjects")}*/}
          {/*</MotionButton>*/}
          <MotionButton
            aria-label={t("Common.contactMe")}
            className="min-h-10 rounded-xl border-highlight/20 text-highlight hover:bg-highlight/5"
            hoverIcon={<UtilityPole size={18} />}
            variant="outline"
          >
            {t("Common.contactMe")}
          </MotionButton>
        </motion.div>
      </div>

      <AnimatePresence>
        <div className="relative hidden lg:block">
          {/* Enhanced frame with animated border */}
          <motion.div
            animate="animate"
            className="absolute z-0 border border-highlight/10"
            initial="initial"
            transition={{ delay: 0.3 }}
            variants={fadeInRight}
            style={{
              top: -12,
              left: 12,
              right: -12,
              bottom: 12,
              borderRadius: "0.75rem",
            }}
          />

          {/* Square profile image container with enhanced animations */}
          <motion.div
            animate="animate"
            className="relative z-10 aspect-square overflow-hidden rounded-lg"
            initial="initial"
            variants={imageAnimation}
            whileHover="hover"
          >
            <Image
              priority
              alt={t("Introduction.profileImageAlt")}
              className="size-full object-cover"
              height={400}
              sizes="400px"
              src="/me.webp"
              width={400}
            />
          </motion.div>

          {/* Animated corner decorations */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="absolute -bottom-3 -right-3 size-6 border-b-2 border-r-2 border-highlight/30"
            initial={{ opacity: 0, x: 20 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="absolute -left-3 -top-3 size-6 border-l-2 border-t-2 border-highlight/30"
            initial={{ opacity: 0, x: -20 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />

          {/* Enhanced background shapes with better animation */}
          <div className="absolute inset-0 -z-10">
            {shapes.map((shape, index) => (
              <motion.div
                key={index}
                animate="animate"
                aria-hidden="true"
                className={`absolute ${shape.color} ${shape.size} rounded-full blur-3xl`}
                initial={{ opacity: 0 }}
                variants={floatingShapes}
                style={{
                  top: shape.position.top,
                  right: shape.position.right,
                }}
                transition={{
                  delay: shape.delay,
                }}
              />
            ))}
          </div>
        </div>
      </AnimatePresence>
    </motion.section>
  )
}

Introduction.displayName = "Introduction"
export default Introduction
