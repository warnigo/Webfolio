import { type FC } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Construction, MoveUpRight, SendHorizontal } from "lucide-react"
import { useForm } from "react-hook-form"

import { MotionButton, motionViewport } from "@shared/motion-ui"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
  FormField,
  Icon,
  Separator,
  TextAreaField,
  TextField,
  WidgetHeader,
} from "@shared/ui"

import {
  contactImageVariants,
  formContainerVariants,
  formItemVariants,
  formSubmitVariants,
} from "../lib/motion"
import { contactSocialMedia } from "../model/constants"
import { useFormSchema } from "../model/schemas"
import { type FormValues } from "../model/types"

const Contact: FC = () => {
  const t = useTranslations("Contact")

  const formSchema = useFormSchema()
  const methods = useForm<FormValues>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  })

  const onSubmit = (values: FormValues): void => {
    console.log(values.name)
    console.log(values.contact)
    console.log(values.message)
  }

  return (
    <section className="grid w-full gap-4 py-5">
      <WidgetHeader
        description={t("letsWorkTogetherDescription")}
        icon={<Construction size={30} strokeWidth={2.5} />}
        title={t("letsWorkTogether")}
      />

      <Separator />

      <motion.div
        className="flex h-full flex-col items-center justify-between gap-4 lg:flex-row"
        initial="hidden"
        variants={formContainerVariants}
        viewport={motionViewport}
        whileInView="visible"
      >
        <Form
          className="grid w-full gap-4 lg:w-2/3"
          methods={methods}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={formItemVariants}
          >
            <FormField label={t("name")}>
              <TextField name="name" placeholder={t("yourName")} type="text" />
            </FormField>

            <FormField label={t("yourContact")}>
              <TextField
                name="contact"
                placeholder={t("howContactYou")}
                type="text"
              />
            </FormField>
          </motion.div>

          <motion.div variants={formItemVariants}>
            <FormField label={t("message")}>
              <TextAreaField
                className="h-24 resize-none"
                name="message"
                placeholder={t("yourMessage")}
              />
            </FormField>
          </motion.div>

          <motion.div variants={formSubmitVariants}>
            <MotionButton
              className="h-12 w-full rounded-xl"
              hoverIcon={<SendHorizontal />}
              hoverText={t("send")}
              variant="secondary"
            >
              {t("sendMessage")}
            </MotionButton>
          </motion.div>
        </Form>

        <Separator className="h-px w-full lg:h-full lg:w-px" />

        <motion.div
          className="grid w-full gap-3 lg:w-1/3"
          initial="hidden"
          variants={contactImageVariants}
          viewport={motionViewport}
          whileInView="visible"
        >
          {contactSocialMedia.map((item, index) => (
            <motion.div
              key={`${item.social}-${index}`}
              variants={formItemVariants}
            >
              <Link href={item.href} target="_blank">
                <Card className="flex w-full cursor-pointer items-center justify-between duration-500 hover:scale-105">
                  <div className="flex items-center">
                    <CardHeader className="rounded-xl border-border p-3">
                      <div className="inset-0 size-9 rounded-lg border border-border p-1">
                        <Icon className="size-7 shrink-0" path={item.icon} />
                      </div>
                    </CardHeader>

                    <CardContent className="p-2">
                      <p>{item.username}</p>
                      <p className="text-xs text-highlight">
                        {item.href.replace("https://", "")}
                      </p>
                    </CardContent>
                  </div>

                  <CardFooter className="shrink-0 px-3 py-0">
                    <motion.div
                      className="size-9 rounded-lg border border-border p-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MoveUpRight aria-hidden="true" size={28} />
                    </motion.div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

Contact.displayName = "Contact"
export default Contact
