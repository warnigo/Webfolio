import { type FC, type PropsWithChildren } from "react"
import { getLocale } from "next-intl/server"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

export const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale()

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

RootLayout.displayName = "RootLayout"
