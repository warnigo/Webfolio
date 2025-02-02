import { getLocale } from "next-intl/server"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { type FCRequiredChildren } from "@shared/types"

import "@shared/assets/css/tailwind.css"
import "./styles/globals.css"

export { metadata, viewport } from "./config"

const RootLayout: FCRequiredChildren = async ({ children }) => {
  const locale = await getLocale()

  return (
    <html
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      lang={locale}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}

RootLayout.displayName = "RootLayout"
export default RootLayout
