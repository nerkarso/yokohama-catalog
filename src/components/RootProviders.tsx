'use client';

import { NextQueryParamAdapter } from '@/utils/NextQueryParamAdapter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryParamProvider } from 'use-query-params';

const queryClient = new QueryClient();

export default function RootProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryParamProvider adapter={NextQueryParamAdapter}>
        {children}
      </QueryParamProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
