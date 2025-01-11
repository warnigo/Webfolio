import { type FC, type PropsWithChildren } from "react"

import { LeftSide } from "./ui/LeftSide"
import { RightSide } from "./ui/RightSide"

const Sidebar: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex w-screen">
    <div className="hidden lg:block">
      <LeftSide />
    </div>

    <main className="size-full">{children}</main>

    <div className="hidden lg:block">
      <RightSide />
    </div>
  </div>
)

Sidebar.displayName = "Sidebar"
export default Sidebar
