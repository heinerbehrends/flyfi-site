describe("app", () => {
  it("works", () => {
    cy.visit("/");
    cy.findByText(/about/i).click();
    cy.findByText(/over flyfi en mij/i);
  });
});
