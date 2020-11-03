/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

function FooterLink({ text, location }) {
  return (
    <Link
      sx={{
        display: "block",
        color: "#333",
        fontSize: "3",
        padding: "3",
        marginLeft: "-16px",
        fontWeight: "medium",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
      }}
      to={location}
    >
      {text}
    </Link>
  )
}

export default function FooterLinks() {
  return (
    <nav sx={{ marginX: ["0", "3", "4"], marginTop: ["3", "4"] }}>
      <Styled.h3
        sx={{
          textAlign: "left",
          marginLeft: "0",
          marginBottom: ["1", "2"],
          color: "#333",
        }}
      >
        Menu
      </Styled.h3>
      <FooterLink location={"/contact"} text={"Contact"} />
      <FooterLink location={"/about"} text={"Over mij"} />
      <FooterLink location={"/faq"} text={"FAQ"} />
      <FooterLink
        location={"/algemene-voorwarden"}
        text={"Algemene voorwarden"}
      />
    </nav>
  )
}
