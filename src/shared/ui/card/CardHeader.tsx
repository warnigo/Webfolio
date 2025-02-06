import { type HTMLAttributes } from "react"

import { cn } from "@shared/lib"
import { type FCRequiredChildren } from "@shared/types"

type Props = HTMLAttributes<HTMLDivElement>

export const CardHeader: FCRequiredChildren<Props> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
    {children}
  </div>
)

CardHeader.displayName = "CardHeader"
