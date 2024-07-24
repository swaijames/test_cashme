// app/layout.tsx

import { Inter } from "next/font/google";
import { MantineProvider } from '@mantine/core'; // Import MantineProvider
import './globals.css'; // Import global styles
import ClientSideComponents from './utils/ClientSideComponents'; // Import the client-side component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

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
        <MantineProvider> {/* Add MantineProvider here */}
          <ClientSideComponents>
            <Navbar />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <Footer />
          </ClientSideComponents>
        </MantineProvider>
      </body>
    </html>
  );
}
