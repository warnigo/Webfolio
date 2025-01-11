import { type FC, type PropsWithChildren } from "react"

import { Header } from "@widgets/Header"
import { Sidebar } from "@widgets/Sidebar"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main>
    <Sidebar>
      <Header />
      {children}
    </Sidebar>
  </main>
)

Layout.displayName = "Layout"
