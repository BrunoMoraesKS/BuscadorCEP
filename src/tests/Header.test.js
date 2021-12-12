import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("is showing app name", () => {
    render(<Header />);
    expect(screen.getByText("BuscadorCEP!")).toBeInTheDocument();
  });
});
