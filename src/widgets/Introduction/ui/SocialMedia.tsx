"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { MoveUpRight } from "lucide-react"

import { ENV } from "@shared/config"
import {
  lineReveal,
  socialLinkAnimation,
} from "@widgets/Introduction/lib/motion"

export const SocialMedia: FC = () => {
  const t = useTranslations("Introduction")

  const socialLinks = [
    { name: "GitHub", url: ENV.github_account },
    { name: "LinkedIn", url: ENV.linkedin_account },
    { name: "Instagram", url: ENV.instagram_account },
  ]

  return (
    <div className="flex flex-col gap-2">
      <motion.p
        animate="animate"
        className="font-mono text-xs font-medium uppercase tracking-widest text-highlight/50"
        custom={7}
        initial="initial"
        variants={lineReveal}
      >
        {t("followMe")}
      </motion.p>

      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            animate="animate"
            className="flex items-center gap-1 text-sm text-highlight/60 duration-500 hover:text-highlight"
            custom={index}
            href={link.url}
            initial="initial"
            target="_blank"
            variants={socialLinkAnimation}
            whileHover="hover"
          >
            {link.name}
            <MoveUpRight size={12} />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
