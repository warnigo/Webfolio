"use client"

import { type FC, useEffect, useState } from "react"
import { useNow, useTranslations } from "next-intl"

import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { AnimatePresence } from "framer-motion"

import { DEFAULT_TIMEZONE } from "../i18n/request"
import { RotateNumber } from "../motion-ui"

import { Badge } from "./Badge"

dayjs.extend(utc)
dayjs.extend(timezone)

export const LocalTime: FC = () => {
  const t = useTranslations("Layout")
  const now = useNow({
    updateInterval: 1000,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const formattedTime = dayjs(now).tz(DEFAULT_TIMEZONE).format("HH:mm:ss")

  if (isLoading) {
    return (
      <div className="flex animate-pulse items-center gap-2">
        <p className="select-none font-mono text-sm font-medium text-primary-foreground">
          {t("localeTime")}
        </p>
        <Badge
          className="select-none border-border px-4 py-2 font-mono text-sm"
          variant="secondary"
        >
          00:00:00
        </Badge>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-80 sm:flex-row">
      <p className="animate-fade-in select-none font-mono text-sm font-medium text-primary-foreground">
        {t("localeTime")}
      </p>
      <Badge
        className="group relative select-none overflow-hidden rounded-xl border-border px-4 py-2 font-mono text-sm"
        variant="secondary"
      >
        <div className="relative flex">
          <AnimatePresence mode="popLayout">
            {formattedTime.split("").map((char, index) => (
              <div key={`${index}-${char}`} style={{ height: "1.5em" }}>
                {char === ":" ? <span>:</span> : <RotateNumber number={char} />}
              </div>
            ))}
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Badge>
    </div>
  )
}

LocalTime.displayName = "LocalTime"
