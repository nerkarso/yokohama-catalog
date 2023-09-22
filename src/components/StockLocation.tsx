'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRightTwoTone';
import Link from 'next/link';

export default function StockLocation({ item }: { item: any }) {
  return (
    <Link
      href={item.url}
      className="p-4 md:p-6 border dark:border-base-800 rounded-xl flex gap-2 items-center hover:border-primary-700 dark:hover:border-primary-600 hover:ring-4 transition justify-between group"
    >
      <span className="text-lg font-medium text-primary-800 dark:text-primary-600">{item.label}</span>
      <ChevronRightIcon color="primary" className="flex-shrink-0 group-hover:translate-x-1 transition" />
    </Link>
  );
}
