/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// Login Command
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://app.kodnest.in/login', { timeout: 40000 });
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.get('#login-submit-button', { timeout: 10000 }).should('be.visible').should('not.be.disabled');
    cy.get('.loader', { timeout: 10000 }).should('not.exist');
    cy.get('#email-input', { timeout: 10000 }).should('be.visible').click().type(email, { timeout: 10000 });
    cy.get('#password-input', { timeout: 10000 }).should('be.visible').should('not.be.disabled').click().type(password, { timeout: 10000 });
    cy.get('#login-submit-button', { timeout: 10000 }).click();
  });
  
  // File Upload 10th and 12th
  Cypress.Commands.add('uploadFile', (inputSelector, fileName) => {
    cy.get(inputSelector, { timeout: 20000 })
      .should('exist')
      .should('have.attr', 'type', 'file')
      .selectFile(`cypress/fixtures/${fileName}`, {
        force: true
      });
  });


  //UG detail update command
  
  Cypress.Commands.add('selectRadixDropdown', (index, optionText) => {
    cy.get("button[role='combobox']")
      .eq(index)
      .should('be.visible')
      .click();
  
    cy.get('[role="option"]')
      .contains(optionText)
      .should('be.visible')
      .click();
  });
  