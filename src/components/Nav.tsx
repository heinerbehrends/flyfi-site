/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import DarkModeSwitch from "./DarkModeSwitch"
import TopBarNavItem from "./TopBarNavItem"

export default function Nav() {
  return (
    <div
      sx={{
        display: "flex",
        flex: "1 1 auto",
        justifyContent: "flex-end",
        height: "100%",
        margin: "0",
      }}
    >
      <DarkModeSwitch />
      <nav
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          height: "100%",
          margin: "0",
        }}
      >
        <TopBarNavItem text="faq" location="/faq/" />
        <TopBarNavItem text="about" location="/about/" />
        <TopBarNavItem text="contact" location="/contact/" />
        <TopBarNavItem text="home" location="/" />
      </nav>
    </div>
  )
}
