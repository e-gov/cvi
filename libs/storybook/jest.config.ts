/* eslint-disable */
export default {
  displayName: 'storybook',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './reports/jest',
        outputName: 'storybook-report.xml',
      },
    ],
  ],
};
