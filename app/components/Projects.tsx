'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Conversion Optimization',
    category: 'UX/UI Design',
    description: 'Increased conversion rates by 45% through user-centered design and A/B testing.',
    image: '/assets/project-1.jpg',
    tags: ['Conversion', 'A/B Testing', 'UX Research'],
  },
  {
    id: 'project-2',
    title: 'SaaS Dashboard Redesign',
    category: 'Product Design',
    description: 'Simplified complex data visualization for better user engagement and retention.',
    image: '/assets/project-2.jpg',
    tags: ['Data Viz', 'SaaS', 'UI Design'],
  },
  {
    id: 'project-3',
    title: 'Mobile Banking Experience',
    category: 'Mobile Design',
    description: 'Created intuitive mobile banking interface focusing on security and ease of use.',
    image: '/assets/project-3.jpg',
    tags: ['Mobile', 'FinTech', 'Security'],
  },
];

const Projects = () => {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8' id='projects'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Selected <span className='text-gradient'>Work</span>
          </h2>
          <p className='text-lg text-[var(--muted)] max-w-2xl'>
            Digital products designed with focus on user experience and business results.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className='group cursor-pointer'>
                  <div className='relative overflow-hidden rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] mb-4 aspect-[4/3] hover:border-[var(--accent)] transition-all duration-300'>
                    <div className='absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-300'>
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex items-center gap-2'>
                      <span className='text-xs font-medium text-[var(--accent)] uppercase tracking-wide'>
                        {project.category}
                      </span>
                    </div>

                    <h3 className='text-2xl font-semibold group-hover:text-[var(--accent)] transition-colors duration-200'>
                      {project.title}
                    </h3>

                    <p className='text-[var(--muted)] leading-relaxed'>
                      {project.description}
                    </p>

                    <div className='flex flex-wrap gap-2 pt-2'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-xs px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)]'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
