/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/Contact-form"
import ContactIcons from "../components/Contact-icons"

export default function Contact() {
  return (
    <Layout>
      <section
        sx={{
          display: "flex",
          marginTop: ["5", "6"],
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
    </Layout>
  )
}
