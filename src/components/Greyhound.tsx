/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import greyhoundMp4 from "../videos/greyhound-loop.mp4"
import greyhoundWebm from "../videos/greyhound-loop.webm"

export default function Greyhound() {
  return (
    <Flex
      sx={{
        marginRight: "4",
        borderRadius: "50%",
        width: ["200px", "300px"],
        height: ["200px", "300px"],
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        right: "700px",
        boxShadow: "big",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <video
          sx={{ maxWidth: ["240px", "360px"] }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={greyhoundMp4} type={"video/mp4"}></source>
          <source src={greyhoundWebm} type={"video/webm"}></source>
        </video>
      </Flex>
    </Flex>
  )
}
