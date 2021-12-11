import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  render(<Header />);

  const headerContainer = screen.getByTestId("headerContainer");

  test("Should render.", () => {
    expect(headerContainer).toBeInTheDocument();
  });
});
