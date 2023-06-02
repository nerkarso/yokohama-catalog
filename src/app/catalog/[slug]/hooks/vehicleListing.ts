import { defaultCatalogParams } from '@/utils/defaultCatalogParam';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useQueryParams } from 'use-query-params';
import { getFilterResults } from '../actions';

export function useVehicleListing(
  queryOptions?: Pick<UseQueryOptions, 'enabled'>
) {
  const [query] = useQueryParams(defaultCatalogParams);

  return useQuery({
    queryKey: ['vehicleListing'],
    queryFn: () =>
      getFilterResults({
        CarId: '0',
        Range: '111-10000000',
        TypeId: query.vehicleType ?? '0',
        CarStatus: query.stock ?? '0',
        Make: query.make ?? '0',
        Brand: query.model ?? '0',
        Year: query.year ?? '0',
        PageNo: '1',
        PriceRange: 'undefined',
      }),
    ...queryOptions,
  });
}
