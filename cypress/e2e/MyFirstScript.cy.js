describe('LogIn', () => {

  it('', () => {
      // Arrange
      cy.visit('https://app.kodnest.com/login');

      // Optional: wait for loader if it exists
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
      cy.get('input[name="email"]').type('uday+kodd1@kodnest.com')
      cy.get('input[name="password"]').type('Uday@123')
      
      cy.get('button[type="submit"]').click()
      cy.get('.loader', { timeout: 10000 }).should('not.exist');

      cy.get('img.h-\\[30px\\].w-\\[30px\\].rounded-full.border').should('be.visible').click();

     

  
      // Act
  
      // Assert
  
  });

});
