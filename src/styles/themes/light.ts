import tokens from '../tokens';

export default {
  id: 'light',
  colors: {
    white: tokens.colors.white,
  },

  text: {
    main: tokens.colors.gray[900],
    secondary: tokens.colors.gray[100],
  },
} as const;
