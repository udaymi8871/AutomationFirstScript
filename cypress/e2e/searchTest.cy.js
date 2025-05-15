import { homePage } from "../pages/homePage";

const homeObj = new homePage();

describe('Search Product Test', () => {
    beforeEach(() => {
        // Visit the home page before each test
        cy.visit('https://naveenautomationlabs.com/opencart/');
    });

    it('should search for a product', () => {
        // Search for MacBook
        homeObj.searchProduct('MacBook');
        
        // Verify the product is visible
        cy.get(homeObj.weblocators.product).should('be.visible');
        
        // Add to cart
        homeObj.addToCart();
        
        // Verify success message
        homeObj.verifySuccessMessage()
            .should('be.visible')
            .should('contain', 'Success: You have added');
    });
}); 