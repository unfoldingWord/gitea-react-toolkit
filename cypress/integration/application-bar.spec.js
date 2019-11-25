/// <reference types="cypress" />
describe('Application Bar', function () {
  before(() => {
    cy.clearLocalStorage();
  });
  const numberOfDefaultItems = 4;
  it('should not login with incorrect password', function () {
    cy.visit('/application-bar');
    cy.get('[data-test=repository-menu]').eq(0).click();
    cy.server().route("GET", 'https://git.door43.org/api/v1/repos/**').as('dataGetFirst');
    cy.wait(Array(numberOfDefaultItems).fill('@dataGetFirst')).its('status').should('be', 200);
    cy.get('[data-test=repository-menu-modal] [data-test=repository-item]').as('repository-items');
    cy.get('@repository-items').then(($items) => {
      expect($items.length).eq(numberOfDefaultItems);
    });
    cy.contains('Door43');
    cy.get('[data-test=repository-menu-modal] [data-test=repository-item]').eq(0).click();
    cy.get('[data-test=drawer-menu-button]').eq(0).click();
    cy.server().route("GET", 'https://git.door43.org/api/v1/repos/Door43-Catalog/**').as('tree');
    cy.wait('@tree').its('status').should('be', 200);
    cy.get('[data-test=file-tree]', { timeout: 10000 }).children().should('have.length', 9);
  });
});

