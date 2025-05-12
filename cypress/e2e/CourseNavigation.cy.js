describe('Course Navigation', () => {

    it('', () => {
        // Arrange
        cy.visit('https://app.kodnest.com/login');
  
        // Optional: wait for loader if it exists
        cy.get('.loader', { timeout: 10000 }).should('not.exist');
        cy.get('input[name="email"]').type('uday+practicebatch1-b@kodnest.com')
        cy.get('input[name="password"]').type('Uday@123')
        
        cy.get('button[type="submit"]').click()
        cy.get('.loader', { timeout: 10000 }).should('not.exist');
  
       //cy.get('#header-item-1 > div > span').should('be.visible').click();
       cy.contains('span', 'Courses').should('be.visible').click();

       cy.get('.loader', { timeout: 10000 }).should('not.exist');

       cy.contains('button', 'View Syllabus').click();

       cy.get('.loader', { timeout: 10000 }).should('not.exist');

       cy.get('svg.text-black').click({ multiple: true });

       cy.get('.loader', { timeout: 10000 }).should('not.exist');

       //cy.get('div#subtopic-undefined').find('svg.text-amber-400').click();
       
        cy.get('div[id^="subtopic-"]').should('exist').first().find('svg.text-amber-400').click();


       cy.get('#next-button').click();

       cy.get('.loader', { timeout: 10000 }).should('not.exist')

       cy.get('#next-button').click();

        cy.get('#next-button').click()

        // Act
    
        // Assert
    
    });
  
  });
  