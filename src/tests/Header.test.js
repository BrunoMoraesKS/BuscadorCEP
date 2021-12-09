import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  render(<Header />);
  const headerContainer = screen.getByTestId("headerContainer");
  const title = screen.findByText("BuscadorCEP!");

  test("Should render.", () => {
    expect(headerContainer).toBeInTheDocument();
  });

  test("Should render the navigation.", () => {
    expect(title).toBeInTheDocument();
  });
});
