import { type FC } from "react"
import { useTranslations } from "next-intl"

import { Badge } from "@shared/ui"

const Home: FC = () => {
  const t = useTranslations("Layout")

  return (
    <section className="container mx-auto">
      <div className="">
        <Badge
          withDot
          className="rounded-full border-border py-2 pr-4 font-mono text-sm"
          dotClassName="size-2 border border-green-600 mx-2"
          dotColor="bg-green-500"
          variant="secondary"
        >
          <p className="select-none">{t("availableWork")}</p>
        </Badge>

        <p>あ Frontend developer</p>
      </div>
    </section>
  )
}

Home.displayName = "Home"
export default Home
