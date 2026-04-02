'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: '8+',
    label: 'Years Experience',
  },
  {
    value: '50+',
    label: 'Projects Delivered',
  },
  {
    value: '45%',
    label: 'Avg. Conversion Increase',
  },
  {
    value: '15+',
    label: 'Happy Clients',
  },
];

const Stats = () => {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-200 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-black'>
                {stat.value}
              </div>
              <div className='text-sm sm:text-base text-gray-600'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
