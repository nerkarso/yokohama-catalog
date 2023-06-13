import siteConfig from './site.config.mjs';

const themeConfig = {
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    primary: {
      main: siteConfig.colors.primary[800],
    },
    secondary: {
      main: siteConfig.colors.secondary[700],
    },
    info: {
      main: siteConfig.colors.primary[800],
    },
  },
};

export default themeConfig;
