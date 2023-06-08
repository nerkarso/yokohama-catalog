'use client';

import { defaultCatalogParams } from '@/utils/defaultCatalogParam';
import { Skeleton } from '@mui/material';
import { useQueryParams } from 'use-query-params';

export default function VehiclesGridResults({
  data = [],
  isLoading,
}: {
  data?: FilterResult[];
  isLoading: boolean;
}) {
  const [query] = useQueryParams(defaultCatalogParams);
  const currentPage = query.page || '1';
  const totalPages = 20;

  return (
    <div className="mb-8 -mt-4">
      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rounded"
          width="100%"
          height={24}
          className="max-w-xs"
        />
      ) : (
        <p className="text-base-500 text-sm">
          Showing page {currentPage} of {totalPages} with {data?.length ?? 0}{' '}
          results
        </p>
      )}
    </div>
  );
}
