/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

type TopBarNavItemProps = {
  text: string
  location: string
  variant?: "active"
}

export default function TopBarNavItem({
  text,
  location,
  variant,
}: TopBarNavItemProps) {
  return (
    <Link
      sx={{
        textDecoration: "none",
        color: `${variant === "active" ? "#fff" : "text"}`,
        fontSize: "3",
        fontWeight: variant === "active" ? 600 : 250,
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
      }}
      to={location}
    >
      <Flex
        sx={{
          height: "100%",
          backgroundColor: `${variant === "active" ? "muted" : "transparent"}`,
          "&:hover": { backgroundColor: "#c0eeee" },
          alignItems: "center",
          paddingX: "3",
        }}
      >
        {text}
      </Flex>
    </Link>
  )
}
