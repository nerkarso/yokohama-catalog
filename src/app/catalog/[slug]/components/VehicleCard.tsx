'use client';

import Image from '@/components/Image';
import { NOT_AVAILABLE, PRICE_UNAVAIABLE } from '@/config/constants';
import prettyPrice from '@/utils/prettyPrice';
import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import Link from 'next/link';

const IMAGE_BASE_URL = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/YokoImages/Suriname/VehicleImages`;

export default function VehicleCard({ data }: { data: FilterResult }) {
  const imageUrl = `${IMAGE_BASE_URL}/${data.VehicleId}/Front-${data.VehicleId}-Thumb.jpg`;

  const renderChips = () => {
    if (data.ReservationID === 1) {
      return <Chip label="Reserved" color="success" />;
    }
    if (data.ReservationID === 2) {
      return <Chip label="Sold" color="secondary" />;
    }
    return null;
  };

  return (
    <Link
      href={`/vehicles/${data.VehicleId}`}
      className="overflow-hidden rounded-lg bg-base-100 dark:bg-base-900 dark:hover:bg-base-800 hover:bg-base-200 transition flex flex-col"
    >
      <div className="relative">
        <div className="aspect-video relative">
          <Image src={imageUrl} className="object-cover object-center" alt="Image" fill />
        </div>
        <div className="absolute top-0 left-0 m-2">{renderChips()}</div>
      </div>
      <div className="flex items-start flex-col gap-2 p-3 flex-1">
        {data.Year && <h6 className="text-base-500 text-sm font-medium">{data.Year}</h6>}
        {data.Make && (
          <h4 className="text-sm sm:text-base font-medium">
            {data.Make} - {data.Brand}
          </h4>
        )}
        {data.OriginalSalePrice && (
          <p
            className={clsx(
              'font-semibold text-xs sm:text-sm mt-auto',
              [NOT_AVAILABLE, PRICE_UNAVAIABLE].includes(prettyPrice(data.OriginalSalePrice))
                ? 'text-yellow-800 dark:text-yellow-600'
                : 'text-primary-800 dark:text-primary-600'
            )}
          >
            {prettyPrice(data.OriginalSalePrice)}
          </p>
        )}
      </div>
    </Link>
  );
}
