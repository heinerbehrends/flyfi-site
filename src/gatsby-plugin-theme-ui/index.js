const theme = {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#9FE5E5",
    muted: "#40A5A5",
    accent: "#663399",
    secondary: "#FFC0E2",
    modes: {
      dark: {
        text: "#f7f7f7",
        background: "#262626",
        primary: "#40A5A5",
        muted: "#9FE5E5",
        accent: "#FFC0E2",
        secondary: "#663399",
      },
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "FiraGO, Sans-Serif",
    heading: "FiraGO, Sans-Serif",
  },
  fontWeights: {
    thin: 200,
    light: 300,
    body: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    body: 1.75,
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
      overflowX: "hidden",
      a: {
        color: "accent",
        textDecoration: "none",
        "&:focus": {
          outline: "none",
          textDecoration: "underline",
        },
      },
      label: {
        fontWeight: "bold",
      },
    },
    h1: {
      fontSize: ["6", "6", "9vw"],
      "@media screen and (min-width: 960px)": {
        fontSize: "86.43px",
      },
      textAlign: "center",
      fontWeight: "thin",
      lineHeight: "heading",
      paddingTop: ["3", "4", "4", "5"],
      marginRight: "3",
      em: {
        fontStyle: "italic",
      },
    },
    h2: {
      marginTop: "5",
      marginX: ["4", "4", "5", "5"],
      paddingY: "3",
      fontSize: ["5", "6"],
      fontWeight: "900",
      // textShadow: "text",
    },
    h3: {
      fontSize: ["3", "4"],
      fontWeight: "500",
      color: "text",
      marginX: "3",
    },
    h4: {
      fontSize: "3",
      fontWeight: "black",
      marginTop: "3",
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
};

export default theme;
