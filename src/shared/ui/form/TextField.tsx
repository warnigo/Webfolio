import { type FC, type HTMLInputTypeAttribute } from "react"

import { Controller, useFormContext } from "react-hook-form"

import { Input, type InputProps } from "../Input"

type Props = InputProps & {
  name: string
  type?: HTMLInputTypeAttribute
}

export const TextField: FC<Props> = ({ name, type, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Input {...field} type={type} {...props} />}
    />
  )
}

TextField.displayName = "TextField"
