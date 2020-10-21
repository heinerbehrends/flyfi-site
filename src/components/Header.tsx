/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import { Flex } from "theme-ui"
import TopBarNavItem from "./TopBarNavItem"

export default function Header() {
  console.log("hi")
  return (
    <header
      sx={{
        display: "flex",
        backgroundColor: "primary",
        boxShadow: "big",
        position: "fixed",
        zIndex: "2",
        top: "0",
        width: "100%",
        paddingX: ["2", "3"],
        marginBottom: "4",
        height: "64px",
      }}
    >
      <Flex sx={{ alignItems: "center", height: "100%", flex: "1 1 auto" }}>
        <Link
          to={"/"}
          sx={{
            textDecoration: "none",
            color: "text",
            paddingX: ["1", "2", "3"],
            paddingY: "2",
            "&:focus": {
              outline: "none",
              boxShadow: "focus",
            },
          }}
        >
          <h4
            sx={{
              fontWeight: "light",
              fontStyle: "italic",
              fontSize: ["5", "5", "40px"],
              margin: "1",
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
        </Link>
      </Flex>
      <Flex
        sx={{
          flex: "0 1 auto",
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            display: ["none", "inherit"],
            alignItems: "center",
            backgroundColor: "background",
            height: ["64px", "64px", "82px", "124px"],
            width: ["64px", "64px", "82px", "124px"],
            borderRadius: "50%",
            boxShadow: "big",
          }}
        >
          <Logo />
        </Flex>
      </Flex>
      <nav
        sx={{
          display: "flex",
          flex: "1 1 auto",
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
      </nav>
    </header>
  )
}
