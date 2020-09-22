/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Flex } from "theme-ui"
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
    <Flex
      sx={{
        backgroundColor: `${variant === "active" ? "muted" : "transparent"}`,
        alignItems: "center",
        paddingX: "3",
      }}
    >
      <Link
        sx={{
          textDecoration: "none",
          color: `${variant === "active" ? "#fff" : "text"}`,
          fontWeight: variant === "active" ? 600 : 300,
        }}
        to={linkLocation}
      >
        {linkText}
      </Link>
    </Flex>
  )
}
