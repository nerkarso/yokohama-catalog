'use client';

import { defaultCatalogParams } from '@/utils/defaultCatalogParam';
import { Skeleton } from '@mui/material';
import { useQueryParams } from 'use-query-params';
import { usePagination } from '../hooks/usePagination';

export default function VehiclesGridResults({ data = [], isLoading }: { data?: FilterResult[]; isLoading: boolean }) {
  const [query] = useQueryParams(defaultCatalogParams);
  const { totalItems, firstItemNumber, lastItemNumber } = usePagination(data?.length, query.page);

  return (
    <div className="mb-8 -mt-4">
      {isLoading ? (
        <Skeleton animation="wave" variant="rounded" width="100%" height={24} className="max-w-xs" />
      ) : (
        <p className="text-base-500 text-sm">
          Showing {firstItemNumber} - {lastItemNumber} items of {totalItems} results
        </p>
      )}
    </div>
  );
}
