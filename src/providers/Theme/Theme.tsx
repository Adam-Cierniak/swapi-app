import { useState } from 'react';
import { AppProviderProps } from '../types';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    background: {
      paper: '#ffffff',
      default: '#e0e0e0',
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export const Theme = ({ children }: AppProviderProps) => {
  const [light, setLight] = useState(true);
  return (
    <>
      <ThemeProvider theme={light ? themeLight : themeDark}>{children}</ThemeProvider>
    </>
  );
};
