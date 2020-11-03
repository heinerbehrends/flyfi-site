/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Greyhound from "./Greyhound"
import Button from "./Button"
import HeroParagraph from "./HeroParagraph"

export default function Hero() {
  return (
    <div
      sx={{
        maxWidth: "960px",
        marginX: "auto",
      }}
    >
      <Styled.h1 sx={{ textAlign: "right" }}>
        Supersnelle webapps voor iedereen
      </Styled.h1>

      <section
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3",
          flexDirection: ["column", "column", "column", "row"],
        }}
      >
        <Greyhound />
        <HeroParagraph />
      </section>
      <div sx={{ textAlign: "center", marginTop: ["3", "4"] }}>
        <Button text="Nieuwsgierig?" location="/contact" />
      </div>
    </div>
  )
}
