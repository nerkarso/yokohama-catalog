'use client';

import Image from '@/components/Image';
import useEmblaCarousel from 'embla-carousel-react';

export default function PhotoCarousel({ vehicleId }: { vehicleId: string }) {
  const [emblaRef] = useEmblaCarousel();

  const carImageUrl = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}/YokoImages/Suriname/VehicleImages`;
  const slides = [
    `${carImageUrl}/${vehicleId}/Front-${vehicleId}-Medium.Jpg`,
    `${carImageUrl}/${vehicleId}/Rear-${vehicleId}-Medium.Jpg`,
    `${carImageUrl}/${vehicleId}/left-${vehicleId}-Medium.Jpg`,
    `${carImageUrl}/${vehicleId}/Right-${vehicleId}-Medium.Jpg`,
    `${carImageUrl}/${vehicleId}/Int1-${vehicleId}-Medium.Jpg`,
    `${carImageUrl}/${vehicleId}/Int2-${vehicleId}-Medium.Jpg`,
    `${carImageUrl}/${vehicleId}/Int3-${vehicleId}-Medium.Jpg`,
    `${carImageUrl}/${vehicleId}/Int4-${vehicleId}-Medium.Jpg`,
  ];

  return (
    <div
      className="rounded-xl overflow-hidden bg-base-100 dark:bg-base-900"
      ref={emblaRef}
    >
      <div className="flex">
        {slides.map((slide, i) => (
          <div
            className="min-w-0 basis-full flex-shrink-0 flex-grow-0 relative aspect-[4/3]"
            key={i}
          >
            <Image src={slide} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
