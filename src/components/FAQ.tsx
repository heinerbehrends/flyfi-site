/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { Link as ScrollLink } from "react-scroll/";
import ArrowUpIcon from "../icons/arrow_circle_up-24px.svg";
import { FAQProps } from "./ScrollLinkHeading";

export default function Faq({ faq, index }: FAQProps) {
  return (
    <>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <ScrollLink
          sx={{ fill: "text" }}
          to={"top"}
          offset={-64}
          smooth={true}
          href={"/"}
        >
          {" "}
          <div
            sx={{
              fill: "text",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ArrowUpIcon />
          </div>
        </ScrollLink>
        <Themed.h3 sx={{ marginX: 0, paddingLeft: 3 }} id={`question${index}`}>
          {faq.vraag}
        </Themed.h3>
      </div>
      <Themed.p
        sx={{
          marginTop: 3,
          marginLeft: 3,
          columnCount: 2,
          columnWidth: "320px",
          columnGap: 4,
        }}
      >
        {faq.antwoord}
      </Themed.p>
    </>
  );
}
