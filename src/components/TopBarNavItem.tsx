/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

type TopBarNavItemProps = {
  text: string;
  location: string;
  variant?: "active";
};

export default function TopBarNavItem({ text, location }: TopBarNavItemProps) {
  return (
    <Link
      activeStyle={{
        color: "#fff",
        fontWeight: "500",
        backgroundColor: "#3FA2A2",
      }}
      sx={{
        textDecoration: "none",
        color: "#333",
        fontSize: ["2", "2", "3"],
        fontWeight: "thin",
        backgroundColor: "transparent",
        "&:hover": { backgroundColor: "#c0eeee" },
        "&:focus": {
          outline: "none",
          boxShadow: "focus",
          textDecoration: "none",
        },
      }}
      to={location}
    >
      <div
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          paddingX: ["2", "2", "3"],
        }}
      >
        {text}
      </div>
    </Link>
  );
}
