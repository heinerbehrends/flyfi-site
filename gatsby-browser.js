import "@fontsource/firago/200.css";
import "@fontsource/firago/200-italic.css";
import "@fontsource/firago/400.css";
import "@fontsource/firago/500.css";
import "@fontsource/firago/900.css";
import "./src/reset.css";
import React from "react";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
