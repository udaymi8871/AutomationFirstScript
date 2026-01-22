describe('KodNest course flow', () => {
    const email = 'uday+practicebatch1-c@kodnest.com';
    const password = 'Uday@123';
  
    it('login -> open course -> next', () => {
      // 1) Open login page
      cy.visit('https://app.kodnest.com/login');
      cy.viewport(1400, 877);
  
      // 2) Fill login form (update selectors from your actual HTML)
      cy.get('input[type="email"]').type(email);
      cy.get('input[type="password"]').type(password);
      cy.contains('button', 'Log', { matchCase: false }).click();
  
      // 3) Open Courses (replace selector with real one from your HTML)
      cy.contains('Courses', { matchCase: false }).click();
  
      // 4) Click View Syllabus (use the full button element you have)
      cy.contains('span', 'View Syllabus').click();
  
      // 5) Module and topic icons (use the path you already shared)
      cy.get('path[d="M12 4v16m8-8H4"]').first().click({ force: true });
      cy.get('path[d="M12 4v16m8-8H4"]').eq(1).click({ force: true });
  
      // 6) Next button
      cy.get('#next-button').click();
    });
  });
  