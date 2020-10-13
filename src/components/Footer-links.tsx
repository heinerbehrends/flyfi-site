/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

function FooterLink({ text, location }) {
  return (
    <Link
      sx={{
        display: "block",
        color: "text",
        fontSize: "3",
        padding: "2",
        marginLeft: "-8px",
        marginTop: "2",
        fontWeight: "500",
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
    <nav sx={{ marginX: "4" }}>
      <Styled.h3 sx={{ textAlign: "left", marginLeft: "0" }}>Links</Styled.h3>
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
