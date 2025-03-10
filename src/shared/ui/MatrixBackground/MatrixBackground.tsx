"use client"

import { type FC, useEffect, useState } from "react"

interface MatrixBackgroundProps {
  characters?: string
  textColor?: string
  fontSize?: string
  opacity?: number
  columnCount?: number
}

export const MatrixBackground: FC<MatrixBackgroundProps> = ({
  characters = "01",
  opacity = 0.05,
  columnCount = 20,
}) => {
  const [columns, setColumns] = useState<string[]>([])

  useEffect(() => {
    const cols = Array.from({ length: columnCount }, () =>
      Array.from({ length: 20 }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length)),
      ).join(""),
    )
    setColumns(cols)
  }, [characters, columnCount])

  return (
    <div
      className="absolute -z-20 size-full overflow-hidden"
      style={{ opacity }}
    >
      {columns.map((col, i) => (
        <div
          key={i}
          className="absolute font-mono text-base"
          style={{
            left: `${(i / columnCount) * 100}%`,
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
