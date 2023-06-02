'use client';

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

  return <VehiclesGrid data={data} isLoading={isLoading} />;
}
