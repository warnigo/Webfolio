import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import importPlugin from "eslint-plugin-import"
import prettier from "eslint-plugin-prettier"
import reactHooks from "eslint-plugin-react-hooks"
import tailwindcss from "eslint-plugin-tailwindcss"
import react from "eslint-plugin-react"
import globals from "globals"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const twOptions = {
  callees: ["clsx", "cva", "cn"],
  classRegex: "^class(Name)?$",
}

const eslintConfig = [
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.next/**",
      "**/public/**",
    ],
  },
  ...fixupConfigRules(
    ...compat.extends(
      "next/core-web-vitals",
      "next/typescript",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended",
      "plugin:react/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier",
    ),
  ),
  {
    plugins: {
      "react": fixupPluginRules(react),
      "react-hooks": fixupPluginRules(reactHooks),
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "tailwindcss": fixupPluginRules(tailwindcss),
      "prettier": fixupPluginRules(prettier),
      "import": fixupPluginRules(importPlugin),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
      tailwindcss: {
        config: "./tailwind.config.ts",
        cssFiles: ["**/*.css", "!**/node_modules/*"],
      },
    },

    rules: {
      "semi": ["error", "never"],

      // Prettier
      "prettier/prettier": [
        "error",
        {
          semi: false,
        },
      ],

      // React rules
      "react/react-in-jsx-scope": "off",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Tailwind rules
      "tailwindcss/classnames-order": ["error", twOptions],
      "tailwindcss/enforces-negative-arbitrary-values": ["error", twOptions],
      "tailwindcss/enforces-shorthand": ["error", twOptions],
      "tailwindcss/migration-from-tailwind-2": ["error", twOptions],
      "tailwindcss/no-contradicting-classname": ["error", twOptions],
      "tailwindcss/no-custom-classname": ["error", twOptions],
      "tailwindcss/no-unnecessary-arbitrary-value": ["error", twOptions],

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      // Whitespaces and newlines
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
    },
  },
]

export default eslintConfig
