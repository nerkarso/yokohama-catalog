import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  const navItems = [
    {
      label: 'Japan Stock',
      url: '/catalog/japan?stock=1',
    },
    {
      label: 'Sailing Stock',
      url: '/catalog/sailing?stock=2',
    },
    {
      label: 'Suriname Stock',
      url: '/catalog/suriname?stock=3',
    },
  ];

  return (
    <header className="bg-white sticky top-0 border-b shadow-sm z-20 overflow-y-auto">
      <div className="flex gap-4 px-4 h-16 items-center container">
        <div className="flex-shrink-0 h-12 w-12 md:w-52 relative">
          <Image
            src="http://cdn2-5e15.kxcdn.com/yoko/YokoImages/general/logo.png"
            alt="Logo"
            fill
            className="object-cover object-left"
          />
        </div>
        <div className="ml-auto flex gap-2">
          {navItems.map((navItem) => (
            <Link
              href={navItem.url}
              key={navItem.label}
              className="text-blue-900 px-2 py-1 transition hover:bg-primary-50 rounded-md whitespace-nowrap"
            >
              {navItem.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
