import { type FC, type Ref, type TextareaHTMLAttributes } from "react"

import { cn } from "@shared/lib"

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean
  className?: string
  ref?: Ref<HTMLTextAreaElement>
}

export const Textarea: FC<TextareaProps> = ({
  error,
  className,
  ref,
  ...props
}) => (
  <textarea
    {...props}
    ref={ref}
    className={cn(
      "flex min-h-[60px] w-full rounded-xl bg-secondary px-4 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
      {
        "border border-red-500/50 focus-visible:ring-red-600": error,
      },
    )}
  />
)

Textarea.displayName = "Textarea"
