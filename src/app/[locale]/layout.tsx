import { type FC, type PropsWithChildren } from "react"

import { Layout } from "@app/layouts"
import { NextIntlProvider } from "@app/providers"

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

const LocaleLayout: FC<Props> = async ({ children, params }) => {
  const { locale } = await params

  return (
    <Layout>
      <NextIntlProvider locale={locale}>{children}</NextIntlProvider>
    </Layout>
  )
}
export default LocaleLayout
