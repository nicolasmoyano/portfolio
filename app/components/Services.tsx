'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 'ux-design',
    title: 'UX Design',
    icon: '🎯',
    description: 'User-centered design that converts',
    details: [
      'User research & testing',
      'Journey mapping & flows',
      'Wireframing & prototyping',
      'Usability optimization',
    ],
    color: '#2563eb', // Blue
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    icon: '✨',
    description: 'Beautiful interfaces that engage',
    details: [
      'Design systems & tokens',
      'Brand alignment',
      'Responsive layouts',
      'Accessibility compliance',
    ],
    color: '#2563eb', // Blue
  },
  {
    id: 'conversion',
    title: 'Conversion Optimization',
    icon: '📈',
    description: 'Data-driven improvements that drive results',
    details: [
      'A/B testing strategy',
      'Analytics & insights',
      'Funnel optimization',
      'Performance metrics',
    ],
    color: '#2563eb', // Blue
  },
];

const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 text-black'>
            What I Do
          </h2>
          <p className='text-lg text-[var(--muted)] max-w-2xl mx-auto'>
            Specialized in creating digital products that deliver measurable business results
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='group cursor-pointer'>
                {/* Decorative circle */}
                <motion.div
                  className='absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 blur-2xl'
                  style={{ backgroundColor: service.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                <div className='relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-400 transition-all duration-300 hover:shadow-lg'>
                  {/* Icon */}
                  <div
                    className='w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110'
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className='text-2xl font-semibold mb-3 text-black'>{service.title}</h3>

                  {/* Description */}
                  <p className='text-gray-600 mb-6'>{service.description}</p>

                  {/* Expandable details */}
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === service.id ? null : service.id)
                    }
                    className='flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors'
                    style={{ color: service.color }}
                  >
                    Learn more
                    <motion.svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      animate={{
                        rotate: expandedId === service.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </motion.svg>
                  </button>

                  {/* Details */}
                  <AnimatePresence>
                    {expandedId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                      >
                        <ul className='mt-6 space-y-3'>
                          {service.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className='flex items-center gap-3 text-sm text-[var(--muted)]'
                            >
                              <div
                                className='w-1.5 h-1.5 rounded-full flex-shrink-0'
                                style={{ backgroundColor: service.color }}
                              />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
