import { type ReactElement } from "react"

import { motion } from "framer-motion"

import { cn } from "@shared/lib"
import { type FCOptionalChildren, type MotionViewportType } from "@shared/types"

type Props = {
  title: string
  description?: string
  icon: ReactElement
  className?: string
  viewport?: MotionViewportType
}

const variants = {
  container: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  title: {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
    },
  },
  icon: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.3 },
    },
  },
  description: {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
    },
  },
}

// WidgetHeader Component
// A reusable header component with a title, an optional description, and an optional icon
export const WidgetHeader: FCOptionalChildren<Props> = ({
  title,
  description,
  icon,
  className,
  children,
  viewport = { once: true, amount: 0.5 },
}) => (
  <motion.div
    initial="hidden"
    variants={variants.container}
    viewport={viewport}
    whileInView="visible"
    className={cn(
      "flex flex-col flex-wrap items-start justify-between gap-2",
      className,
    )}
  >
    <div className="flex flex-col items-start justify-start  gap-2">
      <motion.h4
        className="flex items-center gap-2 font-mono text-2xl font-black md:text-4xl"
        variants={variants.title}
      >
        <motion.span aria-hidden="true" variants={variants.icon}>
          {icon}
        </motion.span>
        {title}
      </motion.h4>

      {description ? (
        <motion.p
          className="text-base font-medium text-highlight"
          role="note"
          variants={variants.description}
        >
          {description}
        </motion.p>
      ) : null}
    </div>

    <div>{children}</div>
  </motion.div>
)

WidgetHeader.displayName = "WidgetHeader"
