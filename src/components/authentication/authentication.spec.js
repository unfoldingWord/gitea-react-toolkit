/// <reference types="cypress" />
describe('Authentication', function () {
  it('should not login with incorrect password', function () {
    cy.visit('/authentication');
    console.log(Cypress.env());
    cy.get('[data-test=username-input] input').eq(0).type(Cypress.env('TEST_USERNAME'));
    cy.get('[data-test=password-input] input').eq(0).type(Cypress.env('TEST_PASSWORD'));
    cy.get('[data-test=remember-checkbox]').eq(0).click();
    cy.get('[data-test=submit-button]').eq(0).click();
    cy.get('[data-test=logout-button]');
  });
});