import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchNewAddress from "../modules/SearchNewAddress";

describe("Search address rendered", () => {
  it("CEP input", () => {
    render(<SearchNewAddress />);
    expect(
      screen.getByPlaceholderText("Digite seu CEP...")
    ).toBeInTheDocument();
  });
  it("search button", () => {
    render(<SearchNewAddress />);
    expect(screen.getByText("Buscar")).toBeInTheDocument();
  });
  it("go back button", () => {
    render(<SearchNewAddress />);
    expect(screen.getByText("Voltar")).toBeInTheDocument();
  });
});
