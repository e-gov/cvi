import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename),
    baseUrl: 'http://localhost:4400',
    supportFile: 'cypress/support/index.ts',
    specPattern: 'src/component/**.cy.ts',
    video: false,
    videosFolder: '../../dist/cypress/apps/ui-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/ui-e2e/screenshots',
    /**
     * TODO(@nrwl/cypress): In Cypress v12,the testIsolation option is turned on by default.
     * This can cause tests to start breaking where not indended.
     * You should consider enabling this once you verify tests do not depend on each other
     * More Info: https://docs.cypress.io/guides/references/migration-guide#Test-Isolation
     **/
    testIsolation: false,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: '../../reports/cypress/ui-storybook-cypress-report.xml',
    toConsole: true,
  },
});
