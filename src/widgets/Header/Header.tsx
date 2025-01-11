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
          className="rounded-full border py-3 pr-5 font-mono text-sm"
          dotClassName="size-2 border border-green-600 mx-3"
          dotColor="bg-green-500"
          variant="secondary"
        >
          {t("availableWork")}
        </Badge>

        <LocalTime />
      </div>
    </header>
  )
}

Header.displayName = "Header"
export default Header
