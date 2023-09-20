'use client';

import { Chip } from '@mui/material';

export default function VehicleStatusChip({ value, ...props }: { value: number | string; size?: 'small' }) {
  if (value == 1) {
    return <Chip label="Reserved" color="success" {...props} />;
  }

  if (value == 2) {
    return <Chip label="Sold" color="secondary" {...props} />;
  }

  return null;
}
