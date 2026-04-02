'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Erik Andersson',
    role: 'Head of Product',
    company: 'SBAB',
    text: 'Nicolas transformed our B2B application from a confusing maze to an intuitive experience. Our customer satisfaction scores increased by 67% and we saw a dramatic decrease in support tickets.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sara Lindström',
    role: 'CEO',
    company: 'GodEL',
    text: 'Working with Nicolas was a game-changer. His deep understanding of conversion optimization helped us achieve a 156% increase in monthly switches. He truly understands how to design for business results.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Johan Bergqvist',
    role: 'Product Manager',
    company: 'Nordnet',
    text: 'Nicolas brings a rare combination of creative design talent and analytical thinking. His work on our fintech platform directly contributed to improved user engagement and retention.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4 text-black'>
            Client Testimonials
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            What people say about working with me
          </p>
        </motion.div>

        <div className='relative'>
          {/* Main testimonial card */}
          <div className='bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm'>
            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl' />

            <AnimatePresence mode='wait'>
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className='relative z-10'
              >
                {/* Stars */}
                <div className='flex gap-1 mb-6'>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5 text-yellow-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className='text-xl sm:text-2xl font-light leading-relaxed mb-8 text-black'>
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Author */}
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-xl'>
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className='font-semibold text-black'>
                      {currentTestimonial.name}
                    </div>
                    <div className='text-sm text-gray-600'>
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className='flex items-center justify-between mt-8'>
            <button
              onClick={prevTestimonial}
              className='p-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-200 group'
              aria-label='Previous testimonial'
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
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {/* Indicators */}
            <div className='flex gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-black'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className='p-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-200 group'
              aria-label='Next testimonial'
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
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
