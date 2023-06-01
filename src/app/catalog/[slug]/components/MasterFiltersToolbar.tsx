'use client';

import Combobox from '@/components/Combobox';
import transformOptions from '@/utils/transformOptions';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { getMasterFilters } from '../actions';

export default function MasterFiltersToolbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const stockLocationId = searchParams.get('stock');

  const { data, isLoading } = useQuery({
    queryKey: ['masterFilters'],
    queryFn: () => getMasterFilters(stockLocationId || '1'),
    enabled: !!stockLocationId,
  });

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleComboboxChange = (param: string, value: any) => {
    if (!value) return;
    router.push(pathname + '?' + createQueryString(param, value));
  };

  if (isLoading) return null;

  return (
    <div className="mt-4 flex gap-2 flex-wrap">
      <Combobox
        options={transformOptions(
          data?.Item1 as any,
          'MakeId',
          'Make',
          'MakeId',
          true
        )}
        label="Make"
        onChange={(event, newValue) =>
          handleComboboxChange('make', newValue?.id)
        }
      />
      <Combobox
        options={transformOptions(
          data?.Item2 as any,
          'TypeId',
          'Type',
          'TypeId',
          true
        )}
        label="Model"
        onChange={(event, newValue) =>
          handleComboboxChange('model', newValue?.id)
        }
      />
      <Combobox
        options={transformOptions(
          data?.Item3 as any,
          'VehicleTypeId',
          'VehicleType',
          'VehicleTypeId',
          true
        )}
        label="Vehicle Type"
        onChange={(event, newValue) =>
          handleComboboxChange('vehicleType', newValue?.id)
        }
      />
      <Combobox
        options={transformOptions(data?.Item4 as any, 'Year', 'Year', 'Year')}
        label="Year"
        onChange={(event, newValue) =>
          handleComboboxChange('year', newValue?.id)
        }
      />
    </div>
  );
}
