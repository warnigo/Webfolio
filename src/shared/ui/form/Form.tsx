import { type FormEvent, type FormHTMLAttributes } from "react"

import { cn } from "@/shared/lib"
import { type FCRequiredChildren } from "@/shared/types"

import { FormProvider, type UseFormReturn } from "react-hook-form"

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  className?: string
  methods: UseFormReturn<any>
}

export const Form: FCRequiredChildren<FormProps> = (props) => {
  const {
    methods,
    className,
    onSubmit = () => {},
    children,
    ...restOfProps
  } = props
  const { handleSubmit } = methods
  return (
    <FormProvider {...methods}>
      <form
        className={cn("grid w-full gap-2", className)}
        onSubmit={handleSubmit(onSubmit)}
        {...restOfProps}
      >
        {children}
      </form>
    </FormProvider>
  )
}

Form.displayName = "Form"
