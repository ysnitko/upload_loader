import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'upload-loader',
  description: 'upload loader',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} ${inter} antialiased bg-clr_6`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
