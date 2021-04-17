/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui";
import React from "react";
import ContactForm from "../components/Contact-form";
import ContactIcons from "../components/Contact-icons";
import SEO from "../components/SEO";
import { contactText } from "../data/tekstData";

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
      {/* <p
        sx={{
          paddingTop: ["2", "2", "3", "3"],
          paddingX: "4",
          lineHeight: "body",
          color: "text",
          maxWidth: "480px",
          marginX: "auto",
        }}
      >
        {contactText}
      </p> */}
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
