import { type FC } from "react"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { Languages } from "lucide-react"

import { menuItems } from "@shared/config"
import { Link, usePathname } from "@shared/i18n"
import { cn } from "@shared/lib"
import { MotionButton } from "@shared/motion-ui"
import { Logo, Separator, Sheet as SheetComponent } from "@shared/ui"
import { LocalTime } from "@entities/LocalTime"

import { buttonHoverVariants, linkHoverVariants } from "../lib/motion"

type SheetLanguages = {
  label: string
  onClick: () => void
  active: boolean
}

type Props = {
  open: boolean
  languages: SheetLanguages[]
  setOpen: (open: boolean) => void
}

export const Sheet: FC<Props> = ({ open, setOpen, languages }) => {
  const t = useTranslations()

  const pathname = usePathname()

  return (
    <SheetComponent isOpen={open} onClose={() => setOpen(false)}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Logo className="flex min-h-10 items-start justify-center border-b border-border pb-3 text-2xl" />

          <nav className="grow">
            <ul className="space-y-4">
              {menuItems.map(({ label, href }) => (
                <motion.li
                  key={label}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Link
                    aria-label={t(`Layout.${label}`)}
                    href={href}
                    className={cn(
                      "block font-mono text-lg font-medium text-muted-foreground transition-colors duration-300 hover:text-primary",
                      { "text-primary": pathname === href },
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {t(`Layout.${label}`)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <Separator />

          <div className="flex w-full items-center justify-between gap-3">
            {languages.map(({ label, onClick, active }) => (
              <motion.div
                key={label}
                className="w-full"
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <MotionButton
                  aria-label={label}
                  hoverIcon={<Languages />}
                  variant="outline"
                  className={cn(
                    "size-full min-h-10 rounded-xl font-mono text-sm",
                    { "bg-accent": active },
                  )}
                  onClick={onClick}
                >
                  {label}
                </MotionButton>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-end border-t border-border">
          <LocalTime className="flex items-center pt-3" />
        </div>
      </div>
    </SheetComponent>
  )
}
