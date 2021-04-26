/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";

export const inputStyles: ThemeUIStyleObject = {
  padding: "3",
  maxWidth: ["280px", "400px"],
  borderRadius: "3",
  border: "1px solid #333",
  fontSize: ["2", "3"],
  fontWeight: "200",
  fontFamily: "Fira Sans",
  boxShadow: "big",
  transition: "background-color 1.5s ease-in",
  "&:focus": {
    outline: "none",
    boxShadow: "focus",
  },
};

export const buttonStyles: ThemeUIStyleObject = {
  ...inputStyles,
  backgroundColor: "accent",
  color: "background",
  fontWeight: "bold",
  fontSize: "4",
  marginTop: "4",
};

export function ErrorMessage({ children }: errorMessageProps) {
  return (
    <span role="alert" sx={{ marginLeft: "3", marginTop: "1", color: "red" }}>
      {children}
    </span>
  );
}

type errorMessageProps = {
  children?: any;
};

type labelProps = {
  for: string;
  children?: any;
};

export function Label(props: labelProps) {
  return (
    <label
      htmlFor={props.for}
      sx={{ marginLeft: "3", marginTop: "4", marginBottom: "1" }}
    >
      {props.children}
    </label>
  );
}
