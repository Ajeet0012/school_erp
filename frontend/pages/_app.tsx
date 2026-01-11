import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';
import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
  console.log('[App] Rendering');
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
