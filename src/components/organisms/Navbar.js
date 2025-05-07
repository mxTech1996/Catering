// StickyNavbar.tsx
'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyNavbar() {
  const { products } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black text-white shadow' : 'bg-transparent text-white'
      }`}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6'>
        {/* logo img */}
        <Link href='/'>
          <div className='flex items-center'>
            <img
              src={dataSite.iconImage}
              alt='Logo'
              className='w-20 h-20 rounded-full mr-2'
            />
            <h1 className='text-xl font-bold tracking-wide'>Catering</h1>
          </div>
        </Link>
        <nav className='hidden md:flex gap-6 text-sm font-medium'>
          <a href='/more-information'>Contact Us </a>
          <a href='/#about'>ABOUT US </a>
          <a href='/#services'>SERVICES</a>
          <a href='/#products'>PORTFOLIO</a>
          <a href='/#testimonials'>TESTIMONIALS </a>
        </nav>
        <button className='bg-white text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition'>
          {/* counter */}
          <span className='relative'>
            <span className='absolute -top-4 right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
              {products.length}
            </span>
          </span>
          Go to Cart
        </button>
      </div>
    </header>
  );
}
