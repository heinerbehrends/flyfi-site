/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Button from "./Button"

type priceButtonProps = {
  buttonText: string
  price: number
}
type priceProps = {
  price: number
}

function Price({ price }: priceProps) {
  return (
    <div
      sx={{
        display: "flex",
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
      <div sx={{ marginBottom: "-4px" }}>vanaf</div>
      <div sx={{ fontSize: "5", fontWeight: "700" }}>€{price}</div>
    </div>
  )
}

export default function PriceButton({ buttonText }: priceButtonProps) {
  return (
    <div
      sx={{
        marginTop: "4",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Button text={buttonText} location="/contact"></Button>
    </div>
  )
}
