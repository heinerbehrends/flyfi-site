/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { useInView } from "react-intersection-observer";

type CardProps = {
  icon?: React.ReactNode;
  cta?: React.ReactNode;
  heading: string;
  text: React.ReactNode;
};

export default function Card({ icon, heading, text, cta, ...rest }: CardProps) {
  const [ref, inView] = useInView();
  return (
    <div
      {...rest}
      ref={ref}
      sx={{
        padding: ["3", "4"],
        display: "flex",
        flexDirection: "column",
        opacity: `${inView ? "1" : "0"}`,
        transition: "opacity 1s ease-in",
      }}
    >
      <div>
        <div sx={{ display: "flex", alignItems: "center", fontSize: "5" }}>
          <span sx={{ fill: "accent" }}>{icon}</span>
          <Themed.h3
            sx={{
              marginLeft: icon ? "3" : "0",
            }}
          >
            {heading}
          </Themed.h3>
        </div>
        <p
          sx={{
            marginBlockEnd: "0",
            marginBlockStart: "0",
            marginTop: ["3", "4"],
            lineHeight: "body",
            color: "text",
            whiteSpace: "pre-line",
          }}
        >
          {text}
        </p>
      </div>
      {cta}
    </div>
  );
}
