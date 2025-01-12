"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { MoveUpRight } from "lucide-react"

const Footer: FC = () => {
  const t = useTranslations("Layout")

  return (
    <footer className="mt-auto w-full">
      <div className="container mx-auto flex items-center justify-between border-t border-border py-10">
        <p className="font-mono text-4xl font-black">Footer</p>

        <motion.a
          className="group relative flex items-center gap-2 text-highlight transition-colors hover:text-primary"
          href="https://github.com/warnigo/Webfolio"
          target="_blank"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.p className="relative z-10" whileHover={{ x: -5 }}>
            {t("sourceCode")}
          </motion.p>

          <motion.div whileHover={{ x: 5, scale: 1.2, rotate: 10 }}>
            <MoveUpRight size={18} />
          </motion.div>
        </motion.a>
      </div>
    </footer>
  )
}

Footer.displayName = "Footer"
export default Footer
