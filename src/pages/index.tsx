import React from "react"
import Hero from "../components/Hero"
import Main from "../components/Main"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Flyfi webdevelopment</title>
        <meta
          name="description"
          content="Webbureau flyfi is gespecialiseerd in Progressive Web Apps"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Hero />
      <Main />
    </>
  )
}
