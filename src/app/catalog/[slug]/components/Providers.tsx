'use client';

import { NextQueryParamAdapter } from '@/utils/NextQueryParamAdapter';
import { QueryParamProvider } from 'use-query-params';

export default function Providers({ children }: Props) {
  return (
    <QueryParamProvider adapter={NextQueryParamAdapter}>
      {children}
    </QueryParamProvider>
  );
}
