import { Layout } from "@app/layouts"
import { NextIntlProvider } from "@app/providers"
import { type FCRequiredChildren } from "@shared/types"

type Props = {
  params: Promise<{ locale: string }>
}

// LocaleLayout component for handling localization
const LocaleLayout: FCRequiredChildren<Props> = async ({
  children,
  params,
}) => {
  const { locale } = await params

  return (
    <NextIntlProvider locale={locale}>
      <Layout>{children}</Layout>
    </NextIntlProvider>
  )
}

LocaleLayout.displayName = "LocaleLayout"
export default LocaleLayout
