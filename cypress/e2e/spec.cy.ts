// cypress/e2e/firstTest.cy.ts

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have a <main> tag", () => {
    cy.get("main").should("exist");
  });

  it("should have <h1> to <h2> tags in correct order", () => {
    const headings = ["h1", "h2"];
    headings.forEach((heading, index) => {
      cy.get(heading).should("exist");
    });
  });

  it("images should have a non-empty alt attribute", () => {
    cy.get("img").each(($img) => {
      cy.wrap($img).should("have.attr", "alt").and("not.be.empty");
    });
  });

  it("images should have specified width and height", () => {
    cy.get("img").each(($img) => {
      cy.wrap($img).should("have.attr", "width").and("not.be.empty");
      cy.wrap($img).should("have.attr", "height").and("not.be.empty");
    });
  });

  it("anchor tags should have a non-empty href attribute", () => {
    cy.get("a").should("have.attr", "href").and("not.be.empty");
  });
});
