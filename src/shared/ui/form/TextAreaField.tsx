import { type FC } from "react"

import { Controller, useFormContext } from "react-hook-form"

import { Textarea, type TextareaProps } from "../Textarea"

type Props = TextareaProps & {
  name: string
  clasName?: string
}

export const TextAreaField: FC<Props> = ({ name, ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Textarea error={Boolean(errors[name])} {...field} {...props} />
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

TextAreaField.displayName = "TextAreaField"
