import { create } from '@storybook/theming';
import logo from '../src/lib/assets/images/logo.svg';

export default create({
  base: 'light',
  colorSecondary: '#005aa3',
  brandTitle: 'CVI',
  brandUrl: 'https://github.com/e-gov/cvi',
  brandImage: logo,
  brandTarget: '_self',
});
