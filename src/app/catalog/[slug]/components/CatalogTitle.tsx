'use client';

import MainHeading from '@/components/MainHeading';
import { useParams } from 'next/navigation';

export default function CatalogTitle() {
  const params = useParams();
  let slug = params?.slug ?? 'all';
  slug = slug.charAt(0).toUpperCase() + slug.substring(1);

  return <MainHeading>{slug} Stock</MainHeading>;
}
