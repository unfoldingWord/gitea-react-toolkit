/// <reference types="cypress" />
describe('Application Bar', function () {
  before(() => {
    cy.clearLocalStorage();
  });
  beforeEach(() => {
    cy.visit('/application-bar');
  })

  it('should test basic functionality of application bar with repository selection', function () {
    cy.get('[data-test=application-bar]').should('not.contain.text', 'en_ta');
    cy.get('[data-test=repository-menu]').eq(0).click();
    cy.wait(1000);
    cy.get('[data-test=repository-menu-modal] [data-test=repository-item]', { timeout: 10000 }).should('have.length', 4);
    cy.contains('Door43');
    cy.get('[data-test=repository-menu-modal] [data-test=repository-item]').eq(0).click();
    cy.get('[data-test=drawer-menu-button]').eq(0).click();
    cy.server().route('GET', 'https://git.door43.org/api/v1/repos/Door43-Catalog/**').as('tree');
    cy.wait('@tree').its('status').should('be', 200);
    cy.get('[data-test=file-tree]', { timeout: 10000 }).children().should('have.length', 9);
    cy.get('[data-test=drawer-menu-close-button]').click();
    cy.get('[data-test=application-bar]').should('contain.text', 'en_ta');
    cy.get('[data-test=repository-item-icon] svg').click();
    cy.get('[data-test=application-bar]').should('not.contain.text', 'en_ta');
  });

  it('should test signing in from application bar', () => {
    cy.get('[data-test=user-menu-icon]').eq(0).click();
    cy.get('[data-test=user-menu-icon] img').should('not.exist');
    cy.get('[data-test=username-input] input').eq(0).type(Cypress.env('TEST_USERNAME'));
    cy.get('[data-test=password-input] input').eq(0).type(Cypress.env('TEST_PASSWORD'));
    cy.get('[data-test=remember-checkbox]').eq(0).click();
    cy.get('[data-test=submit-button]').eq(0).click();
    cy.contains('Logout');
    cy.get('body').click('top')
    cy.get('[data-test=user-menu-icon] img').should('exist');
  });
});
