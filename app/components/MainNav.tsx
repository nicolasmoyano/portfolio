'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 sm:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <span className='text-xl sm:text-2xl font-bold tracking-tight text-black'>
              NM<span className='text-blue-600'>.</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className='flex items-center gap-6 sm:gap-8'>
            <li>
              <Link
                href='/#projects'
                className='text-sm sm:text-base text-gray-600 hover:text-black transition-colors duration-200'
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href='/resume'
                className='text-sm sm:text-base text-gray-600 hover:text-black transition-colors duration-200'
              >
                About
              </Link>
            </li>
            <li>
              <a
                href='mailto:nicolas@moyano.se'
                className='hidden sm:inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200'
              >
                Contact
              </a>
              <a
                href='mailto:nicolas@moyano.se'
                className='sm:hidden text-sm text-gray-600 hover:text-black transition-colors duration-200'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default MainNav;