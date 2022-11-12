describe("Productor puede navegar por la barra de navegación", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/productor");
  });
});
