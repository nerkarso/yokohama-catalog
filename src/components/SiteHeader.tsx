import { navItems } from '@/config/nav';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';

export default function SiteHeader() {
  return (
    <header className="bg-white dark:bg-black dark:text-white dark:border-base-800 sticky top-0 border-b z-20 overflow-y-auto flex-shrink-0">
      <div className="flex gap-4 px-4 h-16 items-center container">
        <Link href="/" className="flex-shrink-0 h-12 w-12 md:w-52 relative">
          <Image
            src="http://cdn2-5e15.kxcdn.com/yoko/YokoImages/general/logo.png"
            alt="Logo"
            fill
            className="object-cover object-left dark:invert dark:grayscale"
          />
        </Link>
        <div className="ml-auto flex gap-2 items-center">
          {navItems.map((navItem) => (
            <NavItem navItem={navItem} key={navItem.label} />
          ))}
        </div>
      </div>
    </header>
  );
}
