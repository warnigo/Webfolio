import { type FC } from "react"

import { Controller, useFormContext } from "react-hook-form"

import { Textarea, type TextareaProps } from "../Textarea"

type Props = TextareaProps & {
  name: string
}

export const TextAreaField: FC<Props> = ({ name, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Textarea {...field} {...props} />}
    />
  )
}

TextAreaField.displayName = "TextAreaField"
