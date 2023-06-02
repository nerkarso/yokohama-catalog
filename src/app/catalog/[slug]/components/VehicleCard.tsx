'use client';

import { Chip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_BASE_URL = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/YokoImages/Suriname/VehicleImages`;

export default function VehicleCard({ data }: { data: FilterResult }) {
  const imageUrl = `${IMAGE_BASE_URL}/${data.VehicleId}/Front-${data.VehicleId}-Thumb.jpg`;

  return (
    <Link
      href={`/vehicles/${data.VehicleId}`}
      className="overflow-hidden rounded-lg bg-base-100 hover:bg-base-200 transition flex flex-col"
    >
      <div className="aspect-video relative">
        <Image
          src={imageUrl}
          className="object-cover object-center"
          alt="Image"
          fill
        />
      </div>
      <div className="flex items-start flex-col gap-2 p-3 flex-1">
        {data.Year && <Chip label={data.Year} size="small" color="primary" />}
        {data.Make && (
          <h4 className="text-sm sm:text-base font-medium">
            {data.Make} - {data.Brand}
          </h4>
        )}
        {data.SalePrice && (
          <p className="text-secondary-700 font-semibold text-xs sm:text-sm mt-auto">
            {data.SalePrice.includes('$0.00') ? 'N/A' : data.SalePrice}
          </p>
        )}
      </div>
    </Link>
  );
}
