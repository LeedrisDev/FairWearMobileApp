/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import * as path from "path";

export default {
  "rootDir" : path.dirname(__dirname),

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/src/*.{js,jsx,ts,tsx}'],

  coverageReporters: [
    "lcov"
  ],

  coverageThreshold: {
    global: {
      functions:20,
      lines: 20,
    },
  },

  coveragePathIgnorePatterns: [
    "<rootDir>/src/main.tsx"
  ],

  testEnvironment: "jsdom",

  "transform": {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: '<rootDir>/config/tsconfig.json',
      jsx: 'react',
    }],
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(css)$": "<rootDir>/node_modules/jest-transform-css",
    "^.+\\.(css|scss|png|jpg|svg|jpeg)$": "jest-transform-stub"
  }

};
