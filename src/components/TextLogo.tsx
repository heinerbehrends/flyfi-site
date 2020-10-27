/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

export default function TextLogo() {
  return (
    <Link
      to={"/"}
      sx={{
        textDecoration: "none",
        color: "text",
        paddingX: ["1", "2", "3"],
        paddingY: "2",
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
      }}
    >
      <h4
        sx={{
          color: "#333",
          fontWeight: "light",
          fontStyle: "italic",
          fontSize: ["5", "5", "40px"],
          margin: "1",
        }}
      >
        flyfi
        <span
          sx={{
            fontSize: "3",
            fontStyle: "normal",
            display: ["none", "none", "none", "inline"],
          }}
        >
          {" "}
          web development
        </span>
      </h4>
    </Link>
  )
}