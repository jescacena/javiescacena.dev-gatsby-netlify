describe("Single Entry", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/jescv-experiences/paradigma-verti-autos/");
  });
  it("Visits the entry", () => {
    cy.url().should("include", "/jescv-experiences/paradigma-verti-autos/");
  });

  it("Contains back home link", () => {
    cy.contains("javiescacena.dev").click();
    cy.url().should("eq", "http://localhost:8000/");
  });

  it("Contains contributions section", () => {
    cy.contains("Contributions");
  });
  it("Contains What i learned section", () => {
    cy.contains("What i learned");
  });
});
