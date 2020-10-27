/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

type TopBarNavItemProps = {
  text: string
  location: string
  variant?: "active"
}

export default function TopBarNavItem({ text, location }: TopBarNavItemProps) {
  return (
    <Link
      activeStyle={{
        color: "#fff",
        fontWeight: 600,
        backgroundColor: "#59bfbf",
      }}
      sx={{
        textDecoration: "none",
        color: "#333",
        fontSize: ["2", "2", "3"],
        fontWeight: 200,
        backgroundColor: "transparent",
        "&:hover": { backgroundColor: "#c0eeee" },
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
      }}
      to={location}
    >
      <div
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          paddingX: ["2", "2", "3"],
        }}
      >
        {text}
      </div>
    </Link>
  )
}
