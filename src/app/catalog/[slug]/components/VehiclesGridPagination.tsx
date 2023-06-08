'use client';

import { defaultCatalogParams } from '@/utils/defaultCatalogParam';
import { Pagination, Skeleton } from '@mui/material';
import { useQueryParams } from 'use-query-params';

export default function VehiclesGridPagination({
  data = [],
  isLoading,
}: {
  data?: FilterResult[];
  isLoading: boolean;
}) {
  const [query, setQuery] = useQueryParams(defaultCatalogParams);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setQuery({ page: String(page) });
  };

  // const totalCount = data.length;

  return (
    <div className="flex justify-center mt-8">
      {isLoading ? (
        <Skeleton height={40} width="100%" className="max-w-xs" />
      ) : (
        <Pagination
          count={20}
          page={+(query.page || '1')}
          onChange={handleChange}
          size="large"
          siblingCount={2}
          boundaryCount={2}
        />
      )}
    </div>
  );
}
