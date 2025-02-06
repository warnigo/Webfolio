import { type HTMLAttributes } from "react"

import { cn } from "@shared/lib"
import { type FCRequiredChildren } from "@shared/types"

type Props = HTMLAttributes<HTMLDivElement>

export const CardContent: FCRequiredChildren<Props> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
)

CardContent.displayName = "CardContent"
