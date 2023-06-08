'use client';

import { Skeleton } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useVehicleListing } from '../hooks/vehicleListing';
import VehiclesGrid from './VehiclesGrid';

export default function VehiclesContainer() {
  const searchParams = useSearchParams();
  const { data, isLoading, refetch } = useVehicleListing();

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (!isLoading && !data?.length) {
    return <Alert severity="info">No results found</Alert>;
  }

  return (
    <>
      <div className="mb-8 -mt-4">
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={200}
            height={24}
          />
        ) : (
          <p className="text-base-500">Showing {data?.length ?? 0} results</p>
        )}
      </div>
      <VehiclesGrid data={data} isLoading={isLoading} />
    </>
  );
}
