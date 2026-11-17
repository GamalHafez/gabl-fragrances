'use client';
import { AuthLoadingScreen } from '@/components/auth/common';
import { authService } from '@/services/auth/auth.service';
import { User } from '@/types';
import { PersonalInfoType } from '@/types/user';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext<{
  user: User | PersonalInfoType | null;
  setUser: (user: User | PersonalInfoType | null) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  isLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | PersonalInfoType | null>(null);
  const isAuthenticated = user !== null;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const user = await authService.getCurrentUser();
        setUser(user);
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, []);

  if (isLoading) {
    return <AuthLoadingScreen />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
