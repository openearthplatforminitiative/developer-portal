import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/app/components/NavBar';
import { ReactNode } from 'react';
import ThemeRegistry from '@/app/components/ThemeRegistry';
import Footer from '@/app/components/Footer';
import HelpButton from '@/app/components/HelpButton';

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'OpenEPI | Developer portal',
  description: 'Developer portal for the OpenEPI data platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <ThemeRegistry options={{ key: 'mui' }}>
        <body className='min-h-screen flex flex-col justify-between'>
          <NavBar />
          <main className='w-full flex justify-center'>{children}</main>
          <HelpButton />
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
