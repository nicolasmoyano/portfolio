'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-gray-200 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <h3 className='text-2xl font-bold mb-4 text-black'>
              Nicolas Moyano
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Senior Product Designer crafting conversion-focused digital products in Stockholm, Sweden.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-sm font-semibold uppercase tracking-wide mb-4 text-gray-500'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/#projects'
                  className='text-gray-600 hover:text-black transition-colors duration-200'
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href='/resume'
                  className='text-gray-600 hover:text-black transition-colors duration-200'
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href='https://medium.com/@nico.moy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-black transition-colors duration-200'
                >
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className='text-sm font-semibold uppercase tracking-wide mb-4 text-gray-500'>
              Connect
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='mailto:nicolas@moyano.se'
                  className='text-gray-600 hover:text-black transition-colors duration-200'
                >
                  nicolas@moyano.se
                </a>
              </li>
              <li>
                <a
                  href='https://linkedin.com/in/nicolasmoyano'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-black transition-colors duration-200'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://medium.com/@nico.moy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-black transition-colors duration-200'
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-600'>
            © {currentYear} Nicolas Moyano. All rights reserved.
          </p>
          <p className='text-sm text-gray-600'>
            Designed & Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
