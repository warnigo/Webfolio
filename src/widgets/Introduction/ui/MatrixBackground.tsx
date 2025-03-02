"use client"

import { type FC, useEffect, useState } from "react"

export const MatrixBackground: FC = () => {
  const [columns, setColumns] = useState<string[]>([])
  const characters = "01"

  useEffect(() => {
    const cols = Array.from({ length: 20 }, () =>
      Array.from({ length: 20 }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length)),
      ).join(""),
    )
    setColumns(cols)
  }, [])

  return (
    <div className="absolute -z-20 size-full overflow-hidden opacity-5">
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs text-emerald-500"
          style={{
            left: `${i * 5}%`,
            top: Math.random() * 100 - 20 + "%",
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
        >
          {col}
        </div>
      ))}
    </div>
  )
}
