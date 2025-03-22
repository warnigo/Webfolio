"use client"

import { type FC } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { motion, type Variants } from "framer-motion"

import { motionViewport } from "@shared/motion-ui"
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardHeader,
  Separator,
} from "@shared/ui"

export type ExperienceType = {
  id: number
  position: string
  company: string
  website: string
  start_date: string
  end_date: string
  description: string
  companyLogo: string
  location: string
  employment_type: string
  location_type: "hybrid" | "on-side" | "remote"
  skills: string[]
}

type Props = {
  data: ExperienceType
}

const cardContainer: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

export const JobCard: FC<Props> = ({ data }) => {
  const t = useTranslations("Experience")

  return (
    <motion.div
      initial="hidden"
      transition={{ duration: 0.5, delay: data.id * 0.2, ease: "easeOut" }}
      variants={cardContainer}
      viewport={motionViewport}
      whileInView="visible"
    >
      <Card className="grid gap-3 rounded-xl border-border bg-secondary/40 p-6 sm:rounded-2xl md:gap-4 lg:gap-5 lg:rounded-3xl">
        <CardHeader className="flex flex-row flex-wrap justify-between p-0">
          <div className="flex items-center gap-4">
            <Avatar
              alt={data.company}
              className="rounded-xl"
              fallback={data.company.slice(0)}
              size="lg"
              src={data.companyLogo}
            />

            <div>
              <div className="flex items-center gap-4">
                <h6 className="font-mono text-lg font-black md:text-xl">
                  {data.company}
                </h6>

                <Badge
                  className="select-none rounded-full border-border font-mono text-sm"
                  variant="outline"
                >
                  {t(data.location_type)}
                </Badge>
              </div>

              <Link
                className="cursor-pointer text-sm text-highlight"
                href={data.website}
              >
                {data.website.replace("https://", "")}
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <p className="font-mono text-base font-bold md:text-lg">{`${data.start_date} - ${data.end_date}`}</p>
          </div>
        </CardHeader>

        <CardContent className="grid gap-2 rounded-2xl border border-border bg-background px-6 py-4">
          <div>
            <h6 className="font-mono text-base font-bold md:text-lg">
              {data.position}
            </h6>

            <p className="line-clamp-5 text-sm text-highlight md:text-base">
              {data.description}
            </p>
          </div>

          <Separator />

          <div className="flex flex-wrap gap-1">
            <p className="font-mono text-sm font-black md:text-base">
              {t("skills")}:
            </p>
            {data.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                className="select-none rounded-full border-border font-mono text-xs sm:text-sm"
                variant="outline"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

JobCard.displayName = "JobCard"
