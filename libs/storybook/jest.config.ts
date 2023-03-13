/* eslint-disable */
export default {
  displayName: 'storybook',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/storybook',
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
