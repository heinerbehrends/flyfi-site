/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import { Link } from "gatsby"
import React from "react"

export default function Button({ text, location }) {
  return (
    <Link
      to={location}
      sx={{
        backgroundColor: "muted",
        color: "#fff",
        paddingX: "4",
        paddingY: "3",
        marginX: "auto",
        display: "inline-block",
        fontFamily: "body",
        fontSize: "3",
        fontWeight: "800",
        textDecoration: "none",
        border: "none",
        borderRadius: "2",
        boxShadow: "big",
      }}
    >
      {text}
    </Link>
  )
}
