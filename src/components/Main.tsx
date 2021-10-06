/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { useInView } from "react-intersection-observer";
import CardsVoordelen from "./Cards-voordelen";
import CardsTypes from "./Cards-types";
import CardsPakketten from "./Cards-pakketten";

export default function Main() {
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <main>
      <div ref={ref}>
        <Themed.h2
          sx={{
            transform: `${inView ? "translate(0)" : "translate(-100vw)"}`,
            transition: "transform 0.5s cubic-bezier(.56,.01,.39,1.29)",
          }}
        >
          De voordelen van <i>flyfi</i> webapps
        </Themed.h2>
      </div>
      <CardsVoordelen />
      <blockquote
        ref={ref2}
        sx={{
          backgroundColor: "muted",
          color: "background",
          width: "100%",
          marginTop: ["5"],
          fontSize: ["4", "5"],
          paddingX: ["3", "3", "4", "5"],
          paddingY: "3",
          fontWeight: "700",
          whiteSpace: "pre-line",
          opacity: `${inView2 ? "1" : "0"}`,
          transition: "opacity 0.5s ease-in",
        }}
      >
        Wist u dat 53% van alle bezoekers afhaakt als een site langer dan 3
        seconden laadt?
      </blockquote>
      <div ref={ref3}>
        <Themed.h2
          sx={{
            transform: `${inView3 ? "translate(0)" : "translate(-100vw)"}`,
            transition: "transform 0.5s cubic-bezier(.56,.01,.39,1.29)",
          }}
        >
          Hoe kan ik u helpen?
        </Themed.h2>
      </div>
      <CardsTypes />
      <div ref={ref4}>
        <Themed.h2
          sx={{
            transform: `${inView4 ? "translate(0)" : "translate(-100vw)"}`,
            transition: "transform 0.5s cubic-bezier(.56,.01,.39,1.29)",
          }}
        >
          Maatwerk of starterspakket?
        </Themed.h2>
      </div>
      <CardsPakketten />
    </main>
  );
}
