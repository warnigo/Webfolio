import { getRequestConfig } from "next-intl/server"

import { DEFAULT_LOCALE, LOCALES } from "./config/constants"
import { type Locales } from "./model/types"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: Locales | string
  locale = (await requestLocale) ?? DEFAULT_LOCALE

  if (!LOCALES.includes(locale as Locales)) {
    locale = DEFAULT_LOCALE
  }

  try {
    const translations = await import(`../../../messages/${locale}.json`)
    return {
      locale,
      messages: translations.default,
    }
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    return {
      locale: DEFAULT_LOCALE,
      messages: {},
    }
  }
})
