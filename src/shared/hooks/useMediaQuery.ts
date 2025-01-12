import { useEffect, useState } from "react"

type MediaQueryMap = {
  [key in Breakpoint]: string
}

export type Breakpoint =
  | "2xl"
  | "desktop"
  | "laptop"
  | "lg"
  | "md"
  | "mobile"
  | "sm"
  | "tablet"
  | "xl"

const mediaQueries: MediaQueryMap = {
  "sm": "(min-width: 640px)",
  "md": "(min-width: 768px)",
  "lg": "(min-width: 1024px)",
  "xl": "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
  "mobile": "(max-width: 639px)",
  "tablet": "(min-width: 640px) and (max-width: 1023px)",
  "laptop": "(min-width: 1024px) and (max-width: 1279px)",
  "desktop": "(min-width: 1280px)",
}

export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const query = window.matchMedia(mediaQueries[breakpoint])

    setMatches(query.matches)

    const updateMatches = (e: MediaQueryListEvent): void => {
      setMatches(e.matches)
    }

    query.addEventListener("change", updateMatches)

    return () => {
      query.removeEventListener("change", updateMatches)
    }
  }, [breakpoint])

  return matches
}
