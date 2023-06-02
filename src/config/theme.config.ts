import { createTheme } from '@mui/material';
import siteConfig from './site.config.mjs';

const themeConfig = createTheme({
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
  },
});

export default themeConfig;
