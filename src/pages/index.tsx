import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO description="Webbureau flyfi is gespecialiseerd in Progressive Web Apps" />
      <Hero />
      <Main />
    </>
  );
}
