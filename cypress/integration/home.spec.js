describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000");
    cy.waitForRouteChange();
  });

  it("url check", () => {
    cy.url().should("eq", "http://localhost:8000/");
  });

  it("contains valid heading", () => {
    cy.get(".heading").should("have.html", "Hi, I'm Javi Escacena");
  });

  it("contains presentation paragraph", () => {
    cy.get(".presentation").should("have.length", 1);
  });

  it("contains avatar", () => {
    cy.get('[alt="Javier Escacena Avatar"]')
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
