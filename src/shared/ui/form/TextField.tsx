import { type FC, type HTMLInputTypeAttribute } from "react"

import { Controller, useFormContext } from "react-hook-form"

import { Input, type InputProps } from "../Input"

type Props = InputProps & {
  name: string
  type?: HTMLInputTypeAttribute
}

export const TextField: FC<Props> = ({ name, type, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-1">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            ref={field.ref}
            type={type}
            {...props}
            error={Boolean(errors[name])}
          />
        )}
      />

      {errors[name] ? (
        <p className="text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      ) : null}
    </div>
  )
}

TextField.displayName = "TextField"
