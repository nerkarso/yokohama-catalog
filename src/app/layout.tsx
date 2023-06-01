import RootProviders from '@/components/RootProviders';
import './globals.css';

import SiteHeader from '@/components/SiteHeader';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yokohama Catalog',
  description:
    'Get the Best Deals on Used Cars for Sale Near You | Yokohama Trading Suriname',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
        <RootProviders>
          <SiteHeader />
          <main>{children}</main>
        </RootProviders>
      </body>
    </html>
  );
}
