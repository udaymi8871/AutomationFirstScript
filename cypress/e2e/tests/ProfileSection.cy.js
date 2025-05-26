require('cypress-xpath');
describe('Profile', () => {
    it('should log in successfully with valid credentials and access profile menu', async () => {
        cy.viewport(1400, 877);
        cy.visit('https://app.kodnest.in/login', { timeout: 30000 }); // Added timeout for visit
        // Wait for the page to load
        cy.get('body', { timeout: 10000 }).should('be.visible');
        // Wait for the login button to be visible
        cy.get('#login-submit-button', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled');

        // Wait for loader to disappear
        cy.get('.loader', { timeout: 10000 }).should('not.exist');

        // Wait for the email input to be visible
        cy.get('#email-input', { timeout: 10000 });

        // Type email
        cy.get('#email-input', { timeout: 10000 })
            .should('be.visible')
            .click()
            .type('uday+practicebatch1-b@kodnest.com', { timeout: 10000 });

        // Type password
        cy.get('#password-input', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click()
            .type('Uday@123', { timeout: 10000 });

        // Click login
        cy.get('#login-submit-button', { timeout: 10000 }).click();

        // Wait for profile avatar to be visible and click
        cy.get('img.react-gravatar.rounded-full', { timeout: 10000 })
            .should('be.visible')
            .click();

        // // Click actual profile menu item if needed
        cy.get('#profile-menu-item', { timeout: 10000 })
            .should('be.visible')
            .click();



        // Wait for the edit form to be visible
        cy.get('#section-personaldetails', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled');

        // Click on the edit button
        cy.xpath(`//*[@id="section-personaldetails"]/div/button/button/button`).click();

        // Wait for the form to be fully loaded and interactive
        cy.get('form', { timeout: 10000 }).should('be.visible');

        // Wait for the input field to be visible and clickable
        cy.get("input[name='first_name']", { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click()
            .clear()
        //.type('Enter New Name Here');

        cy.get("input[name='first_name']").clear();

        cy.get('body')

        cy.wait(2000);
        cy.get("input[name='first_name']")
            .click()
            .type('Mishra');

        //cy.get("#\:r8t\:-form-item").click()

        // First ensure the form is visible
        cy.get('form').should('be.visible');

        cy.get("div[role='dialog'] p[class='text-right']>button[type='submit']").click();

        cy.wait(2000);

        cy.get("svg[class='h-4 w-4'][height='15']").click();



        cy.contains('button', 'Choose a file')
            .scrollIntoView()
            .should('be.visible')
            .click();


            cy.wait(2000);

            cy.get("button[id='upload-button-0']").selectFile("/Users/apple/Desktop/Cypresskod/cypress/fixtures/image.jpeg")


    });
});