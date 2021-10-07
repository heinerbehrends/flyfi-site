/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useRef } from "react";
import { getTopAndBottom, useScrollAnimation } from "../utils/useScroll";
import greyhoundMp4 from "../videos/greyhound-loop.mp4";
import greyhoundWebm from "../videos/greyhound-loop.webm";

export default function Greyhound() {
  const greyhoundContainer = useRef<HTMLDivElement>(null);
  const topBottom = useRef({ top: 0, bottom: 0 });
  useEffect(() => {
    topBottom.current = getTopAndBottom(greyhoundContainer.current);
  }, []);
  const offset = useScrollAnimation(topBottom.current);
  return (
    <div
      ref={greyhoundContainer}
      sx={{
        transform: `translate(${offset}px)`,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "4",
        borderRadius: "50%",
        width: ["200px", "250px", "300px"],
        height: ["200px", "250px", "300px"],
        overflow: "hidden",
        "@keyframes slideIn": {
          from: { transform: "translate(-100vw)" },
          to: { transform: "translate(0)" },
        },
        animation: "slideIn 2s ease-out",
      }}
    >
      <video
        sx={{
          maxWidth: ["240px", "300px", "360px"],
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={greyhoundMp4} type={"video/mp4"}></source>
        <source src={greyhoundWebm} type={"video/webm"}></source>
      </video>
    </div>
  );
}
