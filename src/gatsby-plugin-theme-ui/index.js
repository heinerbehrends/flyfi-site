export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#9FE5E5",
    muted: "#59bfbf",
    accent: "#663399",
    secondary: "#FFC0E2",
    modes: {
      dark: {
        text: "#f7f7f7",
        background: "#131313",
        primary: "#59bfbf",
        muted: "#59bfbf",
        accent: "#FFC0E2",
      },
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Fira Sans",
    heading: "Fira Sans",
  },
  fontWeights: {
    thin: 100,
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  radii: [4, 8, 16, 24],
  shadows: {
    big: "4px 4px 6px rgba(0, 0, 0, 0.25)",
    focus: "inset 0 0 3px 3px #FFC0E2",
    text: "5px 5px 5px rgba(0, 0, 0, 0.2)",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 96],
  breakpoints: ["480px", "576px", "768px", "860px"],
  styles: {
    root: {
      marginTop: "64px",
      fontFamily: "body",
      fontSize: "2",
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      fill: "#333",
      maxWidth: "100vw",
      "overflow-x": "hidden",
      a: {
        color: "accent",
      },
    },
    h1: {
      fontSize: ["6", "6", "9vw"],
      textShadow: "text",
      "@media screen and (min-width: 960px)": {
        fontSize: "86.43px",
      },
      textAlign: "center",
      fontWeight: "200",
      lineHeight: "heading",
      paddingTop: ["3", "4", "4", "5"],
      marginTop: "3",
      marginX: "3",
      em: {
        fontStyle: "italic",
      },
    },
    h2: {
      marginTop: "5",
      marginX: ["3", "3", "4", "4"],
      paddingY: "3",
      fontSize: ["5", "6"],
      fontWeight: "900",
      textShadow: "text",
    },
    h3: {
      fontSize: ["4", "5"],
      fontWeight: "700",
      color: "text",
      marginX: "3",
    },
    h4: {
      fontSize: "3",
      fontWeight: "500",
      marginTop: "2",
    },
    p: {
      lineHeight: "body",
      color: "text",
      marginTop: "2",
      em: {
        fontStyle: "italic",
      },
    },
  },
}
