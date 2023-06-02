'use client';

import { useParams } from 'next/navigation';

export default function CatalogTitle() {
  const params = useParams();
  let slug = params?.slug ?? 'all';
  slug = slug.charAt(0).toUpperCase() + slug.substring(1);

  return (
    <h1 className="text-4xl font-semibold text-primary-900">{slug} Stock</h1>
  );
}
