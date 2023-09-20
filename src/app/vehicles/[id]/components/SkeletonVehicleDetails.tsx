'use client';

import Skeleton from '@mui/material/Skeleton';

export default function SkeletonVehicleDetails() {
  return (
    <>
      <div className="max-w-md flex flex-col gap-2">
        <Skeleton animation="wave" variant="rounded" width="100%" height={40} />
        <Skeleton animation="wave" variant="rounded" width={128} height={28} />
      </div>
      <div className="flex mt-6 flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <Skeleton animation="wave" variant="rounded" width="100%" height={360} />
        </div>
        <div className="lg:max-w-sm flex-1">
          <Skeleton animation="wave" variant="rounded" width="100%" height={360} />
        </div>
      </div>
    </>
  );
}
