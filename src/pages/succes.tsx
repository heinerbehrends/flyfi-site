/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui";
import React from "react";
import ContactIcons from "../components/Contact-icons";
import SEO from "../components/SEO";
import { successText } from "../data/tekstData";

function SuccessMessage() {
  return (
    <Themed.p
      sx={{
        maxWidth: "30ch",
        padding: ["3", "0"],
        marginTop: "4",
        marginLeft: "4",
        fontSize: ["2", "2", "3"],
      }}
    >
      {successText}
    </Themed.p>
  );
}

export default function Succes() {
  return (
    <>
      <SEO description={"Pagina die laadt als een bericht verstuurd is"} />
      <Themed.h1
        sx={{
          fontSize: ["6", "6", "9vw"],
          "@media screen and (min-width: 960px)": {
            fontSize: "86.43px",
          },
        }}
      >
        Bedankt voor u bericht!
      </Themed.h1>
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
    </>
  );
}
