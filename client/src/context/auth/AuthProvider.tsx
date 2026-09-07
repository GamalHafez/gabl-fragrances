import { authService } from "@/services/auth/auth.service";
import type { User } from "@shared/types";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  isLoading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
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
    return; // TODO: To be Eddited
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
