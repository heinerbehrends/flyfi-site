/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import Sun from "../icons/sun.svg";
import Moon from "../icons/moon.svg";

export default function DarkModeSwitch() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      aria-label="dark mode"
      sx={{
        alignItems: "center",
        display: "flex",
        backgroundColor: "transparent",
        border: "none",
        padding: ["2", "3"],
        cursor: "pointer",
        "&:hover": { backgroundColor: "#c0eeee" },
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
        },
      }}
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      {colorMode === "default" ? <Moon /> : <Sun />}
    </button>
  );
}
