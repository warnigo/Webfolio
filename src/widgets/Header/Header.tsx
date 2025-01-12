"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { ROUTES } from "@/shared/config"
import { Link, usePathname } from "@/shared/i18n"
import { cn } from "@/shared/lib"
import { MotionButton } from "@/shared/motion-ui"

import { LocalTime } from "@shared/ui"
import { CloudDownload } from "lucide-react"

import { menuItems } from "./model/constants"

const Header: FC = () => {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          className="font-mono text-2xl font-black transition-colors hover:text-primary"
          href={ROUTES.home}
        >
          {t("Common.me")}
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={cn(
                    "font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                    {
                      "text-primary": pathname === href,
                    },
                  )}
                >
                  {t(`Layout.${label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <LocalTime className="hidden shrink-0 text-sm text-muted-foreground lg:flex" />

          <MotionButton className="rounded-xl" hoverIcon={<CloudDownload />}>
            <Link href={ROUTES.resume}>{t("Layout.resume")}</Link>
          </MotionButton>
        </div>
      </div>
    </header>
  )
}

Header.displayName = "Header"
export default Header
