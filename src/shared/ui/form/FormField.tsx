import { cn } from "@/shared/lib"
import { type FCRequiredChildren } from "@/shared/types"

import { Label, type LabelProps } from "../Label"

type Props = {
  labelProps?: LabelProps
  label: string
  className?: string
}

export const FormField: FCRequiredChildren<Props> = ({
  label,
  labelProps,
  children,
  className,
}) => (
  <div className={cn("grid w-full gap-2", className)}>
    <Label {...labelProps}>{label}</Label>

    {children}
  </div>
)

FormField.displayName = "FormField"
