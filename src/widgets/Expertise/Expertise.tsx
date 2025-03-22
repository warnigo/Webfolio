import { type FC } from "react"
import { useTranslations } from "next-intl"

import { BugPlay } from "lucide-react"

import { WidgetHeader } from "@shared/components"

const Expertise: FC = () => {
  const t = useTranslations("Expertise")

  return (
    <section className="py-10">
      <WidgetHeader
        description={t("description")}
        icon={<BugPlay size={30} strokeWidth={2.5} />}
        title={t("title")}
      />
    </section>
  )
}

Expertise.displayName = "Expertise"
export default Expertise
