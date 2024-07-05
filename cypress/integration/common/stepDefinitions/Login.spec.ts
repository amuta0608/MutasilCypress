import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {
  CustNumb,
  dashboard,
  host,
  password,
  username,
} from "../../../support/commands";

/**
 * Scenario login success
 */
Given("I already on swaglab page", () => {
  cy.visit(host);
  cy.url().should("include", host);
});
When("I click the username", () => {
  cy.get('[data-test="username"]').click();
});
And("insert the username", () => {
  cy.get('[data-test="username"]').focus().type(username);
});
And("I click the password", () => {
  cy.get('[data-test="password"]').click();
});
And("insert the password", () => {
  cy.get('[data-test="password"]').focus().type(password);
});
Then("click the login button", () => {
  cy.get('[data-test="login-button"]').click();
});
And("Directly to the dashboard page", () => {
  cy.url().should("include", dashboard);

  cy.wait(1000);
  cy.get("#react-burger-menu-btn").click();
  cy.get('[data-test="logout-sidebar-link"]').click();
  cy.wait(1000);
  cy.url().should("include", host);
});

/**
 * Scenario Login Gagal Karena Username Salah
 */
Given("I already on swaglab page", () => {
  cy.visit(host);
  cy.url().should("include", host);
});
When("I click the username", () => {
  cy.get('[data-test="username"]').click();
});
And("insert incorrect username", () => {
  cy.get('[data-test="username"]').focus().type(CustNumb);
});
And("I click the password", () => {
  cy.get('[data-test="password"]').click();
});
And("insert correct password", () => {
  cy.get('[data-test="password"]').focus().type(password);
});
Then("Click the login button", () => {
  cy.get('[data-test="login-button"]').click();
});
And("Show error message", () => {
  cy.get('[data-test="error"]').should(
    "have.text",
    "Epic sadface: Username and password do not match any user in this service",
  );
});

/**
 * Scenario Login Gagal Karena Username Salah
 */
Given("I already on swaglab page", () => {
  cy.visit(host);
  cy.url().should("include", host);
});
When("I click the username", () => {
  cy.get('[data-test="username"]').click();
});
And("insert correct username", () => {
  cy.get('[data-test="username"]').focus().type(username);
});
And("I click the password", () => {
  cy.get('[data-test="password"]').click();
});
And("insert incorrect password", () => {
  cy.get('[data-test="password"]').focus().type(CustNumb);
});
Then("Click the login button", () => {
  cy.get('[data-test="login-button"]').click();
});
And("Show error message", () => {
  cy.get('[data-test="error"]').should(
    "have.text",
    "Epic sadface: Username and password do not match any user in this service",
  );
});

/**
 * Scenario Login Gagal Karena kolom kosong
 */
Given("I already on swaglab page", () => {
  cy.visit(host);
  cy.url().should("include", host);
});
When("click the login button", () => {
  cy.get('[data-test="login-button"]').click();
});
And("Show error message empty", () => {
  cy.get('[data-test="error"]').should(
    "have.text",
    "Epic sadface: Username is required",
  );
});
