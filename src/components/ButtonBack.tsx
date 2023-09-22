'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBackTwoTone';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';

export default function ButtonBack() {
  const router = useRouter();

  return (
    <IconButton className="flex-shrink-0" onClick={router.back} color="primary">
      <ArrowBackIcon />
    </IconButton>
  );
}
