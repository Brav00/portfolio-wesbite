import type { Metadata } from 'next';
import { DM_Sans, Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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

export const metadata: Metadata = {
  title: 'Ahmer Mehmood — SEO, GTM, and outbound consultant',
  description:
    '15+ years helping home services and B2B companies grow through SEO, GTM strategy, and outbound programmes. 9+ documented case studies.',
  openGraph: {
    title: 'Ahmer Mehmood — SEO, GTM, and outbound consultant',
    description:
      '15+ years helping home services and B2B companies grow through SEO, GTM strategy, and outbound programmes.',
    url: 'https://ahmermehmood.vercel.app',
    siteName: 'Ahmer Mehmood',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
