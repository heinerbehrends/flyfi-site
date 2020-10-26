/** @jsx jsx */
import { jsx } from "theme-ui"
import { SystemStyleObject } from "@styled-system/css"

export const inputStyles: SystemStyleObject = {
  padding: "3",
  maxWidth: ["280px", "400px"],
  borderRadius: "3",
  border: "1px solid #333",
  fontSize: ["2", "3"],
  fontWeight: "300",
  fontFamily: "Fira Sans",
  boxShadow: "big",
  transition: "background-color 1.5s ease-in",
  "&:focus": {
    outline: "none",
    boxShadow: "focus",
  },
}

export const buttonStyles: SystemStyleObject = {
  ...inputStyles,
  backgroundColor: "accent",
  color: "#fff",
  fontWeight: "700",
  fontSize: "4",
  marginTop: "4",
}

export function ErrorMessage({ children }: errorMessageProps) {
  return (
    <span sx={{ marginLeft: "3", marginTop: "1", color: "red" }}>
      {children}
    </span>
  )
}

type errorMessageProps = {
  children?: any
}

type labelProps = {
  for: string
  children?: any
}

export function Label(props: labelProps) {
  return (
    <label
      htmlFor={props.for}
      sx={{ marginLeft: "3", marginTop: "4", marginBottom: "1" }}
    >
      {props.children}
    </label>
  )
}
