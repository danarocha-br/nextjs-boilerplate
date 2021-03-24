export default {
  screens: {
    xxl: '153.6rem',
    xl: '128rem',
    lg: '102.4rem',
    md: '76.8rem',
    sm: '64rem',
    gutter: '3.2rem',
  },
  radii: {
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    rounded: '50%',
  },
  font: {
    family:
      "-apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xxs: '1.0rem',
      xs: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      md: '2.0rem',
      lg: '2.4rem',
      xl: '3.2rem',
      xxl: '4.4rem',
    },
    weight: {
      reg: 400,
      md: 500,
      bold: 700,
    },
  },

  colors: {
    brand: '#F57573',
    white: '#FFFFFF',
    blue: {
      900: '#617DE0',
      500: '#a1b2ed',
      400: '#b6c3f1',
      300: '#ccd5f5',
      200: '#e1e6f9',
      100: '#f6f8fd',
    },
    green: {
      900: '#2AC084',
    },
    gray: {
      900: '#1D2324',
      800: '#252E30',
      700: '#3C4A4D',
      600: '#566A6E',
      500: '#7F9599',
      400: '#A0B3B3',
      300: '#BCCACA',
      200: '#D9E0E0',
      100: '#F0F2F2',
    },
  },
  spacings: {
    xs: '0.4rem',
    base: '0.8rem',
    sm: '1.6rem',
    md: '2.4rem',
    lg: '3.2rem',
    xl: '6.4rem',
    xxl: '12.8rem',
  },
  transition: {
    base: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    fast: '0.15s ease-in-out',
  },
  elevation: {
    10: '0px 4px 10px rgba(0, 0, 0, 0.05)',
    30: '0px 4px 30px rgba(0, 0, 0, 0.08)',
  },
} as const;
