const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  projectId: "s4a9v9",
  env: {
    baseURL: "https://www.demoblaze.com/"
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/*.feature', 
    // video: true,
  },
});