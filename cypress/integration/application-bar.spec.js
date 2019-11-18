/// <reference types="cypress" />
describe('Application Bar', function () {
  before(() => {
    cy.clearLocalStorage();
  });
  it('should not login with incorrect password', function (done) {
    cy.visit('/application-bar');
    cy.get('[data-test=repository-menu]').eq(0).click();
    cy.get('[data-test=repository-item]').then(($items) => {
      expect($items.length).eq(4);
      done();
    })
    //
  });
});

