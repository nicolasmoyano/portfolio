'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative element */}
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-8'>
            <svg
              className='w-8 h-8 text-blue-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              />
            </svg>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black'>
            Let's create something amazing together
          </h2>

          <p className='text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed'>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your vision to life.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:nicolas@moyano.se'
              className='group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm'
            >
              Get in Touch
              <svg
                className='w-5 h-5 group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>

            <a
              href='https://linkedin.com/in/nicolasmoyano'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 hover:border-black text-black font-medium transition-all duration-200'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Contact info */}
          <div className='mt-12 pt-8 border-t border-gray-200'>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600'>
              <a
                href='mailto:nicolas@moyano.se'
                className='hover:text-black transition-colors flex items-center gap-2'
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                nicolas@moyano.se
              </a>
              <span className='hidden sm:block'>•</span>
              <div className='flex items-center gap-2'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                Stockholm, Sweden
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
