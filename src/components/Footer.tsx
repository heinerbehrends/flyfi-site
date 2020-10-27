/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import FooterOverMij from "./Footer-overmij"
import FooterContact from "./Footer-contact"
import FooterLinks from "./Footer-links"

export default function Footer() {
  return (
    <footer
      sx={{
        color: "#333",
        width: "100%",
        backgroundColor: "primary",
        paddingX: "4",
        paddingY: "5",
        marginTop: "5",
      }}
    >
      <section
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(35ch, 1fr))",
          maxWidth: "1280px",
          marginX: "auto",
        }}
      >
        <FooterOverMij />
        <FooterContact />
        <FooterLinks />
      </section>
    </footer>
  )
}
