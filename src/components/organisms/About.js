'use client';

import { dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='bg-black text-white py-24 px-36 md:px-36 grid md:grid-cols-2 gap-10 items-center'
    >
      {/* Left: Text */}
      <div>
        <p className='text-[#FDB813] font-medium mb-4'>About us</p>
        <h2 className='text-4xl md:text-5xl font-extrabold leading-tight mb-6'>
          → Our mission is to craft advertising strategies that maximize brand
          impact and connect businesses with the right audience.
        </h2>
        <p className='text-lg mb-8'>
          We specialize in developing innovative advertising concepts and
          consulting services tailored to help brands stand out across digital,
          print, and outdoor media. Our team empowers businesses to build
          meaningful connections through messaging that resonates.
        </p>
        <Link href='/services'>
          <button className='bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition'>
            Our Services
          </button>
        </Link>
      </div>

      {/* Right: Image */}
      <div className='relative w-full h-[400px] rounded-lg overflow-hidden'>
        <Image
          src={dataSite.services[0].image}
          alt='Advertising Consulting'
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />
      </div>
    </section>
  );
}
