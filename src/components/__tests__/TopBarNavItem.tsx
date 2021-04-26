import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import TopBarNavItem from "../TopBarNavItem";

describe("TopBarNavItem", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TopBarNavItem text="home" location="/" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the active variant correctly", () => {
    const variantTree = renderer
      .create(<TopBarNavItem text="home" location="/" variant="active" />)
      .toJSON();
    expect(variantTree).toMatchSnapshot();
  });
  it("renders a link with correct label and location", () => {
    render(<TopBarNavItem text="home" location="/" />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
