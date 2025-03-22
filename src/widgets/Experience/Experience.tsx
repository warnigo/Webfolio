"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { BriefcaseBusiness, ChevronRight } from "lucide-react"

import { JobCard, WidgetHeader } from "@shared/components"
import { allExperience, ROUTES } from "@shared/config"
import { Link } from "@shared/i18n"
import { MotionButton } from "@shared/motion-ui"

const Experience: FC = () => {
  const t = useTranslations()

  return (
    <section className="flex w-full flex-col gap-5 py-10">
      <WidgetHeader
        description={t("Experience.description")}
        icon={<BriefcaseBusiness size={30} strokeWidth={2.5} />}
        title={t("Experience.title")}
      />

      <div className="flex w-full flex-col gap-5">
        {allExperience.slice(0, 3).map((item) => (
          <JobCard key={item.id} data={item} />
        ))}
      </div>

      <Link
        className="flex items-center justify-center"
        href={ROUTES.experience}
      >
        <MotionButton
          className="h-10 rounded-xl"
          hoverIcon={<ChevronRight />}
          variant="outline"
        >
          {t("Common.viewAll")}
        </MotionButton>
      </Link>
    </section>
  )
}

Experience.displayName = "Experience"
export default Experience
