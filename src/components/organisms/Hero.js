// Hero.tsx
'use client';

import { dataSite } from '@/data';
import Image from 'next/image';

export default function Hero() {
  const urlImg = dataSite.image_hero;
  return (
    <section
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${urlImg})` }}
    >
      <div className='absolute inset-0 bg-black/30' />

      <div className='relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight'>
          {dataSite.subtitle}
        </h1>
        <p className='text-white text-lg mb-8'>{dataSite.description}</p>
        <button className='bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition w-fit'>
          Let’s launch your campaign
        </button>

        <div className='absolute bottom-10 right-10 w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg'>
          <Image
            src={dataSite.image_hero2}
            alt='Growth Card'
            layout='fill'
            objectFit='cover'
            className='rounded-xl'
          />
          <div className='absolute inset-0 bg-black/40 p-4 text-white text-sm flex items-end'>
            Great ads start with great insights—let us shape the story behind
            your brand.
          </div>
        </div>
      </div>
    </section>
  );
}
