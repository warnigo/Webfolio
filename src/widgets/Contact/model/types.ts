import { type z } from "zod"

import { type useFormSchema } from "./schemas"

export type FormValues = z.infer<ReturnType<typeof useFormSchema>>
