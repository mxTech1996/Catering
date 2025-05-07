'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const testimonials = dataSite.references;

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function TestimonialGridSection() {
  return (
    <section
      id='testimonials'
      className='bg-black text-white py-24 px-6 md:px-20'
    >
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <p className='text-[#FDB813] font-medium uppercase mb-2'>
          Testimonials
        </p>
        <h2 className='text-4xl font-extrabold leading-tight'>
          What our clients say about us
        </h2>
      </div>

      <div className='grid md:grid-cols-2 gap-10 max-w-6xl mx-auto'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='relative bg-black border border-white/10 p-6 rounded-lg flex flex-col justify-between shadow-md overflow-hidden group'
          >
            <span className='absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500'></span>
            <span className='absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500'></span>
            <span className='absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500'></span>
            <span className='absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500'></span>

            <div className='flex items-center space-x-4 mb-4'>
              <div className='w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center'>
                {getInitials(testimonial.name)}
              </div>
              <div>
                <p className='font-semibold'>{testimonial.name}</p>
                <p className='text-sm text-white/60'>
                  Rating: {testimonial.rating}/5
                </p>
              </div>
            </div>
            <p className='text-white/90 text-sm'>{testimonial.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
