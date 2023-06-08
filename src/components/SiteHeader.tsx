import { navItems } from '@/config/nav';
import Image from 'next/image';
import NavItem from './NavItem';

export default function SiteHeader() {
  return (
    <header className="bg-white sticky top-0 border-b z-20 overflow-y-auto flex-shrink-0">
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
            <NavItem navItem={navItem} key={navItem.label} />
          ))}
        </div>
      </div>
    </header>
  );
}
