const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  browser: {
    name: 'chrome',
    channel: 'stable',
    binary: '/Applications/Google Chrome 2.app',
  }
});
