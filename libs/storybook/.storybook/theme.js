import { create } from '@storybook/theming';
import logo from '../src/lib/assets/images/logo.svg';

export default create({
  base: 'light',
  colorSecondary: '#005aa3',
  brandTitle: 'Veera',
  brandUrl: 'https://veera.eesti.ee',
  brandImage: logo,
  brandTarget: '_self',
});
