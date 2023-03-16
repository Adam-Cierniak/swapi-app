import { useState } from 'react';
import { AppProviderProps } from '../types';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  return (
    <>
      <ThemeProvider theme={themeDark}>{children}</ThemeProvider>
    </>
  );
};
