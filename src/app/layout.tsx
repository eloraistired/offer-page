import type { Metadata } from 'next';
import { Anek_Bangla, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anek_bangla = Anek_Bangla({ subsets: ['bengali'] });

export const metadata: Metadata = {
  title: 'Funnel Liner Offer',
};

const font = { fontFamily: `${inter.style.fontFamily}, ${anek_bangla.style.fontFamily}` };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={font}>{children}</body>
    </html>
  );
}
