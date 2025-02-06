import { type HTMLAttributes } from "react"

import { cn } from "@shared/lib"
import { type FCRequiredChildren } from "@shared/types"

type Props = HTMLAttributes<HTMLDivElement>

export const Card: FCRequiredChildren<Props> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md",
      className,
    )}
    {...props}
  >
    {children}
  </div>
)

Card.displayName = "Card"
