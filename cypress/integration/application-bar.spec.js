/// <reference types="cypress" />
describe('Application Bar', function () {
  before(() => {
    cy.clearLocalStorage();
  });
  it('should not login with incorrect password', function () {
    cy.visit('/application-bar');
  });
});

