import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { ReactNode } from 'react';
import { MockProvider } from '@/providers/MockProvider';
import BaseView from '@/components/common/base-view/BaseView';
import { server } from '@/mocks/node';

const inter = Inter({ subsets: ['latin'] });

server.listen();
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
    <html lang={'en'}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <MockProvider>
          <ReduxProvider>
            <BaseView className={'items-center'}>
              <BaseView className={'w-3/5'}>{children}</BaseView>
            </BaseView>
          </ReduxProvider>
        </MockProvider>
      </body>
    </html>
  );
}
