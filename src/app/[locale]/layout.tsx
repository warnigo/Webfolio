import { type FC, type PropsWithChildren } from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

import { type Locales, routing } from "@shared/i18n"

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

const LocaleLayout: FC<Props> = async ({ children, params }) => {
  const { locale } = await params
  const messages = await getMessages()

  if (!routing.locales.includes(locale as Locales)) {
    notFound()
  }

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
export default LocaleLayout
