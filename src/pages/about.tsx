/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui";
import React from "react";
import ImageStack from "../components/ImageStack";
import SEO from "../components/SEO";
import { aboutTexts } from "../data/aboutData";

type aboutItemProps = {
  heading: string;
  text: React.ReactNode;
};

function AboutItem({ heading, text }: aboutItemProps) {
  return (
    <>
      <Themed.h4>{heading}</Themed.h4>
      <Themed.p>{text}</Themed.p>
    </>
  );
}

export default function About() {
  return (
    <>
      <SEO description={"Aboutpagina voor webbureau flyfi web development"} />
      <Themed.h1 sx={{ textAlign: "center" }}>
        Over <em>flyfi</em> en mij
      </Themed.h1>
      <main
        sx={{
          marginTop: 4,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ImageStack />
        <section
          sx={{
            paddingX: ["3", "4"],
            paddingTop: ["4", "4", "4", "0"],
            maxWidth: ["420px", "480px"],
          }}
        >
          {aboutTexts.map(item => (
            <AboutItem heading={item.heading} text={item.text} />
          ))}
        </section>
      </main>
    </>
  );
}
