'use client';

import Select from '@/components/Select';
import { defaultCatalogParams } from '@/utils/defaultCatalogParam';
import transformOptions from '@/utils/transformOptions';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from '@mui/material/Select';
import { useQuery } from '@tanstack/react-query';
import { useQueryParams } from 'use-query-params';
import { getMasterFilters } from '../actions';
import SkeletonSelect from './SkeletonSelect';

export default function MasterFiltersToolbar() {
  const [query, setQuery] = useQueryParams(defaultCatalogParams);

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setQuery({ [name]: value === '' ? undefined : value, page: '1' });
  };

  const clearFilters = () => {
    setQuery({ stock: query.stock }, 'replace');
  };

  const { data, isLoading } = useQuery({
    queryKey: ['masterFilters'],
    queryFn: () => getMasterFilters(query.stock as string),
    enabled: !!query.stock,
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2 mt-6">
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <Select
          hasNoneItem
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
          hasNoneItem
          options={transformOptions(
            data?.Item2 as any,
            'TypeId',
            'Type',
            'TypeId',
            true,
            (item) => item.MakeId == query.make
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
          hasNoneItem
          options={transformOptions(
            data?.Item4 as any,
            'Year',
            'Year',
            'Year',
            false,
            (item) => item.MakeId == query.make && item.TypeId == query.model
          )}
          name="year"
          label="Year"
          value={query.year ?? ''}
          onChange={handleSelectChange}
        />
      )}
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        // <Select
        //   options={transformOptions(
        //     data?.Item3 as any,
        //     'VehicleTypeId',
        //     'VehicleType',
        //     'VehicleTypeId',
        //     true
        //   )}
        //   name="vehicleType"
        //   label="Vehicle Type"
        //   value={query.vehicleType ?? ''}
        //   onChange={handleSelectChange}
        // />
        <Select
          options={[
            { value: '0-2147483647', label: 'All' },
            { value: '0-25000', label: '0 km - 25000 km' },
            { value: '25001-50000', label: '25001 km - 50000 km' },
            { value: '50001-100000', label: '50001 km - 100000 km' },
            { value: '100001-1000000000', label: 'More than 100000' },
          ]}
          name="mileage"
          label="Mileage"
          value={query.mileage ?? ''}
          onChange={handleSelectChange}
        />
      )}
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <div className="flex md:justify-end items-center">
          <Button onClick={clearFilters} variant="outlined">
            Clear
          </Button>
        </div>
      )}
    </div>
  );
}
