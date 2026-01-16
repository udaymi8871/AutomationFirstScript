import user from "../../../cypress/fixtures/user.json";

describe("Landing Page ", () => {
  it("", () => {
    cy.viewport(1400, 877);
    cy.visit("https://app.kodnest.in/login", { timeout: 30000 }); // Added timeout for visit
    // Wait for the page to load
    cy.get("body", { timeout: 10000 }).should("be.visible");
    // Wait for the login button to be visible
    cy.get("#login-submit-button", { timeout: 10000 })
      .should("be.visible")
      .should("not.be.disabled");

    // Wait for loader to disappear
    cy.get(".loader", { timeout: 10000 }).should("not.exist");

    // Wait for the email input to be visible
    cy.get("#email-input", { timeout: 10000 });

    // Type email
    cy.get("#email-input", { timeout: 10000 })
      .should("be.visible")
      .click()

      .type(user.email, { timeout: 10000 });

    // Type password
    cy.get("#password-input", { timeout: 10000 })
      .should("be.visible")
      .should("not.be.disabled")
      .click()

      .type(user.password, { timeout: 10000 });

    // Click login
    cy.get("#login-submit-button", { timeout: 10000 }).click();

    // Wait for profile avatar to be visible and click
  });
});
