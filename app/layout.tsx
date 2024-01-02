import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsvCanvas from '@/components/main/StarBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My-Porfolio',
  description: 'My-Porfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <StarsvCanvas />
        {children}
      </body>
    </html>
  );
}
