'use client';

import { Chip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_BASE_URL =
  'http://cdn2-5e15.kxcdn.com/yoko/YokoImages/Suriname/VehicleImages';

export default function VehicleCard({ data }: { data: FilterResult }) {
  const imageUrl = `${IMAGE_BASE_URL}/${data.VehicleId}/Front-${data.VehicleId}-Thumb.jpg`;

  return (
    <Link
      href={`/vehicles/${data.VehicleId}`}
      className="overflow-hidden rounded-lg bg-base-100 hover:bg-base-200 transition"
    >
      <div className="aspect-video relative">
        <Image
          src={imageUrl}
          className="object-cover object-center"
          alt="Image"
          fill
        />
      </div>
      <div className="p-3">
        {data.Year && <Chip label={data.Year} size="small" />}
        {data.Make && (
          <h4 className="mt-2 text-primary-900">
            {data.Make} - {data.Brand}
          </h4>
        )}
        {data.SalePrice && (
          <p className="text-red-700 font-semibold text-sm mt-1">
            {data.SalePrice.includes('$0.00') ? 'N/A' : data.SalePrice}
          </p>
        )}
      </div>
    </Link>
  );
}
