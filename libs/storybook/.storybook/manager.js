import { addons, types } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme,
});

setTimeout(() => {
  const panels = addons.getElements(types.PANEL);
  const htmlAddon = panels['storybook/html/panel'];
  if (htmlAddon) {
    htmlAddon.title = 'Rendered HTML';
  }
}, 100);
