'use client';

import React from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  return (
    <>
      {/* Clean white background with subtle elements */}

      {/* Decorative blue circles - matching logo */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Blue circle - top right */}
        <motion.div
          className='absolute top-[15%] right-[10%] w-32 h-32 rounded-full'
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.04) 50%, transparent 100%)',
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Blue circle - middle left */}
        <motion.div
          className='absolute top-[45%] left-[8%] w-40 h-40 rounded-full'
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.03) 50%, transparent 100%)',
          }}
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Blue circle - bottom right */}
        <motion.div
          className='absolute bottom-[20%] right-[15%] w-36 h-36 rounded-full'
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0.02) 50%, transparent 100%)',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 pointer-events-none' />
    </>
  );
};

export default InteractiveBackground;
