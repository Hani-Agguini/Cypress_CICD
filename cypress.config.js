
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
    addCucumberPreprocessorPlugin
} = require("@badeball/cypress-cucumber-preprocessor");

const {
    createEsbuildPlugin
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const cypressOnFix = require("cypress-on-fix");

module.exports = defineConfig({

    e2e: {

        specPattern: [
            "cypress/**/*.feature",
            "cypress/**/*.cy.js"
        ],

        async setupNodeEvents(on, config) {

            // 1. Permet de gérer plusieurs plugins
            on = cypressOnFix(on);

            // 2. Configuration Cucumber
            await addCucumberPreprocessorPlugin(on, config);

            // 3. Configuration Esbuild
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)]
                })
            );

            // 4. Configuration Allure
            const { allureCypress } =
                await import("allure-cypress/reporter");

            allureCypress(on, config);

            return config;
        }
    }
});
