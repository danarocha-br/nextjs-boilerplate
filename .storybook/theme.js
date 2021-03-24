import { create } from '@storybook/theming';
import tokens from 'styles/tokens';

export default create({
  base: 'light',

  colorPrimary: tokens.colors.gray[800],
  colorSecondary: tokens.colors.blue[900],

  appBg: tokens.colors.white,
  appContentBg: tokens.colors.white,
  appBorderColor: tokens.colors.gray[300],
  appBorderRadius: 8,
  appTextColor: tokens.colors.gray[500],

  textColor: tokens.colors.gray[800],
  fontBase: 'DM Sans, sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: tokens.colors.gray[800],
  barSelectedColor: tokens.colors.brand,
  // barBg: lighten(0.05, tokens.colors.nebula[900]),

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: tokens.colors.gray[800],
  inputBorderRadius: 4,

  brandTitle: 'Brand Docs',
  brandUrl: 'https://www.danarocha.com',
});
