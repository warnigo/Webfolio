import { type FC } from "react"
import { useTranslations } from "next-intl"

import { Form, FormField, TextField, WidgetHeader } from "@/shared/ui"

import { zodResolver } from "@hookform/resolvers/zod"
import { Construction } from "lucide-react"
import { useForm } from "react-hook-form"

import { formSchema } from "../model/schemas"

type FormValues = {
  name: string
}

const Contact: FC = () => {
  const t = useTranslations("Contact")

  const methods = useForm<FormValues>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  const handleSubmit = (values: FormValues): void => {
    console.log(values.name)
  }

  return (
    <section className="py-5">
      <WidgetHeader
        description={t("letsWorkTogetherDescription")}
        icon={<Construction size={30} strokeWidth={2.5} />}
        title={t("letsWorkTogether")}
      />

      <Form methods={methods} onSubmit={methods.handleSubmit(handleSubmit)}>
        <FormField label={t("name")}>
          <TextField name="name" placeholder={t("yourName")} />
        </FormField>
      </Form>
    </section>
  )
}

Contact.displayName = "Contact"
export default Contact
