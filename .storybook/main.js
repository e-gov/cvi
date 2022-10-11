module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
  ],
  core: { disableTelemetry: true },
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
