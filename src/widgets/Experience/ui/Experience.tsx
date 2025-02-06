"use client"

import { type FC } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { motion } from "framer-motion"
import { BriefcaseBusiness, ChevronRight } from "lucide-react"

import { ROUTES } from "@shared/config"
import { MotionButton, motionViewport } from "@shared/motion-ui"
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardHeader,
  Separator,
  WidgetHeader,
} from "@shared/ui"

import { cardContainer } from "../lib/motion"
import { allExperience } from "../model/constants"

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
        {allExperience.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            variants={cardContainer}
            viewport={motionViewport}
            whileInView="visible"
          >
            <Card className="grid gap-3 rounded-xl border-border bg-secondary/40 p-6 sm:rounded-2xl md:gap-4 lg:gap-5 lg:rounded-3xl">
              <CardHeader className="flex flex-row justify-between p-0">
                <div className="flex items-center gap-4">
                  <Avatar
                    alt={item.company}
                    className="rounded-xl"
                    fallback={item.company.slice(0)}
                    size="lg"
                    src={item.compayLogo}
                  />

                  <div>
                    <div className="flex items-center gap-4">
                      <h6 className="font-mono text-lg font-black md:text-xl">
                        {item.company}
                      </h6>

                      <Badge
                        className="select-none rounded-full border-border font-mono text-sm"
                        variant="outline"
                      >
                        {t(`Experience.${item.location_type}`)}
                      </Badge>
                    </div>

                    <Link
                      className="cursor-pointer text-sm text-highlight"
                      href={item.website}
                    >
                      {item.website.replace("https://", "")}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="font-mono text-base font-bold md:text-lg">{`${item.start_date} - ${item.end_date}`}</p>
                </div>
              </CardHeader>

              <CardContent className="grid gap-2 rounded-2xl border border-border bg-background px-6 py-4">
                <div>
                  <h6 className="font-mono text-base font-bold md:text-lg">
                    {item.posiontion}
                  </h6>

                  <p className="line-clamp-5 text-sm text-highlight md:text-base">
                    {item.description}
                  </p>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-1">
                  <p className="font-mono text-sm font-black md:text-base">
                    {t("Experience.skills")}:
                  </p>
                  {item.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="select-none rounded-full border-border font-mono text-sm"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Link
        className="flex items-center justify-center"
        href={ROUTES.experience}
      >
        <MotionButton
          className="rounded-xl"
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
