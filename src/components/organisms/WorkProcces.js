'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Briefing',
    description:
      'We begin by understanding your goals, brand, and audience. Through a structured briefing, we gather all the information needed to align our strategy with your business objectives.',
  },
  {
    number: '02',
    title: 'Strategic Planning',
    description:
      'We design a custom advertising strategy that fits your timeline, budget, and KPIs. This includes campaign frameworks, target audiences, and channel selections.',
  },
  {
    number: '03',
    title: 'Creative Production',
    description:
      'Our creative team crafts high-performing assets, including videos, banners, ad copy, and landing pages. Everything is tested and reviewed before launch.',
  },
  {
    number: '04',
    title: 'Launch & Optimization',
    description:
      'We execute the campaign and monitor it in real time, applying A/B testing and data-driven adjustments to maximize performance and ROI.',
  },
];

export default function WorkProcessSection() {
  return (
    <section className='bg-[#0C0C0C] text-white py-24 px-6 md:px-20'>
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <p className='text-[#FDB813] font-medium uppercase mb-2'>Our Process</p>
        <h2 className='text-4xl font-extrabold leading-tight'>How We Work</h2>
      </div>

      <div className='space-y-16 max-w-5xl mx-auto border-l-2 border-[#FDB813]/30 pl-6 md:pl-10'>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            className='relative pl-10'
          >
            <div className='absolute left-0 top-1 w-8 h-8 bg-[#FDB813] text-black font-bold flex items-center justify-center rounded-full shadow-lg'>
              {step.number}
            </div>
            <h3 className='text-xl font-semibold mb-1'>{step.title}</h3>
            <p className='text-white/80 text-sm max-w-xl'>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
