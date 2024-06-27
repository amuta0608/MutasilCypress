const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const cucumber = require("cypress-cucumber-preprocessor").default;
const resolve = require("resolve");
  
module.exports = defineConfig({
    
    /**
     * Report
     */
    video: true,
    screenshotOnRunFailure: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        reportPageTitle: "Labamu Desktop",
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    /**
     * Project & Options
     */
    projectId: "nmeysr",
    viewportWidth: 1600,
    viewportHeight: 1080,
    blockHosts: ["*posthog.com"],
    /**
     * e2e
     */
    e2e: {
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            const options = {
                ...browserify.defaultOptions,
                typescript: resolve.sync("typescript", {
                    baseDir: config.projectRoot,
                }),
            };

            require("cypress-mochawesome-reporter/plugin")(on);

            on("file:preprocessor", cucumber(options));
        },
        specPattern: ["cypress/integration/feature/*.feature"],
        // specPattern: ["cypress/e2e"],
    },
});