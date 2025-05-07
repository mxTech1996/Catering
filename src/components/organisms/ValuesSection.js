'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const values = dataSite.info;
export default function AdValuesSection() {
  return (
    <section className='bg-[#1a48ff] text-white pt-24 pb-16 px-6 md:px-20'>
      <div className='max-w-7xl mx-auto text-center mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-extrabold'
        >
          Our values
        </motion.h2>
      </div>

      <div className='w-full h-[220px] overflow-hidden mb-12'>
        <img
          src={dataSite.image_hero2}
          alt='Team collaborating'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
            <p className='text-sm leading-relaxed text-white/90'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
