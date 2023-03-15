import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../lib';
import { AppProviderProps } from './types';
import { Theme } from './Theme';

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <Theme>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </Theme>
    </BrowserRouter>
  );
};
