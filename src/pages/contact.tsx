/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import ContactForm from "../components/Contact-form"
import ContactIcons from "../components/Contact-icons"
import SEO from "../components/SEO"

export default function Contact() {
  return (
    <React.Fragment>
      <SEO description={"Contactpagina voor flyfi webdevelopment"} />
      <Styled.h1
        sx={{
          fontSize: ["6", "6", "9vw"],
          "@media screen and (min-width: 960px)": {
            fontSize: "86.43px",
          },
        }}
      >
        Contact
      </Styled.h1>
      <p
        sx={{
          paddingTop: ["3", "4", "4", "4"],
          paddingX: "4",
          lineHeight: "body",
          color: "text",
          maxWidth: "480px",
          marginX: "auto",
        }}
      >
        Als u geinteresseerd bent in een flyfi webapp, stuur me dan een bericht
        door middel van de contactform of via e-mail naar info@flyfi.nl. Ik
        antwoord altijd binnen 2 werkdagen. Als het sneller moet gaan kunt u mij
        bellen via 06-58910956.U kunt me ook volgen en berichtjes sturen via
        linkedIn of twitter. Als u geinteresseerd bent in mijn code, volg me dan
        op Github.
      </p>
      <section
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          marginX: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContactForm />
        <ContactIcons />
      </section>
    </React.Fragment>
  )
}
