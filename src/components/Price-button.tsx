/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Button from "./Button";

type priceButtonProps = {
  buttonText: string;
  price: number;
};
type priceProps = {
  price: number;
};

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
      <div sx={{ fontSize: "5", fontWeight: "black" }}>€{price}</div>
    </div>
  );
}

export default function PriceButton({ buttonText, price }: priceButtonProps) {
  return (
    <div
      sx={{
        display: "flex",
        marginTop: "4",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "420px",
      }}
    >
      <Price price={price} />
      <Button
        style={{ margin: "0" }}
        text={buttonText}
        location="/contact"
      ></Button>
    </div>
  );
}
