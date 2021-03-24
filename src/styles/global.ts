import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

import tokens from './tokens';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    button {
      cursor: pointer;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      ${!removeBg &&
      css`
        background-color: ${theme.colors.white};
      `}
    }

    [disabled] {
      cursor: not-allowed;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body,
    button,
    input,
    textarea {
      font-family: ${tokens.font.family};
      font-size: ${tokens.font.sizes.base};
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    button {
      outline: none;
      border: none;
      cursor: pointer;
    }
  `}
`;

export default GlobalStyles;
