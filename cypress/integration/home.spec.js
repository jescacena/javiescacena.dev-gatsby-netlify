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
    cy.get('[alt="Javier Escacena Avatar"]', { timeout: 3000 })
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("contains jobs", () => {
    cy.get(".jobs-heading + .cards-carousel-home li")
      .its("length")
      .should("be.gt", 0);
  });
  it("contains edus", () => {
    cy.get(".edu-heading + .cards-carousel-home li")
      .its("length")
      .should("be.gt", 0);
  });
  it("contains articles", () => {
    cy.get(".article-heading + .cards-carousel-home li")
      .its("length")
      .should("be.gt", 0);
  });

  it.only("contains social links", () => {
    cy.get(".social-item").its("length").should("be.gt", 0);
  });
});
