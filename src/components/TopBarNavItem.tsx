/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

type TopBarNavItemProps = {
  linkText: string
  linkLocation: string
  variant?: "active"
}

export default function TopBarNavItem({
  linkText,
  linkLocation,
  variant,
}: TopBarNavItemProps) {
  return (
    <Link
      sx={{
        textDecoration: "none",
        color: `${variant === "active" ? "#fff" : "text"}`,
        fontWeight: variant === "active" ? 600 : 250,
      }}
      to={linkLocation}
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
        {linkText}
      </Flex>
    </Link>
  )
}
