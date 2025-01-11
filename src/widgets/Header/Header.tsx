import { type FC } from "react"
import { useTranslations } from "next-intl"

import { Badge, LocalTime } from "@shared/ui"

const Header: FC = () => {
  const t = useTranslations("Layout")

  return (
    <header className="border-b border-border p-4">
      <div className="flex items-center justify-between">
        <Badge
          withDot
          className="rounded-full border-border py-2 pr-4 font-mono text-sm"
          dotClassName="size-2 border border-green-600 mx-2"
          dotColor="bg-green-500"
          variant="secondary"
        >
          <p className="select-none">{t("availableWork")}</p>
        </Badge>

        <div className="hidden lg:block">
          <LocalTime />
        </div>
      </div>
    </header>
  )
}

Header.displayName = "Header"
export default Header
