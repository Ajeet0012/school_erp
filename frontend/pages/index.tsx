/**
 * Root page - redirects to public home
 */

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/public/home');
  }, [router]);

  return null;
}
