import { type FC } from "react"
import { useTranslations } from "next-intl"

import { CloudDownload } from "lucide-react"

import { ROUTES } from "@shared/config"
import { Link } from "@shared/i18n"
import { MotionButton } from "@shared/motion-ui"

const Resume: FC = () => {
  const t = useTranslations("Resume")

  return (
    <Link href={ROUTES.resume}>
      <MotionButton
        className="rounded-xl font-mono"
        hoverIcon={<CloudDownload />}
        variant="outline"
      >
        {t("resumeDownload")}
      </MotionButton>
    </Link>
  )
}

Resume.displayName = "Resume"
export default Resume
