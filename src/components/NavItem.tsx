'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItem({
  navItem,
}: {
  navItem: { label: string; url: string };
}) {
  const pathname = usePathname();
  const isActive = navItem.url.includes(pathname);

  return (
    <Link
      href={navItem.url}
      className={clsx(
        'text-base-500 px-2 py-1 transition hover:bg-base-100 rounded-md whitespace-nowrap font-medium',
        isActive && '!text-primary-900'
      )}
    >
      {navItem.label}
    </Link>
  );
}
