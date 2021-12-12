describe("Run successful CEP search", () => {
  it("from home page", () => {
    cy.visit("/");

    cy.contains("Buscar CEP").click();

    cy.get("select[name=state]").select("São Paulo");

    cy.get("select[name=city]").select("Araçatuba");

    cy.get("input[name=street]").type("Tancredo de paiva morel");

    cy.get("button").contains("Pesquisar").click();
  });

  it("from search address page", () => {
    cy.visit("/buscarEndereco");

    cy.contains("Buscar CEP").click();

    cy.get("select[name=state]").select("São Paulo");

    cy.get("select[name=city]").select("Araçatuba");

    cy.get("input[name=street]").type("Tancredo de paiva morel");

    cy.get("button").contains("Pesquisar").click();
  });
});

describe("Run unsuccessful CEP search", () => {
  it("with less than 3 characters", () => {
    cy.visit("/buscarCep");

    cy.get("select[name=state]").select("São Paulo");

    cy.get("select[name=city]").select("Araçatuba");

    cy.get("input[name=street]").type("a");

    cy.get("button").contains("Pesquisar").click();

    cy.contains("Logradouro inválido.");
  });

  it("with nonexistent street", () => {
    cy.visit("/buscarCep");

    cy.get("select[name=state]").select("São Paulo");

    cy.get("select[name=city]").select("Araçatuba");

    cy.get("input[name=street]").type("testando");

    cy.get("button").contains("Pesquisar").click();

    cy.contains("Logradouro inválido.");
  });
});

describe("Go back button", () => {
  it("should go to home page", () => {
    cy.visit("/buscarCep");

    cy.get("button").contains("Voltar").click();

    cy.url().should("eq", Cypress.config().baseUrl);
  });
});

export {};
