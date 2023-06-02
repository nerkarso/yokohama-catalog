import './globals.css';

import RootProviders from '@/components/RootProviders';
import SiteHeader from '@/components/SiteHeader';
import { Work_Sans } from 'next/font/google';

const fontFamily = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Yokohama Catalog',
  description:
    'Get the Best Deals on Used Cars for Sale Near You | Yokohama Trading Suriname',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${fontFamily.className}`}>
        <RootProviders>
          <SiteHeader />
          <main>{children}</main>
        </RootProviders>
      </body>
    </html>
  );
}
