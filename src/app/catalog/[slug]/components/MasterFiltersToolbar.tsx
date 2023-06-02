'use client';

import Select from '@/components/Select';
import { defaultCatalogParams } from '@/utils/defaultCatalogParam';
import transformOptions from '@/utils/transformOptions';
import { SelectChangeEvent } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useQueryParams } from 'use-query-params';
import { getMasterFilters } from '../actions';
import SkeletonSelect from './SkeletonSelect';

export default function MasterFiltersToolbar() {
  const [query, setQuery] = useQueryParams(defaultCatalogParams);

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setQuery({ [name]: value === '' ? undefined : value });
  };

  const { data, isLoading } = useQuery({
    queryKey: ['masterFilters'],
    queryFn: () => getMasterFilters(query.stock as string),
    enabled: !!query.stock,
  });

  return (
    <div className="mt-6 flex gap-2 flex-wrap">
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <Select
          options={transformOptions(
            data?.Item1 as any,
            'MakeId',
            'Make',
            'MakeId',
            true
          )}
          name="make"
          label="Make"
          value={query.make ?? ''}
          onChange={handleSelectChange}
        />
      )}
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <Select
          options={transformOptions(
            data?.Item2 as any,
            'TypeId',
            'Type',
            'TypeId',
            true
          )}
          name="model"
          label="Model"
          value={query.model ?? ''}
          onChange={handleSelectChange}
        />
      )}
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <Select
          options={transformOptions(
            data?.Item3 as any,
            'VehicleTypeId',
            'VehicleType',
            'VehicleTypeId',
            true
          )}
          name="vehicleType"
          label="Vehicle Type"
          value={query.vehicleType ?? ''}
          onChange={handleSelectChange}
        />
      )}
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <Select
          options={transformOptions(data?.Item4 as any, 'Year', 'Year', 'Year')}
          name="year"
          label="Year"
          value={query.year ?? ''}
          onChange={handleSelectChange}
        />
      )}
    </div>
  );
}
