import { type FC, type PropsWithChildren } from "react"
import type { Metadata } from "next"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { rootMetadata } from "./config"

export const metadata: Metadata = rootMetadata

const RootLayout: FC = ({ children }: Readonly<PropsWithChildren>) => (
  <html suppressHydrationWarning lang="en">
    <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      {children}
    </body>
  </html>
)

export default RootLayout
