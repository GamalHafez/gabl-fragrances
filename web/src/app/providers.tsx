'use client';

import { AuthProvider } from '@/context/auth/AuthProvider';
import { CartProvider } from '@/context/cart/CartProvider';
import { ThemeProvider } from '@/context/theme/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>{children}</CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
