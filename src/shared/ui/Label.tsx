import { type LabelHTMLAttributes } from "react"

import { cn } from "@shared/lib"
import { type FCRequiredChildren } from "@shared/types"

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean
}

export const Label: FCRequiredChildren<LabelProps> = ({
  children,
  required,
  htmlFor,
  className,
}) => (
  <label
    className={cn("block text-sm font-medium", className)}
    htmlFor={htmlFor}
  >
    {children}
    {required ? <span className="text-base text-destructive">*</span> : null}
  </label>
)

Label.displayName = "Label"
