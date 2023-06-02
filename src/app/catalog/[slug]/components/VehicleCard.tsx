'use client';

import { Chip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_BASE_URL = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/YokoImages/Suriname/VehicleImages`;

export default function VehicleCard({ data }: { data: FilterResult }) {
  const imageUrl = `${IMAGE_BASE_URL}/${data.VehicleId}/Front-${data.VehicleId}-Thumb.jpg`;

  const renderChips = () => {
    if (data.ReservationID === 2) {
      return <Chip label="Sold" color="secondary" />;
    }
    return null;
  };

  return (
    <Link
      href={`/vehicles/${data.VehicleId}`}
      className="overflow-hidden rounded-lg bg-base-100 hover:bg-base-200 transition flex flex-col"
    >
      <div className="relative">
        <div className="aspect-video relative">
          <Image
            src={imageUrl}
            className="object-cover object-center"
            alt="Image"
            fill
          />
        </div>
        <div className="absolute top-0 left-0 m-2">{renderChips()}</div>
      </div>
      <div className="flex items-start flex-col gap-2 p-3 flex-1">
        {data.Year && (
          <h6 className="text-base-500 text-sm font-medium">{data.Year}</h6>
        )}
        {data.Make && (
          <h4 className="text-sm sm:text-base font-medium">
            {data.Make} - {data.Brand}
          </h4>
        )}
        {data.OriginalSalePrice && (
          <p className="text-primary-800 font-semibold text-xs sm:text-sm mt-auto">
            {data.OriginalSalePrice.replace('$0.00', 'Price unavailable')}
          </p>
        )}
      </div>
    </Link>
  );
}
