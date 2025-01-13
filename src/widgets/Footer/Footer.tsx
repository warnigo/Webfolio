"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { ENV, socialMedia } from "@/shared/config"
import { Link, usePathname } from "@/shared/i18n"
import { cn } from "@/shared/lib"
import { MotionButton } from "@/shared/motion-ui"
import { Icon, Logo, Separator } from "@/shared/ui"

import { motion } from "framer-motion"
import { Milestone, MoveUpRight } from "lucide-react"

import { footerMenu } from "./model/constants"

const Footer: FC = () => {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <footer className="mt-auto w-full border-t  border-border bg-background">
      <div className="container mx-auto flex flex-col items-center gap-3 py-10">
        <div className="flex w-full items-center justify-between">
          <Logo
            className="flex items-center justify-center"
            title={t("Common.warnigo")}
          />

          <nav className="flex w-full items-center justify-center">
            <ul className="flex w-full items-center justify-center gap-6">
              {footerMenu.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={cn(
                      "font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                      { "text-primary": pathname === href },
                    )}
                  >
                    {t(`Layout.${label}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="">
            <MotionButton
              className="group min-h-10"
              hoverIcon={<Milestone />}
              hoverText={t("Common.go")}
              variant="outline"
            >
              {t("Common.visitBlog")}
            </MotionButton>
          </Link>
        </div>

        <Separator />

        <div className="flex w-full items-center justify-between">
          <Link
            className="font-mono text-base font-semibold text-highlight hover:text-primary active:text-primary/80"
            href={ENV.buymeacoffee_url}
            target="_blank"
          >
            {t("Common.thanksForVisit")}
          </Link>

          <nav>
            <ul className="flex items-center justify-center gap-7">
              {socialMedia.map(({ label, href, icon_path }) => (
                <li key={label}>
                  <Link href={href} target="_blank">
                    <Icon
                      className="fill-highlight stroke-none text-highlight hover:fill-primary hover:text-primary"
                      path={icon_path}
                      size={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <motion.a
            className="group relative flex items-center gap-2 text-highlight transition-colors hover:text-primary"
            href={ENV.repo_url}
            target="_blank"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.p className="relative z-10" whileHover={{ x: -5 }}>
              {t("Layout.sourceCode")}
            </motion.p>

            <motion.div whileHover={{ x: 5, scale: 1.2, rotate: 10 }}>
              <MoveUpRight size={18} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = "Footer"
export default Footer
