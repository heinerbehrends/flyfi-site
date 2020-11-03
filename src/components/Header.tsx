/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Nav from "./Nav"
import Logo from "../icons/logo-oud.svg"
import TextLogo from "./TextLogo"

export default function Header() {
  return (
    <header
      sx={{
        display: "flex",
        maxWidth: "100vw",
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
      <Link to="/">
        <div
          sx={{
            display: ["none", "flex"],
            alignItems: "center",
            backgroundColor: "#fff",
            height: ["64px", "94px", "94px", "124px"],
            width: ["64px", "94px", "94px", "124px"],
            borderRadius: "50%",
            boxShadow: "big",
            overflow: "hidden",
          }}
        >
          <Logo sx={{ transform: "translate(0px, -8px) scale(0.9)" }} />
        </div>
      </Link>
      <Nav />
    </header>
  )
}
