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
      activeStyle={{
        color: "#fff",
        fontWeight: 600,
        backgroundColor: "#59bfbf",
      }}
      sx={{
        textDecoration: "none",
        color: "text",
        fontSize: ["2", "2", "3"],
        fontWeight: 200,
        backgroundColor: "transparent",
        "&:hover": { backgroundColor: "#c0eeee", fontWeight: "400" },
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
          alignItems: "center",
          paddingX: ["2", "2", "3"],
        }}
      >
        {text}
      </Flex>
    </Link>
  )
}
