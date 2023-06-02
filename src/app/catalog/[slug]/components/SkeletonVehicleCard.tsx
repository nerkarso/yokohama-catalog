'use client';

import Skeleton from '@mui/material/Skeleton';

export default function SkeletonVehicleCard() {
  return (
    <div className="inline-flex flex-col gap-2">
      <Skeleton animation="wave" variant="rounded" width="100%" height={180} />
      <Skeleton animation="wave" variant="rounded" width={40} height={20} />
      <Skeleton animation="wave" variant="rounded" width="60%" height={20} />
      <Skeleton animation="wave" variant="rounded" width="30%" height={20} />
    </div>
  );
}
