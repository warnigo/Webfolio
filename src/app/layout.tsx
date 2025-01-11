import { type FC, type PropsWithChildren } from "react"
import { getLocale } from "next-intl/server"

import { cn } from "@shared/lib"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import "@shared/assets/css/tailwind.css"

export { metadata, viewport } from "./config"

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale()

  return (
    <html
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      lang={locale}
    >
      <body className={cn("bg-background text-foreground antialiased")}>
        {children}
      </body>
    </html>
  )
}

RootLayout.displayName = "RootLayout"
export default RootLayout
