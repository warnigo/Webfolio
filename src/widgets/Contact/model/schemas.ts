import { z } from "zod"

export const formSchema = z
  .object({
    name: z.string().min(2, "Nom kamida 2 belgidan iborat bo'lishi kerak"),
  })
  .required({
    name: true,
  })
