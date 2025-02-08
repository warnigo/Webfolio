import { type FC } from "react"
import { useTranslations } from "next-intl"

import { Layers } from "lucide-react"

import { WidgetHeader } from "@shared/ui"

const Stacks: FC = () => {
  const t = useTranslations("Stacks")

  return (
    <section className="py-10">
      <WidgetHeader
        description={t("description")}
        icon={<Layers />}
        title={t("title")}
      />
    </section>
  )
}

Stacks.displayName = "Stacks"
export default Stacks
