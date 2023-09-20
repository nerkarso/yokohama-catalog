import { defaultCatalogParams } from '@/utils/defaultCatalogParam';
import _sortBy from 'lodash/sortBy';
import { useQueryParams } from 'use-query-params';
import { usePagination } from '../hooks/usePagination';
import SkeletonVehicleCard from './SkeletonVehicleCard';
import VehicleCard from './VehicleCard';

export default function VehiclesGrid({ data = [], isLoading }: { data?: FilterResult[]; isLoading: boolean }) {
  const [query] = useQueryParams(defaultCatalogParams);
  const { firstItemNumber, lastItemNumber } = usePagination(data?.length, query.page);

  let items = _sortBy(data, 'Make', 'Brand', 'Year', 'OriginalSalePrice');
  items = items.slice(firstItemNumber - 1, lastItemNumber);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {(isLoading ? Array.from(new Array(8)) : items).map((item, index) => {
        if (isLoading) return <SkeletonVehicleCard key={index} />;
        return <VehicleCard data={item} key={item.VehicleId} />;
      })}
    </div>
  );
}
