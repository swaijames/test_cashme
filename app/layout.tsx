import React from 'react';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import './globals.css';
import ClientSideComponents from './utils/ClientSideComponents';

const inter = Inter({ subsets: ["latin"] });

// Dynamically import Navbar and Footer components
const Navbar = React.lazy(() => import('../components/Navbar'));
const Footer = React.lazy(() => import('../components/Footer'));

export const metadata = {
  title: "CashMe Tanzania",
  description: "An online marketplace for Invoice Discounting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <React.StrictMode>
            <ClientSideComponents>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Navbar />
              </React.Suspense>
              <main className="relative overflow-hidden">
                {children}
              </main>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Footer />
              </React.Suspense>
            </ClientSideComponents>
          </React.StrictMode>
        </MantineProvider>
      </body>
    </html>
  );
}
