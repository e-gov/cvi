import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4400',
    supportFile: 'cypress/support/index.ts',
    specPattern: 'src/component/**.cy.ts',
    defaultCommandTimeout: 250,
  },
});
