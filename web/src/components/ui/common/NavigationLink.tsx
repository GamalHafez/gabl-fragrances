'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavigationLinkProps = {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
};

export function NavigationLink({
  href,
  exact = false,
  className,
  activeClassName,
  children,
}: NavigationLinkProps) {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(className, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
}
