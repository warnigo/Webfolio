import { type FC } from "react"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { ArrowRight, SendHorizontal } from "lucide-react"

import { MotionButton } from "@shared/motion-ui"
import { handWave, lineReveal } from "@widgets/Introduction/lib/motion"
import { SocialMedia } from "@widgets/Introduction/ui/SocialMedia"

export const LeftContent: FC = () => {
  const t = useTranslations()
  return (
    <div className="flex flex-1 flex-col justify-center px-8 py-12 lg:px-16 lg:py-0">
      <motion.div
        animate="animate"
        className="flex items-center gap-2"
        custom={1}
        initial="initial"
        variants={lineReveal}
      >
        <motion.span
          animate="animate"
          aria-hidden="true"
          className="inline-block text-2xl"
          initial="initial"
          variants={handWave}
        >
          👋
        </motion.span>

        <span className="font-mono text-sm font-medium tracking-wider text-highlight/70">
          {t("Introduction.hello")}
        </span>
      </motion.div>

      <motion.h1
        animate="animate"
        className="mb-2 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        custom={2}
        initial="initial"
        variants={lineReveal}
      >
        <motion.span className="relative inline-block font-black">
          <motion.span
            animate={{ width: "100%" }}
            className="absolute bottom-0 left-0 -z-10 h-[6px] rounded-full"
            initial={{ width: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
          />
          {t("Common.me")}
        </motion.span>
      </motion.h1>

      <motion.div
        animate="animate"
        className="mb-8"
        custom={3}
        initial="initial"
        variants={lineReveal}
      >
        <span className="font-mono text-lg font-semibold text-highlight/80 md:text-xl">
          {t("Introduction.occupation")}
        </span>
      </motion.div>

      <motion.div
        animate="animate"
        className="mb-4 flex items-center gap-3"
        custom={4}
        initial="initial"
        variants={lineReveal}
      >
        <div className="h-px w-8 bg-highlight/30" />
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-highlight/60">
          {t("Common.about")}
        </span>

        <div className="h-px grow bg-highlight/10" />
      </motion.div>

      <motion.p
        animate="animate"
        className="mb-8 max-w-xl text-sm leading-relaxed text-highlight/70 md:text-base"
        custom={5}
        initial="initial"
        variants={lineReveal}
      >
        {t("Introduction.shortAboutMe")}
      </motion.p>

      <motion.div
        animate="animate"
        className="mb-12 flex gap-2 md:gap-5"
        custom={6}
        initial="initial"
        variants={lineReveal}
      >
        <MotionButton
          aria-label={t("Common.aboutMe")}
          className="group relative h-[38px] overflow-hidden rounded-xl border border-border"
          hoverIcon={
            <ArrowRight
              className="ml-2 inline-block transition-transform group-hover:translate-x-1"
              size={18}
            />
          }
        >
          {t("Introduction.aboutMeMore")}
        </MotionButton>

        <MotionButton
          aria-label={t("Common.contactMe")}
          className="group relative h-10 overflow-hidden rounded-xl"
          variant="outline"
          hoverIcon={
            <SendHorizontal
              className="ml-2 inline-block transition-transform group-hover:translate-x-1"
              size={18}
            />
          }
        >
          {t("Common.contactMe")}
        </MotionButton>
      </motion.div>

      <SocialMedia />
    </div>
  )
}

LeftContent.displayName = "LeftContent"
