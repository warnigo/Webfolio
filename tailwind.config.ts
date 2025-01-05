import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config
