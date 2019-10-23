/// <reference types="cypress" />
describe('Authentication', function() {
  it('should not login with incorrect password', function() {
    cy.visit('/authentication')
    cy.get('[data-test=username-input] input').eq(0).type('test');
    cy.get('[data-test=password-input] input').eq(0).type('test123');
    cy.get('[data-test=remember-checkbox]').eq(0).click();
    cy.get('[data-test=submit-button]').eq(0).click();
    cy.get('[data-test=login-error-text]').eq(0).then(($errorElement) => {
      expect($errorElement.text()).to.not.be.empty;
    })
  })
})