'use client';

import ColorModeContext from '@/utils/colorModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4TwoTone';
import Brightness7Icon from '@mui/icons-material/Brightness7TwoTone';
import { IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';

export default function ThemeToggleButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}
