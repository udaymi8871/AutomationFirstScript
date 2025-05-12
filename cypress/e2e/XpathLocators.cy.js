/// <reference types="cypress-xpath" />

describe("Xpath Locators", () => {

    it('should log in successfully with valid credentials', () => {
        cy.visit('https://example.cypress.io/');
        
        // Use xpath to find the first link and click it
        cy.xpath("/html/body/div[3]/div/div/ul/li[1]/a").should('be.visible').click();
    });

});
