import rootMain from '../../../.storybook/main';
import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  ...rootMain,

  stories: [
    ...rootMain.stories,
    '../../**/src/lib/**/*.stories.ts',
    '../../**/src/lib/**/*.stories.mdx',
  ],
  addons: [...rootMain.addons, '@storybook/addon-essentials'],
  staticDirs: ['../src/assets'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }
    // add your own webpack tweaks if needed

    return config;
  },
};

export default config;
