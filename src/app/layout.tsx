import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif' 
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-display' 
});

export const metadata: Metadata = {
  title: 'Puglia Compliance | Holiday Rental Compliance Service',
  description: 'Make your holiday home in Puglia fully compliant with the new CIA mandate. We handle everything from registration to tax consulting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className="min-h-screen selection:bg-olive-200 selection:text-olive-900">
        {children}
      </body>
    </html>
  );
}
