'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';

const Hero = () => {
  return (
    <section className='relative flex min-h-[85vh] justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Content */}
      <div className='relative z-10 max-w-5xl w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className='mb-6'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className='inline-block text-sm font-medium tracking-wide uppercase text-[var(--muted)] mb-4 relative'>
              <span className='relative z-10'>Senior Product Designer</span>
              <motion.div
                className='absolute bottom-0 left-0 h-[2px] bg-[var(--accent)]'
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </motion.div>

          <motion.h1
            className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm <span className='text-gradient'>Nicolas Moyano</span>
          </motion.h1>

          <motion.p
            className='text-xl sm:text-2xl lg:text-3xl font-light text-[var(--muted)] mb-8 max-w-3xl leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Creating conversion-focused digital products that blend minimalistic design with technical excellence.
          </motion.p>

          <motion.div
            className='flex flex-wrap gap-4 items-center text-base text-[var(--muted)]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className='flex items-center gap-2'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
              </svg>
              <span>Stockholm, Sweden</span>
            </div>
            <div className='w-1 h-1 rounded-full bg-[var(--muted)]'></div>
            <span>Specializing in UX/UI & Conversion Optimization</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-wrap gap-4 mt-10'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href='/#projects'
              className='group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105'
            >
              View My Work
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
            <a
              href='mailto:nicolas@moyano.se'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] font-medium transition-all duration-200 hover:scale-105'
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
      >
        <div className='flex flex-col items-center gap-2 text-[var(--muted)]'>
          <span className='text-xs uppercase tracking-wide'>Scroll</span>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;