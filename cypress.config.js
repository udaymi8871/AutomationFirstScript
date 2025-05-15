const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
