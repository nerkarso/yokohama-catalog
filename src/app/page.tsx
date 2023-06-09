import StockLocation from '@/components/StockLocation';
import { navItems } from '@/config/nav';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="px-4 py-8 md:py-12 container flex items-center">
      <div className="flex-1 space-y-4 md:space-y-8">
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-600 leading-snug">
          Choose your stock location
        </h1>
        <div className="md:hidden max-w-xs">
          <Illustration />
        </div>
        <div className="flex gap-4 flex-col md:mt-8 max-w-xs">
          {navItems.map((navItem) => (
            <StockLocation key={navItem.label} item={navItem} />
          ))}
        </div>
      </div>
      <div className="hidden flex-1 md:block">
        <Illustration />
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <div className="aspect-[4/3] relative">
      <Image
        src="https://minimals.cc/assets/illustrations/illustration_dashboard.png"
        fill
        className="object-center"
        alt=""
      />
    </div>
  );
}
