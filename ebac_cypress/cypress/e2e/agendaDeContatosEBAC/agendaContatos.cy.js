/// <reference types="cypress" />

describe("Teste para a agenda de constatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve realizar o cadastro de um contato", () => {
    cy.get('input[type="text"]').type("Jobson de Oliveira");
    cy.get('input[type="email"]').type("jobsondeveloper@gmail.com");
    cy.get('input[type="tel"]').type("81989403631");

    cy.get(".adicionar").click()

    cy.get(".jtXTMB").contains("Jobson de Oliveira")
  });

  it("Deve realizar a edição de um dos contatos", () => {
    cy.get('.edit').first().click()

    cy.get('input[type="text"]').clear().type("Teste Edição");
    cy.get('input[type="email"]').clear().type("testeEdicao@gmail.com");
    cy.get('input[type="tel"]').clear().type("81988888888");

    cy.get('.alterar').click()

    cy.get(".jtXTMB").contains("testeEdicao@gmail.com")
  })

  it("Deve remover um dos contatos", () => {
    cy.get(".delete").first().click()

    cy.get(".jtXTMB").should("have.length", 1)
  })
});
