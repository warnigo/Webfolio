import { type FC, type PropsWithChildren } from "react"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main>
    header
    {children}
  </main>
)

Layout.displayName = "Layout"
