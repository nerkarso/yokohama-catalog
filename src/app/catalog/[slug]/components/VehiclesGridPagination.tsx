'use client';

import { DEFAULT_PAGE_LIMIT } from '@/config/constants';
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
  const wrapperClassName = 'flex justify-center mt-8';
  const [query, setQuery] = useQueryParams(defaultCatalogParams);

  if (isLoading) {
    return (
      <div className={wrapperClassName}>
        <Skeleton height={40} width="100%" className="max-w-xs" />
      </div>
    );
  }

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setQuery({ page: String(page) });
  };

  const totalPages = Math.ceil(data.length / DEFAULT_PAGE_LIMIT);

  return (
    <div className={wrapperClassName}>
      <Pagination
        count={totalPages}
        page={+(query.page || '1')}
        onChange={handleChange}
        size="large"
        siblingCount={2}
        boundaryCount={2}
      />
    </div>
  );
}
