import { type FC, useRef } from "react"
import { useTranslations } from "next-intl"

import { motion, useInView } from "framer-motion"
import { BrainCircuit } from "lucide-react"

import { WidgetHeader } from "@shared/components"
import { expertiseTech } from "@widgets/Expertise/model/contstants"
import { containerVariants } from "@widgets/Expertise/motion"
import { TiltCard } from "@widgets/Expertise/ui/TiltCard"

const Expertise: FC = () => {
  const t = useTranslations("Expertise")
  const containerRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2,
  })

  return (
    <section
      ref={containerRef}
      aria-labelledby="expertise-heading"
      className="py-16"
    >
      <WidgetHeader
        description={t("description")}
        icon={<BrainCircuit aria-hidden="true" size={30} strokeWidth={2} />}
        title={t("title")}
      />

      <motion.div
        animate={isInView ? "visible" : "hidden"}
        aria-label="Skills and expertise grid"
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        initial="hidden"
        tabIndex={0}
        variants={containerVariants}
      >
        {expertiseTech.map((category, index) => (
          <TiltCard
            key={`${category.title}-${index}`}
            category={category}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  )
}

Expertise.displayName = "Expertise"
export default Expertise
