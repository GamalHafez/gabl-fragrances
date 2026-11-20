'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useTheme } from '@/context/theme/useTheme';
import { useAuth } from '@/context/auth/useAuth';

const navLinkStyles = (isActive: boolean, isDark: boolean) =>
  clsx(
    'capitalize transition-colors duration-300 ease-in-out',
    isActive
      ? clsx(
          'relative font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:transition-all after:duration-300',
          isDark
            ? 'text-brand-300 hover:text-red-200'
            : 'text-brand-800 hover:text-brand-700',
        )
      : clsx(
          'relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full',
          isDark
            ? 'text-zinc-300 after:bg-brand-600 hover:after:bg-brand-400'
            : 'text-zinc-800 hover:text-zinc-950 after:bg-red-700 hover:after:bg-red-600',
        ),
  );

export const Navigation = ({ isMobile }: { isMobile?: boolean }) => {
  const { isDark } = useTheme();
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/collections' },
    {
      name: isAuthenticated ? 'My Account' : 'Sign Up',
      href: isAuthenticated ? '/profile' : '/signup',
    },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className={clsx(
        'flex',
        isMobile ? 'flex-col gap-2 px-6 pt-5' : 'flex-row items-center gap-8',
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={navLinkStyles(isActive(link.href), isDark)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
