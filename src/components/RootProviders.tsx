'use client';

import themeConfig from '@/config/theme.config';
import { NextQueryParamAdapter } from '@/utils/NextQueryParamAdapter';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryParamProvider } from 'use-query-params';

export default function RootProviders({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <QueryParamProvider adapter={NextQueryParamAdapter}>
        <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
      </QueryParamProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
