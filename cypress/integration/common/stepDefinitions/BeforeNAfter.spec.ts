import { host } from "../../../support/commands";

beforeEach("Direct to the tools qa Website", () => {
  cy.visit(host);
});

afterEach(() => {
  cy.wait(1000);
  //  cy.get('#react-burger-menu-btn').click();
  //  cy.get('[data-test="logout-sidebar-link"]').click();
  //  cy.wait(1000);
  //  cy.url().should("include", host);
});
// // Given("",()=>{});
// // When("",()=>{});
// // And("",()=>{});
// // Then("",()=>{});
