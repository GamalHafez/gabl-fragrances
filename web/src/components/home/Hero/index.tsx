import { ChevronRight } from 'lucide-react';
import { AnnouncementBar } from './AnnouncementBar';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative isolate overflow-hidden'>
      {/* Mobile */}
      <Image
        fill
        priority
        className='block w-full md:hidden'
        src='/images/mobile-banner.jpg'
        alt='Gabal Fragrances collection'
        sizes='100vw'
      />

      {/* Desktop */}
      <Image
        fill
        priority
        className='hidden h-[80vh] w-full object-cover lg:block'
        src='/images/desktop-banner.png'
        alt='Gabal Fragrances collection'
        sizes='100vw'
      />

      {/* Tablet */}
      <Image
        fill
        priority
        className='hidden h-[60vh] w-full object-cover md:block lg:hidden'
        src='/images/tablet-banner.png'
        alt='Gabal Fragrances collection'
        sizes='100vw'
      />

      <Link
        href='/collections'
        className='group hover:border-brand-300 absolute top-[83%] left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-md bg-white/15 px-6 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:translate-y-[-54%] hover:bg-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)] active:scale-95 md:top-[65%] md:left-[23%] md:px-9 md:py-4 md:text-base lg:top-[73%]'
      >
        Shop Collection
        <ChevronRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
      </Link>

      <AnnouncementBar />
    </section>
  );
};

export default Hero;
