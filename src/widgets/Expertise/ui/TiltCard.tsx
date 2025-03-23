import { type FC, type MouseEvent, useRef } from "react"

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

import { cardVariants } from "@widgets/Expertise/motion"

type Skill = {
  name: string
  level: number
}

type Category = {
  title: string
  color: string
  skills: Skill[]
}

type TiltCardProps = {
  category: Category
  index: number
}

export const TiltCard: FC<TiltCardProps> = ({ category, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(cardRef, {
    once: false,
    margin: "-100px 0px",
    amount: 0.3,
  })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { damping: 25, stiffness: 300 })
  const springY = useSpring(y, { damping: 25, stiffness: 300 })

  const blobX = useTransform(springX, [-100, 100], ["-15%", "5%"])
  const blobY = useTransform(springY, [-100, 100], ["-5%", "15%"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = (): void => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      aria-label={`${category.title} expertise`}
      aria-roledescription="Interactive skill card"
      className="group relative overflow-hidden rounded-lg border border-border bg-card p-5 sm:p-6"
      initial="hidden"
      role="region"
      variants={cardVariants}
      viewport={{ once: true, margin: "-100px 0px", amount: 0.4 }}
      whileInView="visible"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        aria-hidden="true"
        className="absolute size-24 rounded-full opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundColor: category.color,
          bottom: "-8px",
          right: "-8px",
          x: blobX,
          y: blobY,
        }}
      />
      <h3 className="mb-4 text-lg font-bold sm:text-xl">{category.title}</h3>
      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={`skill-${skillIndex}`}
            aria-label={`${skill.name} skill level: ${skill.level}%`}
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={skill.level}
            className="space-y-1"
            role="progressbar"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/30">
              <motion.div
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                className="h-full rounded-full"
                initial={{ width: 0 }}
                style={{ backgroundColor: category.color }}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + skillIndex * 0.1,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

TiltCard.displayName = "TiltCard"
