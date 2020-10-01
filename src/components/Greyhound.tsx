/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import React from "react"
import * as greyhound from "../gifs/greyhound-loop-transparent.gif"

export default function Greyhound() {
  return (
    <Flex
      sx={{
        marginRight: "4",
        borderRadius: "50%",
        backgroundColor: "secondary",
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
          top: "100px",
        }}
      >
        <img
          src={greyhound}
          alt="greyhound running at full speed"
          sx={{
            height: "auto",
            maxWidth: ["240px", "360px"],
            zIndex: "3",
          }}
        />
        <Box
          sx={{
            width: "300px",
            height: "200px",
            backgroundColor: "darkgray",
            position: "relative",
            top: ["-20px", "-30px"],
            zIndex: "2",
          }}
        />
      </Flex>
    </Flex>
  )
}
