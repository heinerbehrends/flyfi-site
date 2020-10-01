/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Logo from "./Logo"
import { Flex } from "theme-ui"
import TopBarNavItem from "./TopBarNavItem"

export default function Header() {
  return (
    <header
      sx={{
        display: "flex",
        backgroundColor: "primary",
        boxShadow: "big",
        position: "fixed",
        top: "0",
        width: "100%",
        paddingX: ["2", "3"],
        height: "64px",
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <h4
          sx={{
            fontWeight: "light",
            fontStyle: "italic",
            fontSize: ["5", "40px"],
            margin: "1",
            alignItems: "center",
            flex: "2 2 auto",
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
      </Flex>
      <Flex
        sx={{
          flex: "1 1 auto",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            display: ["none", "inherit"],
            alignItems: "center",
            backgroundColor: "background",
            height: "124px",
            width: "124px",
            borderRadius: "50%",
            boxShadow: "big",
          }}
        >
          <Logo />
        </Flex>
      </Flex>
      <nav>
        <ul
          sx={{
            display: "flex",
            flex: "2 2 auto",
            padding: "0",
            justifyContent: "flex-end",
            height: "100%",
            margin: "0",
          }}
        >
          <TopBarNavItem text="faq" location="/faq" />
          <TopBarNavItem text="about" location="/about" />
          <TopBarNavItem text="contact" location="/contact" />
          <TopBarNavItem text="home" location="/" variant="active" />
        </ul>
      </nav>
    </header>
  )
}
