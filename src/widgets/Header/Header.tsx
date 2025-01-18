"use client"

import { type FC } from "react"
import { useLocale, useTranslations } from "next-intl"

import { LocalTime } from "@/entities/LocalTime"
import { menuItems } from "@/shared/config"
import { Link, usePathname, useRouter } from "@/shared/i18n"
import { cn } from "@/shared/lib"
import { MotionButton } from "@/shared/motion-ui"
import { DropdownMenu, Logo } from "@/shared/ui"

import { motion } from "framer-motion"
import { Languages } from "lucide-react"

import { languages } from "./model/constants"

const Header: FC = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()

  const handleLanguageChange = (newLocale: string): void => {
    router.push(pathname, { locale: newLocale })
  }

  const languageItems = languages.map((lang) => ({
    label: lang.name,
    onClick: () => handleLanguageChange(lang.code),
    active: locale === lang.code,
  }))

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo className="flex min-h-10 items-center justify-center text-2xl" />

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={cn(
                    "font-mono text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary",
                    { "text-primary": pathname === href },
                  )}
                >
                  {t(`Layout.${label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <LocalTime className="hidden lg:flex" />

          <DropdownMenu align="right" items={languageItems}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <MotionButton
                className="h-full min-h-10 rounded-xl font-mono text-sm"
                hoverIcon={<Languages />}
                variant="outline"
              >
                {languages.find((l) => l.code === locale)?.name}
              </MotionButton>
            </motion.div>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

Header.displayName = "Header"
export default Header
