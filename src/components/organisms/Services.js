'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = dataSite.services;
export default function AdvertisingServices() {
  return (
    <section id='services' className='bg-black text-white py-24 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-center mb-16'>
        <p className='text-[#FDB813] font-medium uppercase mb-2'>What we do</p>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-4 max-w-2xl mx-auto'>
          We offer a wide range of advertising services tailored to your
          business growth.
        </h2>
        {/* <button className='bg-white text-black font-semibold px-6 py-3 rounded-full mt-6 hover:bg-gray-100 transition'>
          More services
        </button> */}
      </div>

      <div className='space-y-24 max-w-6xl mx-auto'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='grid md:grid-cols-12 items-center gap-10'
          >
            <div className='col-span-12 md:col-span-1 text-[#FDB813] font-medium text-lg'>
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className='col-span-12 md:col-span-8'>
              <h3 className='text-3xl font-bold mb-3 leading-tight'>
                {service.title}
              </h3>
              <p className='text-white/90 text-lg'>{service.description}</p>
            </div>
            <div className='col-span-12 md:col-span-3 flex justify-end'>
              <div className='w-24 h-24 rounded-lg overflow-hidden shadow-md'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
