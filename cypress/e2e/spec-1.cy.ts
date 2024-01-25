describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("update state & toggle visible", () => {
    cy.get("input").type("test in react vite");
    cy.get("button").click();
    cy.get("p").should("have.text", "test in react vite");
  });
});
