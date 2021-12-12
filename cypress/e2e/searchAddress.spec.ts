/// <reference path="../support/index.d.ts" />

describe("Run successful address search", () => {
  it("from home page", () => {
    cy.visit("/");

    cy.contains("Buscar Endereço").click();

    cy.get("input[name=cep]").type("16015320");

    cy.get("button").contains("Buscar").click();
  });

  it("from search cep page", () => {
    cy.visit("/buscarCep");

    cy.contains("Buscar Endereço").click();

    cy.get("input[name=cep]").type("16015320");

    cy.get("button").contains("Buscar").click();
  });
});

describe("Run unsuccessful address search", () => {
  it("with 7 characters", () => {
    cy.visit("/buscarEndereco");

    cy.get("input[name=cep]").type("1234567");

    cy.get("button").contains("Buscar").click();

    cy.contains("Digite os 8 dígitos.");
  });

  it("with 9 characters", () => {
    cy.visit("/buscarEndereco");

    cy.get("input[name=cep]").type("123456789");

    cy.get("button").contains("Buscar").click();

    cy.contains("Digite apenas 8 dígitos.");
  });

  it("with nonexistent cep", () => {
    cy.visit("/buscarEndereco");

    cy.get("input[name=cep]").type("12345678");

    cy.get("button").contains("Buscar").click();

    cy.contains("CEP não encontrado, tente novamente!");
  });
});

describe("Go back button", () => {
  it("should go to home page", () => {
    cy.visit("/buscarEndereco");

    cy.get("button").contains("Voltar").click();

    cy.url().should("eq", Cypress.config().baseUrl);
  });
});

export {};
