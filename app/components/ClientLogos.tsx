'use client';

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'SBAB',
  'Nordnet',
  'GodEL',
  'UTOPIA',
  'Target Aid',
  'Svenska Spel',
  'Klarna',
  'Spotify',
  'Volvo',
  'H&M',
  'Ericsson',
  'IKEA',
];

const ClientLogos = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-gray-200 bg-white'>
      <div className='mb-8 text-center'>
        <p className='text-sm uppercase tracking-wide text-gray-500 font-medium'>
          Trusted by leading companies
        </p>
      </div>

      <div className='relative'>
        {/* Gradient overlays */}
        <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10' />
        <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10' />

        {/* Scrolling container */}
        <motion.div
          className='flex gap-12 sm:gap-16'
          animate={{
            x: [0, -50 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className='flex-shrink-0 flex items-center justify-center'
            >
              <span className='text-2xl sm:text-3xl font-bold text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap'>
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
