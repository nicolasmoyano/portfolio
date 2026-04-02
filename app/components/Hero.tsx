'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';

const Hero = () => {
  return (
    <section className='relative flex min-h-[90vh] justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white'>
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
            className='mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className='inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-medium'>
              Senior Product Designer
            </span>
          </motion.div>

          <motion.h1
            className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-black'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Design that converts.
          </motion.h1>

          <motion.p
            className='text-xl sm:text-2xl lg:text-3xl font-light text-[var(--muted)] mb-10 max-w-3xl leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm Nicolas Moyano, a product designer based in Stockholm creating digital experiences that drive real business results through thoughtful UX and conversion optimization.
          </motion.p>

          <motion.div
            className='flex flex-wrap gap-6 items-center text-base text-gray-600 mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-blue-600'></div>
              <span>Stockholm, Sweden</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-blue-600'></div>
              <span>Available for projects</span>
            </div>
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
              className='group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md'
            >
              View My Work
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
            <a
              href='mailto:nicolas@moyano.se'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 hover:border-black text-black font-medium transition-all duration-200'
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
        <div className='flex flex-col items-center gap-2 text-gray-400'>
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