/// <reference types="cypress" />
describe('Application Bar', function () {
  before(() => {
    cy.clearLocalStorage();
  });

  const numberOfDefaultItems = 4;

  it('should not login with incorrect password', function () {
    cy.visit('/application-bar');
    cy.get('[data-test=repository-menu]').eq(0).click();
    cy.wait(1000);
    cy.get('[data-test=repository-menu-modal] [data-test=repository-item]', { timeout: 10000 }).should('have.length', numberOfDefaultItems)
    cy.contains('Door43');
    cy.get('[data-test=repository-menu-modal] [data-test=repository-item]').eq(0).click();
    cy.get('[data-test=drawer-menu-button]').eq(0).click();
    cy.server().route('GET', 'https://git.door43.org/api/v1/repos/Door43-Catalog/**').as('tree');
    cy.wait('@tree').its('status').should('be', 200);
    cy.get('[data-test=file-tree]', { timeout: 10000 }).children().should('have.length', 9);
  });
});

