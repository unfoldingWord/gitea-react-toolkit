/// <reference types="cypress" />
describe('Authentication', function () {
  before(() => {
    cy.clearLocalStorage();
  });
  beforeEach(() => {
    cy.visit('/#/Authentication%20?id=loginform');
  });

  it('should login with correct password', function () {
    cy.get('[data-test=username-input] input').eq(0).type(Cypress.env('TEST_USERNAME'));
    cy.get('[data-test=password-input] input').eq(0).type(Cypress.env('TEST_PASSWORD'));
    cy.get('[data-test=remember-checkbox]').eq(0).click();
    cy.get('[data-test=submit-button]').eq(0).click();
    cy.get('[data-test=logout-button]').click();
  });

  it('should fail to login with wrong password', function () {
    cy.get('[data-test=username-input] input').eq(0).type(Cypress.env('TEST_USERNAME'));
    cy.get('[data-test=password-input] input').eq(0).type('wrong password');
    cy.get('[data-test=submit-button]').eq(0).click();
    cy.get('[data-test=logout-button]').should('not.exist');
    cy.get('[data-test=submit-button]').eq(0);
    cy.get('[data-test=login-error-text]').contains('Did you fat finger your password?');
  });

  it('should fail to login with wrong user', function () {
    cy.get('[data-test=username-input] input').eq(0).type('wrong user');
    cy.get('[data-test=password-input] input').eq(0).type('wrong password');
    cy.get('[data-test=submit-button]').eq(0).click();
    cy.get('[data-test=logout-button]').should('not.exist');
    cy.get('[data-test=submit-button]').eq(0);
    cy.get('[data-test=login-error-text]').contains('No user found?');
  });

  // it('should fail on invalid server url', function () {
  //   cy.contains('bg.door43.org').eq(0).click({ force: true }).focused().type('hello', { force: true });
  //   cy.get('[data-test=username-input] input').eq(0).type(Cypress.env('TEST_USERNAME'));
  //   cy.get('[data-test=password-input] input').eq(0).type(Cypress.env('TEST_PASSWORD'));
  //   cy.get('[data-test=remember-checkbox]').eq(0).click();
  //   cy.get('[data-test=submit-button]').eq(0).click();
  //   cy.get('[data-test=login-error-text]').contains('There is an issue with the server please try again.');
  // });
});

