/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import batonFail from "../videos/batonFail.mp4"
import Button from "../components/Button"

export default function FourOhFour() {
  return (
    <React.Fragment>
      <Styled.h1>404 - Dat ging mis</Styled.h1>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "480px",
          marginX: "auto",
          marginTop: "4",
        }}
      >
        <video
          sx={{
            width: ["320px", "480px", "480px"],
            // height: ["320px", "480px", "480px"],
          }}
          autoPlay
          playsInline
        >
          <source src={batonFail} type={"video/mp4"}></source>
        </video>
        <Styled.p sx={{ alignSelf: "left" }}>
          We konden de pagina niet vinden. Wilt u wellicht terug naar
        </Styled.p>
        <Button text={"De Homepage"} location={"/"} />
      </div>
    </React.Fragment>
  )
}
