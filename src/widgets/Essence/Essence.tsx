import { type FC } from "react"
import { useTranslations } from "next-intl"

import { Candy } from "lucide-react"

import { WidgetHeader } from "@shared/ui"

const Essence: FC = () => {
  const t = useTranslations("Essence")

  return (
    <section className="py-10">
      <WidgetHeader
        description={t("description")}
        icon={<Candy size={30} strokeWidth={2.5} />}
        title={t("title")}
      />

      <div />
    </section>
  )
}

Essence.displayName = "Essence"
export default Essence
