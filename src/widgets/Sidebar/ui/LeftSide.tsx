import { type FC } from "react"
import { useTranslations } from "next-intl"

import { Avatar } from "@shared/ui"

export const LeftSide: FC = () => {
  const t = useTranslations("Layout")

  return (
    <div className="h-screen border-r border-border p-4">
      <Avatar
        alt={t("avatarAlt")}
        className="border-2 border-border"
        fallback={t("avatarFallback")}
        size="xl"
        src="https://avatars.githubusercontent.com/u/119101655?v=4"
      />
    </div>
  )
}
