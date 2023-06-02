import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { PartialLocation, QueryParamAdapterComponent } from 'use-query-params';

export const NextQueryParamAdapter: QueryParamAdapterComponent = ({
  children,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const adapter = useMemo(() => {
    return {
      replace(location: PartialLocation) {
        router.replace(pathname + location.search);
      },
      push(location: PartialLocation) {
        router.push(pathname + location.search);
      },
      get location() {
        return {
          search: searchParams.toString(),
        };
      },
    };
  }, [router, pathname, searchParams]);

  return children(adapter);
};
