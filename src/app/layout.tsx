import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { TooltipProvider } from './components/ui/tooltip';
import './globals.css';
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_URL,
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from './lib/metadata';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  // https://beta.nextjs.org/docs/api-reference/metadata#metadatabase
  metadataBase: new URL(APP_URL),

  applicationName: APP_NAME,
  authors: { name: 'Colin Hemphill' },
  creator: 'Colin Hemphill',
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  openGraph: metadataOpenGraphDefaults,
  icons: [],
  keywords: [
    'plato’s rave',
    'game',
    'text adventure',
    'bigger than time',
    'mbmbam',
    'podcast',
    'my brother my brother and me',
    'mcelroy',
  ],
  publisher: 'Colin Hemphill',
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  twitter: metadataTwitterDefaults,
  viewport: { width: 'device-width', initialScale: 1 },
};

export default function App({ children }: PropsWithChildren) {
  return (
    <html className={jetbrainsMono.variable} lang="en">
      <body className="dark bg-neutral-1 py-12 text-neutral-12 selection:bg-primary-11/80 selection:text-neutral-1">
        <TooltipProvider>
          <div className="container max-w-screen-xl">{children}</div>
        </TooltipProvider>
      </body>

      <Analytics />
    </html>
  );
}
