import BookmarksList from '@/components/bookmarks/BookmarksList';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="px-4 py-8 md:py-12 container flex items-center">
      <div className="w-full flex-1 space-y-4 md:space-y-8">
        <h1 className="text-3xl font-bold leading-snug">Bookmarks</h1>
        <div className="md:hidden max-w-xs">
          <Illustration />
        </div>
        <div className="md:mt-8 sm:max-w-xs">
          <BookmarksList />
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
    <div className="aspect-[1/1] relative">
      <Image
        src="/car.png"
        fill
        className="object-center"
        alt=""
      />
    </div>
  );
}
