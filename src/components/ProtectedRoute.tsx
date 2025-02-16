'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '../hooks/useUser';
import Loading from './Loading';
import { useEffect, useState } from 'react';
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    setIsClient(true);
    console.log('mounted');
  }, []);

  useEffect(
    function () {
      if (isClient && !isAuthenticated && !isLoading) router.replace('/login');
      console.log('2nd use effect');
    },
    [isClient, isAuthenticated, isLoading, router]
  );
  // IF BLACK SCREEN DELETE THIS LINE
  if (!isAuthenticated && !isClient) return null;

  if (isLoading) return <Loading />;

  return <> {children}</>;
};

export default ProtectedRoute;
