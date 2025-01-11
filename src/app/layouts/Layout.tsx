import { type FC, type PropsWithChildren } from "react"

import { Header } from "@widgets/Header"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

Layout.displayName = "Layout"
