import { defineConfig } from "cypress";

export default defineConfig({
  // iPhone 14 viewport
  viewportWidth: 393,
  viewportHeight: 852,

  env: {
    baseUrl: 'https://localhost:5173/',
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
