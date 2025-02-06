import { type FC, type InputHTMLAttributes, type Ref } from "react"

import { cn } from "@shared/lib"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  className?: string
  ref?: Ref<HTMLInputElement>
}

export const Input: FC<InputProps> = ({ error, className, ref, ...props }) => (
  <input
    {...props}
    ref={ref}
    className={cn(
      "flex h-12 w-full rounded-xl bg-secondary px-4 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
      {
        "border border-red-500/50 focus-visible:ring-red-600": error,
      },
    )}
  />
)
Input.displayName = "Input"
