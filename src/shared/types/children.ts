import { type FunctionComponent, type ReactNode } from "react"

// Type for props that must include children
export type PropsChildrenRequired<P = unknown> = P & { children: ReactNode }

// Type for a FunctionComponent with required children
export type FCRequiredChildren<P = object> = FunctionComponent<
  P & PropsChildrenRequired<P>
>

// Type for a FunctionComponent with optional children
export type FCOptionalChildren<P = object> = FunctionComponent<
  P & { children?: ReactNode }
>
