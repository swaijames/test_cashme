import { Inter } from "next/font/google";
import './globals.css'; // Import metadata
import ClientSideComponents from './utils/ClientSideComponents'; // Import the client-side component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = { // Export metadata here
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
        <ClientSideComponents>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </ClientSideComponents>
      </body>
    </html>
  );
}
