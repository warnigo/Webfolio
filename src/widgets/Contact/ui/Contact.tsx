import { type FC } from "react"
import { useTranslations } from "next-intl"

import { MotionButton } from "@/shared/motion-ui"
import {
  Form,
  FormField,
  Separator,
  TextAreaField,
  TextField,
  WidgetHeader,
} from "@/shared/ui"

import { zodResolver } from "@hookform/resolvers/zod"
import { Construction, SendHorizontal } from "lucide-react"
import { useForm } from "react-hook-form"

import { formSchema } from "../model/schemas"

type FormValues = {
  name: string
  contact: string
  message?: string
}

const Contact: FC = () => {
  const t = useTranslations("Contact")

  const methods = useForm<FormValues>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  })

  const handleSubmit = (values: FormValues): void => {
    console.log(values.name)
  }

  return (
    <section className="grid gap-4 py-5">
      <WidgetHeader
        description={t("letsWorkTogetherDescription")}
        icon={<Construction size={30} strokeWidth={2.5} />}
        title={t("letsWorkTogether")}
      />

      <Separator />

      <Form
        className="grid w-2/3 gap-4"
        methods={methods}
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <div className="flex items-center justify-center gap-4">
          <FormField label={t("name")}>
            <TextField name="name" placeholder={t("yourName")} type="text" />
          </FormField>

          <FormField label={t("yourContact")}>
            <TextField name="contact" placeholder={t("howContactYou")} />
          </FormField>
        </div>

        <FormField label={t("message")}>
          <TextAreaField
            className="h-24 resize-none"
            name="message"
            placeholder={t("yourMessage")}
          />
        </FormField>

        <MotionButton
          className="h-12 rounded-xl"
          hoverIcon={<SendHorizontal />}
          hoverText={t("send")}
          variant="secondary"
        >
          {t("sendMessage")}
        </MotionButton>
      </Form>
    </section>
  )
}

Contact.displayName = "Contact"
export default Contact
