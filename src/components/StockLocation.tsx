'use client';

import ChevronRightTwoTone from '@mui/icons-material/ChevronRightTwoTone';
import Link from 'next/link';

export default function StockLocation({ item }: { item: any }) {
  return (
    <Link
      href={item.url}
      className="p-4 md:p-6 border rounded-xl flex gap-2 items-center hover:border-primary-700 hover:ring-4 transition justify-between group"
    >
      <span className="text-lg font-medium text-primary-800">{item.label}</span>
      <ChevronRightTwoTone
        color="primary"
        className="flex-shrink-0 group-hover:translate-x-1 transition"
      />
    </Link>
  );
}
