import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation", () => {
  render(<Navigation />);

  const nav = screen.getByTestId("navigation");

  test("Should render.", () => {
    expect(nav).toBeInTheDocument();
  });
});
