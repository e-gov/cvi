import { create } from '@storybook/theming';
import logo from '../../icons/src/lib/svg/logo.svg';

export default create({
  base: 'light',
  colorSecondary: '#005aa3',
  brandTitle: 'Veera',
  brandUrl: 'https://veera.eesti.ee',
  brandImage: logo,
  brandTarget: '_self',
});
