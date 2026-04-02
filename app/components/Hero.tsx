'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='flex min-h-[85vh] justify-center items-center px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='mb-6'>
            <span className='inline-block text-sm font-medium tracking-wide uppercase text-[var(--muted)] mb-4'>
              Senior Product Designer
            </span>
          </div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8'>
            Hi, I'm <span className='text-gradient'>Nicolas Moyano</span>
          </h1>

          <p className='text-xl sm:text-2xl lg:text-3xl font-light text-[var(--muted)] mb-8 max-w-3xl leading-relaxed'>
            Creating conversion-focused digital products that blend minimalistic design with technical excellence.
          </p>

          <div className='flex flex-wrap gap-4 items-center text-base text-[var(--muted)]'>
            <div className='flex items-center gap-2'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
              </svg>
              <span>Stockholm, Sweden</span>
            </div>
            <div className='w-1 h-1 rounded-full bg-[var(--muted)]'></div>
            <span>Specializing in UX/UI & Conversion Optimization</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;