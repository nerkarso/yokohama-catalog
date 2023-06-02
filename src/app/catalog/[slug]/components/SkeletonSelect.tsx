'use client';

import Skeleton from '@mui/material/Skeleton';

export default function SkeletonSelect() {
  return (
    <Skeleton animation="wave" variant="rounded" width="100%" height={56} />
  );
}
