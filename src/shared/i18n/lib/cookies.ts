import { cookies } from "next/headers"

import { type Locales } from "@shared/i18n"

import { COOKIE_LOCALE_KEY, DEFAULT_LOCALE } from "../config/constants"

export async function getLocale(): Promise<Locales> {
  const cookieStore = await cookies()
  const locale = cookieStore.get(COOKIE_LOCALE_KEY)?.value as Locales
  return locale || DEFAULT_LOCALE
}

export async function setLocale(locale: Locales): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_LOCALE_KEY, locale, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  })
}
