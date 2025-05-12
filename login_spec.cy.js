describe('Kodnest Login Test', () => {
    it('should log in successfully with valid credentials', () => {
      cy.visit('https://app.kodnest.com/login');
  
      // Optional: wait for loader if it exists
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
  
      // Email field
      cy.get('input[name="email"]', { timeout: 10000 })
        .should('be.visible')
        .should('not.be.disabled')
        .type('uday+kodd@kodnest.com');
  
      // Password field
      cy.get('input[name="password"]', { timeout: 10000 })
        .should('be.visible')
        .should('not.be.disabled')
        .type('Uday@123');
  
      // Click Login
      cy.get('button[type="submit"]').click();
  
      // Assert: redirected to dashboard
      cy.url().should('include', '/home');


      cy.get('button[aria-label="user-menu"]')
        .should('be.visible')
        .click();
    });
  });
  