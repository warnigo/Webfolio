import { getRequestConfig } from "next-intl/server"

import { DEFAULT_LOCALE, LOCALES } from "./config/constants"
import { getLocale, setLocale } from "./lib/cookies"
import { type Locales } from "./model/types"

export default getRequestConfig(async ({ locale: requestLocale }) => {
  let locale: Locales

  try {
    locale = await getLocale()
    if (requestLocale && requestLocale !== locale) {
      await setLocale(requestLocale as Locales)
      locale = requestLocale as Locales
    }
  } catch (error) {
    console.error("Error getting locale:", error)
    locale = (requestLocale as Locales) || DEFAULT_LOCALE
  }

  if (!LOCALES.includes(locale)) {
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
