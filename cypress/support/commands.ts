/// <reference types="cypress" />

Cypress.on("log:added", (ev) => {
  if (ev.displayName === "xhr" || ev.displayName === "fetch") {
    // @ts-expect-error   --  you can modicy the types for this if you want.
    const top$ = window.top?.Cypress.$Cypress.$;
    top$(".command").last().hide();
  }
});

export const host = "https://www.saucedemo.com/";
export const username = "standard_user";
export const password = "secret_sauce";
export const dashboard = "https://www.saucedemo.com/inventory.html";

export const idCy = (id: string): string => {
  return `[data-cy="${id}"]`;
};

const generateRandomPhoneNumber = (): string => {
  const phone = "08";
  const digitA =
    new Date().getFullYear().toString()[2] +
    new Date().getFullYear().toString()[3];
  const digitB = new Date().getMonth().toString();
  const digitC = new Date().getDate().toString();
  const digitD = new Date().getHours().toString();
  const digitE = new Date().getMinutes().toString();
  const digitF = new Date().getSeconds().toString();

  return phone + digitA + digitB + digitC + digitD + digitE + digitF;
};

export const CustNumb = generateRandomPhoneNumber();
