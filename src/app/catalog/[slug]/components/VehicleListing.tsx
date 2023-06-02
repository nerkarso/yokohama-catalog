'use client';

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

  if (isLoading) return null;

  if (!data) return null;

  return <VehicleGrid data={data} />;
}
