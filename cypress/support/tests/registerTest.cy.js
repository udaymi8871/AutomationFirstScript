import { registerPage } from "../../pages/registerPage";
import registerData from "../../fixtures/registerData.json";

const registerObj = new registerPage();

describe("Test Automation - Register Flow", () => {
    it("should fill registration form and submit", () => {
        registerObj.openUrl();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.selectCheckbox();
        registerObj.clickOnContinue();
    });
});
