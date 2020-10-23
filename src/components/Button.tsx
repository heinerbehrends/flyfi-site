/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import React from "react"

export default function Button({ text, location }) {
  return (
    <Link
      to={location}
      sx={{
        display: "inline-block",
        marginTop: ["3", "4"],
        backgroundColor: "#663399",
        color: "#fff",
        paddingX: ["3", "4"],
        paddingY: "3",
        fontFamily: "body",
        fontSize: ["2", "3"],
        fontWeight: "800",
        textDecoration: "none",
        border: "none",
        borderRadius: "2",
        boxShadow: "big",
        transitionProperty: "transform",
        transitionDuration: "0.25s",
        "&:hover": {
          transform: "scale(1.1)",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
        "&:active": {
          boxShadow: "inset 2px 2px 3px rgba(0, 0, 0, 0.25)",
          transform: "scale(1.0)",
        },
      }}
    >
      {text}
    </Link>
  )
}
