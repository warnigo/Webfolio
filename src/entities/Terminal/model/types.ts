export type ThemeStyles = {
  bg: string
  terminalBg: string
  text: string
  border: string
  shadow: string
  highlight: string
  string: string
  keyword: string
  comment: string
  variable: string
  function: string
}

export type ThemeOptions = {
  [key: string]: ThemeStyles
}

export type SupportedLanguage = "golang" | "javascript" | "typescript"
