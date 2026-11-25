'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/auth/useAuth';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') ?? '/profile';

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.replace(redirectTo.startsWith('/') ? redirectTo : '/profile');
    }
  }, [isAuthenticated, redirectTo, isLoading, router]);

  if (!isAuthenticated || isLoading) return null;

  return <>{children}</>;
}
