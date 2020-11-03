/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import batonFail from "../videos/batonFail.mp4"
import Button from "../components/Button"
import SEO from "../components/SEO"

export default function FourOhFour() {
  return (
    <React.Fragment>
      <SEO description={"404 pagina voor flyfi.nl"} />
      <Styled.h1>Het stokje is gevallen</Styled.h1>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "480px",
          marginX: "auto",
          marginTop: "4",
        }}
      >
        <video
          sx={{
            width: ["320px", "480px", "480px"],
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={batonFail} type={"video/mp4"}></source>
        </video>
        <Styled.h3 sx={{ marginTop: "3" }}>
          Deze pagina bestaat niet.
          <br /> Wilt u wellicht terug naar
        </Styled.h3>
        <Button text={"De Homepage?"} location={"/"} />
      </div>
    </React.Fragment>
  )
}
