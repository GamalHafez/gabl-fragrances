'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from '@/services/auth/auth.service';
import { useAuth } from '@/context/auth/useAuth';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const { setUser } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setUser(null);
      queryClient.clear();
      router.push('/');
    },
  });
};
