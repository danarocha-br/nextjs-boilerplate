import tokens from '../tokens';

export default {
  colors: {
    white: tokens.colors.white,
  },

  text: {
    main: tokens.colors.white,
    secondary: tokens.colors.gray[100],
  },
} as const;
