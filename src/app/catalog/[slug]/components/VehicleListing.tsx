'use client';

import { Alert } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useVehicleListing } from '../hooks/vehicleListing';
import VehicleGrid from './VehicleGrid';

export default function VehicleListing() {
  const searchParams = useSearchParams();
  const { data, isLoading, refetch } = useVehicleListing();

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (!isLoading && !data?.length) {
    return <Alert severity="info">No results found</Alert>;
  }

  return <VehicleGrid data={data} isLoading={isLoading} />;
}
