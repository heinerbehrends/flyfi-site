/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import { useColorMode, Flex } from "theme-ui"
import TopBarNavItem from "./TopBarNavItem"
import Sun from "../icons/sun.svg"
import Moon from "../icons/moon.svg"
import TextLogo from "./TextLogo"

export default function Header() {
  const [colorMode, setColorMode] = useColorMode()
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
        <TextLogo />
      </Flex>
      <Flex
        sx={{
          flex: "0 1 auto",
          justifyContent: "center",
        }}
      >
        <Link
          to="/"
          sx={{
            display: ["none", "inherit"],
            alignItems: "center",
            backgroundColor: "#fff",
            height: ["64px", "64px", "82px", "124px"],
            width: ["64px", "64px", "82px", "124px"],
            borderRadius: "50%",
            boxShadow: "big",
          }}
        >
          <Logo />
        </Link>
      </Flex>
      <Flex
        sx={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "flex-end",
          height: "100%",
          margin: "0",
        }}
      >
        <button
          sx={{
            alignItems: "center",
            display: "flex",
            backgroundColor: "transparent",
            border: "none",
            padding: "3",
            cursor: "pointer",
            "&:focus": {
              outline: "none",
              boxShadow: "focus",
            },
          }}
          onClick={() =>
            setColorMode(colorMode === "default" ? "dark" : "default")
          }
        >
          {colorMode === "default" ? <Moon /> : <Sun />}
        </button>
        <nav
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            height: "100%",
            margin: "0",
          }}
        >
          <TopBarNavItem text="faq" location="/faq" />
          <TopBarNavItem text="about" location="/about" />
          <TopBarNavItem text="contact" location="/contact" />
          <TopBarNavItem text="home" location="/" />
        </nav>
      </Flex>
    </header>
  )
}
