import { type ThemeOptions } from "@entities/Terminal/model/types"

export const syntaxErrors = {
  typescript: [
    {
      pattern: /(\w+)\s*:\s*([^;,\s}]*[^:{}[\],;]*)/g,
      message: "Missing semicolon or comma after type declaration",
    },
    {
      pattern: /console\.log\([^)]*$/g,
      message: "Unclosed parenthesis in console.log",
    },
    {
      pattern: /const\s+\w+\s*=\s*$/g,
      message: "Variable declaration without initialization",
    },
  ],
  javascript: [
    {
      pattern: /console\.log\([^)]*$/g,
      message: "Unclosed parenthesis in console.log",
    },
    {
      pattern: /const\s+\w+\s*=\s*$/g,
      message: "Variable declaration without initialization",
    },
  ],
  golang: [
    {
      pattern: /func\s+\w+\([^)]*$/g,
      message: "Unclosed function parameters",
    },
    { pattern: /import\s+"[^"]*$/g, message: "Unclosed import string" },
    { pattern: /(\w+)\s+:=/g, message: "Invalid syntax: Go uses := not :" },
  ],
}

export const highlightPatterns = {
  typescript: [
    { pattern: /"([^"]*)"/g, style: "string" },
    {
      pattern:
        /\b(const|let|var|function|return|true|false|null|undefined|if|else|for|while|interface|type)\b/g,
      style: "keyword",
    },
    { pattern: /(\/\/.*)/g, style: "comment" },
    { pattern: /\b(\w+):/g, style: "variable" },
    { pattern: /\.(\w+)\(/g, style: "function" },
    { pattern: /\b(console)\b/g, style: "function" },
  ],
  javascript: [
    { pattern: /"([^"]*)"/g, style: "string" },
    {
      pattern:
        /\b(const|let|var|function|return|true|false|null|undefined|if|else|for|while)\b/g,
      style: "keyword",
    },
    { pattern: /(\/\/.*)/g, style: "comment" },
    { pattern: /\b(\w+):/g, style: "variable" },
    { pattern: /\.(\w+)\(/g, style: "function" },
    { pattern: /\b(console)\b/g, style: "function" },
  ],
  golang: [
    { pattern: /"([^"]*)"/g, style: "string" },
    {
      pattern:
        /\b(package|import|func|return|var|const|type|struct|for|if|else|range|map|interface|go|chan|select|switch|case|default|continue|break|defer|go|select|true|false)\b/g,
      style: "keyword",
    },
    { pattern: /(\/\/.*)/g, style: "comment" },
    { pattern: /\b(fmt|main)\b/g, style: "function" },
    { pattern: /\b([A-Z]\w*)\b/g, style: "variable" }, // Exported identifiers in Go
  ],
}

export const codeTemplates = {
  typescript: (name: string) => `const developer = {
  name: "${name}",
  skills: ["JavaScript", "React", "NextJS", "TypeScript", "Node.js", "CSS"],
  passion: "Building innovative solutions",
  experience: 3,
  availability: true,

  contact() {
    return "Let's collaborate on your next project!";
  },

  portfolio: {
    projects: 15,
    github: "github.com/${name.toLowerCase().replace(/\s/g, "")}"
  }
};

// Check out my portfolio
console.log(developer.contact());`,

  javascript: (name: string) => `const developer = {
  name: "${name}",
  skills: ["JavaScript", "React", "NextJS", "Node.js", "CSS"],
  passion: "Building innovative solutions",
  experience: 3,
  availability: true,

  contact() {
    return "Let's collaborate on your next project!";
  },

  portfolio: {
    projects: 15,
    github: "github.com/${name.toLowerCase().replace(/\s/g, "")}"
  }
};

// Check out my portfolio
console.log(developer.contact());`,

  golang: (name: string) => `package main

import "fmt"

type Developer struct {
  Name        string
  Skills      []string
  Passion     string
  Experience  int
  Availability bool
}

func (d Developer) Contact() string {
  return "Let's collaborate on your next project!"
}

func main() {
  dev := Developer{
    Name:        "${name}",
    Skills:      []string{"Go", "Docker", "Kubernetes", "REST API", "gRPC"},
    Passion:     "Building innovative solutions",
    Experience:  3,
    Availability: true,
  }

  fmt.Println(dev.Contact())
}`,
}

export const themes: ThemeOptions = {
  dark: {
    bg: "bg-gray-900",
    terminalBg: "bg-gray-950",
    text: "text-gray-200",
    border: "border-gray-700/50",
    shadow: "shadow-lg shadow-blue-900/20",
    highlight: "text-cyan-400",
    string: "text-green-400",
    keyword: "text-purple-400",
    comment: "text-gray-500",
    variable: "text-orange-300",
    function: "text-yellow-300",
  },
  cyberpunk: {
    bg: "bg-violet-950",
    terminalBg: "bg-gray-950",
    text: "text-pink-100",
    border: "border-pink-500/30",
    shadow: "shadow-lg shadow-pink-900/30",
    highlight: "text-cyan-300",
    string: "text-green-300",
    keyword: "text-pink-400",
    comment: "text-gray-400",
    variable: "text-orange-300",
    function: "text-yellow-300",
  },
}
