describe('Course Navigation Flow', () => {
    before(() => {
      cy.visit('https://app.kodnest.com/login');
  
      // Wait for loader to disappear
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
  
      // Login
      cy.get('input[name="email"]').type('uday+practicebatch1-b@kodnest.com');
      cy.get('input[name="password"]').type('Uday@123');
      cy.get('button[type="submit"]').click();
  
      // Ensure dashboard loads
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
    });
  
    it('should navigate course and proceed through syllabus steps', () => {
      // Click on Courses
      cy.contains('span', 'Courses').should('be.visible').click();
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
  
      // Click on View Syllabus
      cy.contains('button', 'View Syllabus').should('be.visible').click();
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
  
      // Expand syllabus sections (assumes multiple icons)
      cy.get('svg.text-black').should('have.length.greaterThan', 0).click({ multiple: true });
  
      // Click on first subtopic (ensure it's visible)
      cy.get('div[id^="subtopic-"]').first().within(() => {
        cy.get('svg.text-amber-400').click();
      });
  
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
  
      // Wait and click on Next if enabled
      cy.get('#next-button')
        .should('not.be.disabled')
        .click();
  
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
  
      // Click Next again if available
      cy.get('#next-button')
        .should('not.be.disabled')
        .click();
  
      // Optional: assert navigation worked (e.g., new subtopic loaded)
    });
  });
  