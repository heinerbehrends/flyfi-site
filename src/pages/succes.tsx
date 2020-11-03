/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import ContactIcons from "../components/Contact-icons"
import SEO from "../components/SEO"

function SuccessMessage() {
  return (
    <Styled.p
      sx={{
        maxWidth: "30ch",
        padding: ["3", "0"],
        marginTop: "4",
        fontSize: ["2", "2", "3"],
      }}
    >
      U kunt binnen twee werkdagen een antwoord verwachten. Mocht dit niet snel
      genoeg zijn kunt u proberen om te bellen met 06-58910956. <br /> Wilt u in
      op de hoogte blijven van de activiteiten van flyfi? Voeg me dan toe aan uw
      netwerk op linkedIn of twitter. Als u geïnteresseerd bent in mijn code,
      neem dan een kijkje op mijn github pagina.
    </Styled.p>
  )
}

export default function Succes() {
  return (
    <React.Fragment>
      <SEO description={"Pagina die laadt als een bericht verstuurd is"} />
      <Styled.h1
        sx={{
          fontSize: ["6", "6", "9vw"],
          "@media screen and (min-width: 960px)": {
            fontSize: "86.43px",
          },
        }}
      >
        Bedankt voor u bericht!
      </Styled.h1>
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
        <SuccessMessage />
        <ContactIcons />
      </section>
    </React.Fragment>
  )
}
