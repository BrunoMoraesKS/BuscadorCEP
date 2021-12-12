import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation", () => {
  it("rendered", () => {
    render(<Navigation />);
    expect(screen.getByText("Buscar Endereço")).toBeInTheDocument();
    expect(screen.getByText("Buscar CEP")).toBeInTheDocument();
  });
});
