import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import SearchNewAddress from "../modules/SearchNewAddress";

describe("CEP input", () => {
  render(<SearchNewAddress />);
  const cepInput = screen.getByTestId("cepInput");

  test("Should render.", () => {
    expect(cepInput).toBeInTheDocument();
  });

  test("Should be empty.", () => {
    expect(cepInput).toBeEmptyDOMElement();
  });
});
