import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // TODO: Change it
  title: {
    default: 'Gabal Fragrances',
    template: '%s | Gabal Fragrances',
  },
  description: 'A real description of what you sell, in one or two sentences.',
  openGraph: { title: 'Gabal Fragrances', images: ['/og.png'] },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${rubik.variable} scroll-smooth scroll-p-32 h-full antialiased`}
    >
      <body className='min-h-full relative flex flex-col'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
