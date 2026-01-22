import user from "../../../cypress/fixtures/user.json";

describe('KodNest course flow', () => {
    it('login -> open course -> next', () => {
      cy.viewport(1400, 877);
      
      // Login using the custom command
      cy.login(user.email, user.password);
      
      // Wait for page to load after login
      cy.wait(2000);
  
      // 3) Open Courses - wait for it to be visible and clickable
      cy.contains('Courses', { matchCase: false }, { timeout: 10000 })
        .should('be.visible')
        .click();
      
      // Wait for courses page to load
      cy.wait(2000);
  
      // 4) Click View Syllabus - wait for it to be visible
      cy.contains('span', 'View Syllabus', { timeout: 10000 })
        .should('be.visible')
        .click();
      
      // Wait for syllabus to load
      cy.wait(2000);
  
      // 5) Module and topic icons - wait for them to be available
      cy.get('path[d="M12 4v16m8-8H4"]', { timeout: 10000 })
        .should('have.length.at.least', 1)
        .first()
        .click({ force: true });
      
      cy.wait(1000);
      
      cy.get('path[d="M12 4v16m8-8H4"]', { timeout: 10000 })
        .eq(1)
        .should('be.visible')
        .click({ force: true });
      
      // Wait for content to load
      cy.wait(2000);
  
      // 6) Next button - try multiple possible selectors
      // Try #next-button first (most specific)
      cy.get('body').then(($body) => {
        const nextButton = $body.find('#next-button');
        if (nextButton.length > 0) {
          cy.get('#next-button', { timeout: 10000 })
            .should('be.visible')
            .click();
        } else {
          // Try finding button with "Next" text
          cy.get('body').then(() => {
            cy.contains('button', /next/i, { timeout: 10000 })
              .should('be.visible')
              .click();
          });
        }
      });
    });
  });
