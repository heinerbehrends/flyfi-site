/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Logo from "./Logo"
import TextLogo from "./TextLogo"

export default function Header() {
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
      <TextLogo />
      <Logo />
    </header>
  )
}
