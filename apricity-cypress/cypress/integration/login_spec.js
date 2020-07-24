require('cypress-xpath')
const el = require('../fixtures/elements.json')
const d = require('../fixtures/data.json')

describe("login scenario", () => {
  it("verifies that user can login", () => {
    cy.visit("https://acme.apricity-health.com/", { timeout: 30000 });
    cy.get(el.login.userInput)
      .type(d.login.username)
      .should("have.value", d.login.username);
    cy.get(el.login.userPassword)
      .type(d.login.userpassword)
      .should('have.value', d.login.userpassword)
    cy.xpath(el.login.submitButton).click()
    cy.url().should("eq", d.url.dashboard)

    cy.xpath(el.dashboard.popupCancelButton).click()
    cy.xpath(el.dashboard.welcomeText).should("contain", "Good Morning")
  });

  it("allows user to checkin", () => {
    cy.xpath(el.leftNavMenu.checkIn).click();
    cy.url().should("eq", d.url.conversation)
    cy.xpath(el.checkin.page1.q1Header).should("contain", "COVID-19 Diagnostic Test");
    cy.xpath(el.checkin.page1.q1OptionNo).click()
    cy.xpath(el.checkin.page1.submitButton).click()
    cy.url().should("eq", d.url.conversation);
    cy.xpath(el.checkin.page2.q1Header)
      .should("contain", "Symptoms");

  })

  it("verifies that user can signout", () => {
    cy.xpath(el.leftNavMenu.signOut).click();
    cy.xpath(el.signout.confirmPopupButton).should("contain", "Confirm");
    cy.xpath(el.signout.confirmPopupButton).click()
    cy.url().should("eq", d.url.loginAlt);
  });

});
