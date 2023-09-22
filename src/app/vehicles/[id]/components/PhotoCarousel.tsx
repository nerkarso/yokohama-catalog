'use client';

import Image from '@/components/Image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightIcon from '@mui/icons-material/ChevronRightTwoTone';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export default function PhotoCarousel({ vehicleId }: { vehicleId: string }) {
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

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});

  const mainScrollPrev = useCallback(() => emblaMainApi && emblaMainApi.scrollPrev(), [emblaMainApi]);
  const mainScrollNext = useCallback(() => emblaMainApi && emblaMainApi.scrollNext(), [emblaMainApi]);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  // const thumbsScrollPrev = useCallback(() => emblaThumbsApi && emblaThumbsApi.scrollPrev(), [emblaThumbsApi]);
  // const thumbsScrollNext = useCallback(() => emblaThumbsApi && emblaThumbsApi.scrollNext(), [emblaThumbsApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  const isSlideFirst = selectedIndex === 0;
  const isSlideLast = selectedIndex === slides.length - 1;

  return (
    <>
      <div className="relative">
        <div ref={emblaMainRef} className="rounded-xl overflow-hidden bg-base-100 dark:bg-base-900">
          <div className="flex">
            {slides.map((slide, i) => (
              <div className="min-w-0 basis-full flex-shrink-0 flex-grow-0 relative aspect-[4/3]" key={i}>
                <Image src={slide} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        {!isSlideFirst && <ControlButton direction="left" onClick={mainScrollPrev} />}
        {!isSlideLast && <ControlButton direction="right" onClick={mainScrollNext} />}
      </div>
      <div ref={emblaThumbsRef} className="overflow-hidden p-1 mt-4">
        <div className="flex gap-4">
          {slides.map((slide, i) => (
            <div className="flex-shrink-0 flex-grow-0 basis-1/3 md:basis-1/4" key={i}>
              <button
                className={clsx(
                  'block w-full cursor-pointer relative aspect-[4/3] bg-base-100 dark:bg-base-900 rounded-lg overflow-hidden transition',
                  {
                    'ring-2 ring-offset-2 ring-primary-600 dark:ring-offset-black': i === selectedIndex,
                  }
                )}
                type="button"
                onClick={() => onThumbClick(i)}
              >
                <Image src={slide} className="object-cover" alt="" fill />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const ControlButton: React.FC<{ direction: 'left' | 'right'; [key: string]: unknown }> = ({ direction, ...props }) => {
  const directionConfig = {
    left: {
      className: '-left-3',
      icon: ChevronLeftIcon,
    },
    right: {
      className: '-right-3',
      icon: ChevronRightIcon,
    },
  }[direction];

  const Icon = directionConfig.icon;

  return (
    <div className={clsx('flex items-center absolute top-0 h-full', directionConfig.className)}>
      <button
        className="rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center w-8 h-8 shadow transition ring-1 ring-black/5"
        type="button"
        {...props}
      >
        <Icon />
      </button>
    </div>
  );
};
