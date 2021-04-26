describe("app", () => {
  it("works", () => {
    cy.visit("/");
    cy.findByText(/about/i).click();
    cy.location("pathname").should("match", /about/i);
    cy.findByText(/over flyfi en mij/i).should("be.visible");
    cy.findAllByText(/faq/i).click({ multiple: true });
    cy.location("pathname").should("match", /faq/i);
    cy.findAllByText(/vaak gestelde vragen/i).should("be.visible");
    cy.findAllByRole("link", { name: /contact/i }).click({ multiple: true });
    cy.location("pathname").should("match", /contact/i);
    cy.findByText(/verstuur/i);
  });
});
