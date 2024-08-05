import rootMain from '../../../.storybook/main';
import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  ...rootMain,

  stories: [
    ...rootMain.stories,
    '../../**/src/lib/**/*.mdx',
    '../../**/src/lib/**/*.stories.ts',
  ],
  exceptions: ['../src/lib/stories/styles/variables/colors.stories.ts'],
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
