"use client"

import { type FC, useEffect, useRef, useState } from "react"

import {
  codeTemplates,
  highlightPatterns,
  syntaxErrors,
  themes,
} from "./model/constants"
import { type SupportedLanguage, type ThemeStyles } from "./model/types"

type Props = {
  name?: string
}

export const Terminal: FC<Props> = ({ name = "Abubakir Shavkatov" }) => {
  const [theme, setTheme] = useState<string>("dark")
  const [language, setLanguage] = useState<SupportedLanguage>("typescript")
  const [code, setCode] = useState<string>("")
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [output, setOutput] = useState<string>("")
  const [hasRun, setHasRun] = useState<boolean>(false)
  const [errors, setErrors] = useState<string[]>([])
  const [clientTime, setClientTime] = useState<string>("")

  const terminalRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setCode(codeTemplates[language](name))
    setOutput("")
    setHasRun(false)
    setErrors([])
  }, [language, name])

  useEffect(() => {
    setClientTime(new Date().toLocaleTimeString())
    const timer = setInterval(() => {
      setClientTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const currentTheme = themes[theme]

  const highlightSyntax = (code: string): { __html: string } => {
    if (!code) return { __html: "" }

    let highlighted = code

    highlightPatterns[language].forEach(({ pattern, style }) => {
      if (style in currentTheme) {
        highlighted = highlighted.replace(
          pattern,
          `<span class="${currentTheme[style as keyof ThemeStyles]}">$&</span>`,
        )
      }
    })

    return { __html: highlighted }
  }

  const checkSyntaxErrors = (code: string): string[] => {
    const errors: string[] = []

    syntaxErrors[language].forEach(({ pattern, message }) => {
      if (pattern.test(code)) {
        errors.push(message)
      }
    })

    return errors
  }

  const toggleTheme = (): void => {
    if (terminalRef.current) {
      terminalRef.current.classList.add("animate-pulse")
      setTimeout(() => {
        setTheme(theme === "dark" ? "cyberpunk" : "dark")
        terminalRef.current!.classList.remove("animate-pulse")
      }, 300)
    }
  }

  const toggleEditMode = (): void => {
    if (isEditing) {
      const newErrors = checkSyntaxErrors(code)
      setErrors(newErrors)
    }
    setIsEditing(!isEditing)

    if (!isEditing && editorRef.current) {
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.focus()
        }
      }, 100)
    }
  }

  const changeLanguage = (newLanguage: SupportedLanguage): void => {
    setLanguage(newLanguage)
  }

  const runCode = (): void => {
    const newErrors = checkSyntaxErrors(code)
    setErrors(newErrors)

    if (newErrors.length === 0) {
      let result = ""

      try {
        if (language === "typescript" || language === "javascript") {
          const match = code.match(/console\.log\((.*?)\)/)
          if (match && match[1]) {
            if (match[1].includes("developer.contact()")) {
              result = "Let's collaborate on your next project!"
            } else {
              result = match[1].replace(/"/g, "")
            }
          } else {
            result = "Code executed successfully (no output)"
          }
        } else if (language === "golang") {
          const match = code.match(/fmt\.Println\((.*?)\)/)
          if (match && match[1]) {
            if (match[1].includes("dev.Contact()")) {
              result = "Let's collaborate on your next project!"
            } else {
              result = match[1].replace(/"/g, "")
            }
          } else {
            result = "Code executed successfully (no output)"
          }
        }

        setOutput(result)
        setHasRun(true)
      } catch (error) {
        setOutput(`Error: ${error}`)
        setHasRun(true)
      }
    }
  }

  const getFileExtension = (): string => {
    switch (language) {
      case "typescript":
        return ".ts"
      case "javascript":
        return ".js"
      case "golang":
        return ".go"
      default:
        return ".ts"
    }
  }

  return (
    <div className="p-4">
      <div
        ref={terminalRef}
        className={`rounded-md border ${currentTheme.border} ${currentTheme.terminalBg} ${currentTheme.shadow} transition-all duration-300`}
      >
        <div
          className={`flex items-center justify-between rounded-t-md border-b border-gray-800 ${currentTheme.bg} px-4 py-2`}
        >
          <div className="flex items-center gap-1.5">
            <div className="size-3 cursor-pointer rounded-full bg-red-500 transition-colors hover:bg-red-400" />
            <div className="size-3 cursor-pointer rounded-full bg-yellow-500 transition-colors hover:bg-yellow-400" />
            <div
              className="size-3 cursor-pointer rounded-full bg-green-500 transition-colors hover:bg-green-400"
              role="button"
              tabIndex={0}
              onClick={toggleTheme}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleTheme()
                }
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`text-center text-xs font-medium ${currentTheme.text}`}
            >
              developer-profile{getFileExtension()}
            </div>
            <div className="text-xs text-gray-500">
              {theme === "dark" ? "Dark Mode" : "Cyberpunk"}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select
              className="cursor-pointer rounded border border-gray-700 bg-transparent px-1 py-0.5 text-xs text-gray-400"
              value={language}
              onChange={(e) =>
                changeLanguage(e.target.value as SupportedLanguage)
              }
            >
              <option value="typescript">TypeScript</option>
              <option value="javascript">JavaScript</option>
              <option value="golang">Go</option>
            </select>
            <button
              className={`text-xs ${currentTheme.highlight} cursor-pointer hover:underline`}
              onClick={toggleEditMode}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button
              className={`text-xs ${currentTheme.highlight} cursor-pointer hover:underline`}
              onClick={runCode}
            >
              Run
            </button>
          </div>
        </div>

        <div
          className={`p-4 font-mono text-xs ${currentTheme.text} max-h-96 overflow-auto sm:text-sm`}
        >
          {isEditing ? (
            <textarea
              ref={editorRef}
              className="h-64 w-full rounded border border-gray-800 bg-gray-950 p-2 focus:border-blue-500 focus:outline-none"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          ) : (
            <div className="whitespace-pre-wrap">
              <div dangerouslySetInnerHTML={highlightSyntax(code)} />
              <span className="ml-1 animate-pulse text-white">|</span>
            </div>
          )}

          {errors.length > 0 && (
            <div className="mt-4 border-t border-red-800 pt-2">
              <span className="text-red-500">→ Errors:</span>
              <div className="mt-1 rounded bg-red-950/40 px-3 py-1">
                {errors.map((error, index) => (
                  <div key={index} className="text-red-400">
                    {error}
                  </div>
                ))}
              </div>
            </div>
          )}

          {hasRun ? (
            <div className="mt-4 border-t border-gray-800 pt-2">
              <span className={`${currentTheme.highlight}`}>→ Output:</span>
              <div className="mt-1 rounded bg-black/40 px-3 py-1">
                <span className="text-white">{output}</span>
              </div>
            </div>
          ) : null}
        </div>

        <div
          className={`flex items-center justify-between rounded-b-md border-t border-gray-800 ${currentTheme.bg} px-4 py-1.5`}
        >
          <div className="text-xs text-gray-500">
            {isEditing
              ? "Editing mode"
              : errors.length > 0
                ? `${errors.length} error(s)`
                : "Ready"}
          </div>
          <div className="text-xs text-gray-500">{clientTime}</div>
        </div>
      </div>
    </div>
  )
}

Terminal.displayName = "Terminal"
