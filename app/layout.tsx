import type { Metadata } from 'next';
import { DM_Sans, Lora, Sora, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400'],
  display: 'swap',
});

// Site typography: Sora headings (font-gtm-heading), Geist body (font-gtm-body), Geist Mono labels (font-gtm-mono). DM Sans is kept for the logo.
const sora = Sora({ variable: '--font-sora', subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });
const geist = Geist({ variable: '--font-geist', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], weight: ['500'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Ahmer Mehmood — GTM Engineer | Cold Email & Outbound Systems',
  description:
    'GTM engineer building pipeline for B2B companies through cold email, data enrichment and automation. 6 years in growth and outbound, with documented case studies and results.',
  openGraph: {
    title: 'Ahmer Mehmood — GTM Engineer | Cold Email & Outbound Systems',
    description:
      'GTM engineer building pipeline for B2B companies through cold email, data enrichment and automation. 6 years in growth and outbound, with documented case studies and results.',
    url: 'https://ahmermehmood.vercel.app',
    siteName: 'Ahmer Mehmood',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} ${sora.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col font-gtm-body">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
