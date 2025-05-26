
describe('Course Navigation', () => {

  it('', () => {
      // Arrange
      cy.visit('https://app.kodnest.com/login');

      // Optional: wait for loader if it exists
      cy.get('.loader', { timeout: 10000 }).should('not.exist');
      cy.get('input[name="email"]').type('uday+practicebatch1-b@kodnest.com')
      cy.get('input[name="password"]').type('Uday@123')
      
      cy.get('button[type="submit"]').click()

     
  });
});