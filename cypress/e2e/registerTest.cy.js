import {registerPage} from "../pages/registerPage";
import {homePage} from "../pages/homePage";
import registerData from "../fixtures/registerData.json"

const registerObj = new registerPage()
const homeObj = new homePage()

describe('test automation', () => {

    it('register flow',() => {
        registerObj.openUrl()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.clickPolicyCheckbox()
        registerObj.clickContinueButton()
    })

    it('search product flow', () => {
        // Visit the home page
        cy.visit('https://naveenautomationlabs.com/opencart/')
        
        // Search for MacBook
        homeObj.searchProduct('MacBook')
        
        // Verify the product is visible
        cy.get(homeObj.weblocators.product).should('be.visible')
        
        // Add to cart
        homeObj.addToCart()
        
        // Verify success message
        homeObj.verifySuccessMessage()
            .should('be.visible')
            .should('contain', 'Success: You have added')
    })
})