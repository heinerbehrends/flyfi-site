/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui";
import React from "react";
import SEO from "../components/SEO";
import ScrollLinkHeading from "../components/ScrollLinkHeading";
import { faqs } from "../data/faqData";
import Faq from "../components/FAQ";

export default function FAQs() {
  return (
    <>
      <SEO
        description={
          "Antwoorden voor vaak gestelde vragen over flyfi's snelle webapps"
        }
      />
      <Themed.h1 id={"top"}>Vaak gestelde vragen</Themed.h1>
      <main sx={{ maxWidth: "100ch", marginX: "auto", marginTop: "4" }}>
        <section sx={{ marginTop: ["4", "5"] }}>
          {faqs.map((faq, i) => (
            <ScrollLinkHeading faq={faq} index={i} />
          ))}
        </section>
        <section sx={{ marginTop: 6 }}>
          {faqs.map((faq, i) => (
            <Faq faq={faq} index={i} />
          ))}
        </section>
      </main>
    </>
  );
}
