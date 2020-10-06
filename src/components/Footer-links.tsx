/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

function FooterLink({ text, location }) {
  return (
    <Link
      sx={{
        display: "block",
        color: "text",
        fontSize: "3",
        marginTop: "3",
        fontWeight: "500",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      }}
      to={location}
    >
      {text}
    </Link>
  )
}

export default function FooterLinks() {
  return (
    <Box sx={{ marginTop: "4", marginX: "4" }}>
      <FooterLink location={"/contact"} text={"Contact"} />
      <FooterLink location={"/about"} text={"Over mij"} />
      <FooterLink location={"/faq"} text={"FAQ"} />
      <FooterLink
        location={"/algemene-voorwarden"}
        text={"Algemene voorwarden"}
      />
    </Box>
  )
}
