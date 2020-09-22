/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Logo from "./Logo"
import { Flex, Box } from "theme-ui"
import TopBarNavItem from "./TopBarNavItem"

export default function Header() {
  return (
    <Box sx={{ backgroundColor: "primary", boxShadow: "big" }}>
      <Flex
        sx={{
          paddingX: "3",
          height: "48px",
        }}
      >
        <Flex
          sx={{ alignItems: "center", flex: "2", justifyContent: "flex-start" }}
        >
          <h4
            sx={{
              fontWeight: "light",
              fontStyle: "italic",
              fontSize: "5",
              margin: "1",
            }}
          >
            flyfi
            <span sx={{ fontSize: "2", fontStyle: "normal" }}>
              {" "}
              webdevelopment
            </span>
          </h4>
        </Flex>
        <Flex
          sx={{
            flex: "1",
            justifyContent: "center",
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "background",
              height: "96px",
              width: "96px",
              borderRadius: "50%",
              boxShadow: "big",
            }}
          >
            <Logo />
          </Flex>
        </Flex>
        <Flex sx={{ flex: "2", justifyContent: "flex-end" }}>
          <TopBarNavItem linkText="faq" linkLocation="/faq" />
          <TopBarNavItem linkText="about" linkLocation="/about" />
          <TopBarNavItem linkText="contact" linkLocation="/contact" />
          <TopBarNavItem linkText="home" linkLocation="/" variant="active" />
        </Flex>
      </Flex>
    </Box>
  )
}
