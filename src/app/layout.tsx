import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { ReactNode } from 'react';
import { MockProvider } from '@/providers/MockProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MockProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </MockProvider>
      </body>
    </html>
  );
}