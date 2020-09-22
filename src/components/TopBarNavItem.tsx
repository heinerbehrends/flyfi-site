/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Flex } from "theme-ui"
import { lighten, darken, saturation } from "@theme-ui/color"
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
        fontWeight: variant === "active" ? 600 : 300,
      }}
      to={linkLocation}
    >
      <Flex
        sx={{
          height: "100%",
          backgroundColor: `${variant === "active" ? "muted" : "transparent"}`,
          " &:hover": { backgroundColor: "#a1e5e5" },
          alignItems: "center",
          paddingX: "3",
        }}
      >
        {linkText}
      </Flex>
    </Link>
  )
}
