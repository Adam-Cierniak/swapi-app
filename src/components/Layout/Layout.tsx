import { Outlet } from 'react-router';
import { AppBars } from '../AppBar';
import { Container } from '@mui/material';

export const Layout = (): JSX.Element => {
  return (
    <>
      <AppBars />
      <Outlet />
    </>
  );
};
