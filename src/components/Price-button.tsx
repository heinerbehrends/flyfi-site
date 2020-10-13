/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import React from "react"
import Button from "./Button"

type priceButtonProps = {
  price: number
  buttonText: string
}

export default function PriceButton({ price, buttonText }: priceButtonProps) {
  return (
    <Flex
      sx={{
        marginTop: "4",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          backgroundColor: "secondary",
          borderRadius: "48px",
          width: "96px",
          height: "96px",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "big",
        }}
      >
        <div sx={{ marginBottom: "-8px" }}>vanaf</div>
        <div sx={{ fontSize: "5", fontWeight: "700" }}>€{price}</div>
      </Flex>
      <Button text={buttonText} location="/contact"></Button>
    </Flex>
  )
}
