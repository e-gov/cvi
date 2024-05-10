import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  stories: [],
  addons: [
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@chromatic-com/storybook',
  ],
  core: { disableTelemetry: true },
  docs: {
    autodocs: true,
  },
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs
  //   // Return the altered config
  //   return config;
  // },
};

export default config;
