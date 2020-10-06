/** @jsx jsx */
import { jsx, Box, Flex, Styled } from "theme-ui"
import React from "react"
import { addScaleCorrection } from "framer-motion"

type CardProps = {
  icon?: String
  heading: String
  text: String
}

export default function Card({ icon, heading, text }: CardProps) {
  return (
    <Box
      sx={{
        padding: ["3", "4"],
        // backgroundColor: "primary",
        borderRadius: "3",
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        {icon}
        <h3
          sx={{
            marginLeft: icon ? "3" : "0",
            marginBlockEnd: "0",
            marginBlockStart: "0",
            marginX: "3",
            fontSize: ["4", "5"],
            color: "text",
            textAlign: "center",
          }}
        >
          {heading}
        </h3>
      </Flex>
      <p
        sx={{
          marginBlockEnd: "0",
          marginBlockStart: "0",
          marginTop: ["3", "4"],
          lineHeight: "body",
          color: "text",
        }}
      >
        {text}
      </p>
    </Box>
  )
}
