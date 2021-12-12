import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchCEP from "../pages/SearchCEP";

describe("Search CEP page rendered", () => {
  it("inputs and button", () => {
    render(<SearchCEP />);

    const stateInput = screen.getByTestId("stateInput");
    const cityInput = screen.getByTestId("cityInput");
    const streetInput = screen.getByTestId("streetInput");
    const searchButton = screen.getByTestId("searchButton");
    const goBackButton = screen.getByTestId("goBackButton");

    expect(stateInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(streetInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();
  });
});
