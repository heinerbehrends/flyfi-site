/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useColorMode } from "theme-ui"
import Sun from "../icons/sun.svg"
import Moon from "../icons/moon.svg"

export default function DarkModeSwitch() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      sx={{
        alignItems: "center",
        display: "flex",
        backgroundColor: "transparent",
        border: "none",
        padding: ["2", "3"],
        cursor: "pointer",
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
      }}
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      {colorMode === "default" ? <Moon /> : <Sun />}
    </button>
  )
}
