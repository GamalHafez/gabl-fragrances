import clsx from 'clsx';
import { Navigation, HeaderActions } from './index';
import { useTheme } from '@/context/theme/useTheme';
import { scrollToTop } from '@/utils';
import Link from 'next/link';

export const DesktopHeader = () => {
  const { isDark } = useTheme();

  return (
    <div className='hidden items-center justify-between md:flex'>
      <Link
        href='/'
        onClick={() => scrollToTop()}
        className={clsx(
          'flex items-center gap-2 text-xl font-semibold capitalize',
          isDark ? 'text-zinc-100' : 'text-zinc-900',
        )}
      >
        Gabal fragrances
      </Link>

      <Navigation />

      <HeaderActions />
    </div>
  );
};
