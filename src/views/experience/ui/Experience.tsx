"use client"

import { type FC } from "react"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { BriefcaseBusiness } from "lucide-react"

import { JobCard, WidgetHeader } from "@shared/components"
import { allExperience } from "@shared/config"
import { Badge } from "@shared/ui"

const Experience: FC = () => {
  const t = useTranslations()

  return (
    <section className="container mx-auto grid gap-5 py-10">
      <WidgetHeader
        description={t("Experience.description")}
        icon={<BriefcaseBusiness size={30} strokeWidth={2.5} />}
        title={t("Experience.title")}
      />

      <div className="grid items-center gap-5">
        {allExperience.map((item) => (
          <JobCard key={item.id} data={item} />
        ))}
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Badge
          withDot
          className="rounded-full border-border py-2 pr-4 font-mono text-sm"
          dotClassName="size-2 border border-green-600 mx-2"
          dotColor="bg-green-500"
          variant="secondary"
        >
          <p className="select-none">{t("Layout.availableWork")}</p>
        </Badge>
      </motion.div>
    </section>
  )
}

Experience.displayName = "Experience"
export default Experience
