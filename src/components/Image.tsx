'use client';

import NextImage from 'next/image';
import { useState } from 'react';

const emptyImageUrl = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/YokoImages/general/EmptyImage.jpg`;

export default function Image({ src, ...props }: any) {
  const [error, setError] = useState(false);

  return (
    <NextImage
      {...props}
      src={error ? emptyImageUrl : src}
      onError={() => setError(true)}
    />
  );
}
