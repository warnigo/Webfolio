import { useTranslations } from "next-intl"

import { z } from "zod"

export const useFormSchema = (): any => {
  const t = useTranslations("Contact")

  return z.object({
    name: z.string().min(2, t("nameMinLength")),
    contact: z.string().min(2, t("contactMinLength")),
    message: z.string().min(2, t("messageMinLength")),
  })
}
