/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui";
import React from "react";
import ContactForm from "../components/Contact-form";
import ContactIcons from "../components/Contact-icons";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO description={"Contactpagina voor flyfi webdevelopment"} />
      <Themed.h1
        sx={{
          fontSize: ["6", "6", "9vw"],
          "@media screen and (min-width: 960px)": {
            fontSize: "86.43px",
          },
        }}
      >
        Contact
      </Themed.h1>
      <p
        sx={{
          paddingTop: ["2", "2", "3", "3"],
          paddingX: "4",
          lineHeight: "body",
          color: "text",
          maxWidth: "480px",
          marginX: "auto",
        }}
      >
        Als u geinteresseerd bent in een flyfi webapp kunt u mij een bericht
        sturen door middel van de contactform of via e-mail naar info@flyfi.nl.
        Ik antwoord altijd binnen 2 werkdagen. Alternatief kunt u mij ook bellen
        via 06-58910956. U kunt me ook volgen en berichtjes sturen via LinkedIn
        of Twitter. Wilt u meer weten over mijn code, volg me dan op Github.
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
    </>
  );
}
