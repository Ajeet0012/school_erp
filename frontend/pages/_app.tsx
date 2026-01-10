/**
 * Next.js App Component
 * Wraps all pages with global providers and layouts
 */

import type { AppProps } from 'next/app';
import '../app/globals.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
