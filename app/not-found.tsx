'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center'
      >
        <h1 className='text-8xl sm:text-9xl font-bold mb-4 text-black'>
          404
        </h1>
        <h2 className='text-3xl sm:text-4xl font-semibold mb-4'>
          Page Not Found
        </h2>
        <p className='text-lg text-[var(--muted)] mb-8 max-w-md mx-auto'>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href='/'
          className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors duration-200'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
