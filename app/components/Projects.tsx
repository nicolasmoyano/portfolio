'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 'sbab',
    title: 'SBAB',
    category: 'B2B Application',
    description: 'Building the Future of B2B Applications',
    image: '/assets/sbab.jpg',
  },
  {
    id: 'godel',
    title: 'GODEL',
    category: 'Product Design',
    description: 'Energy comparison platform',
    image: '/assets/godel.jpg',
  },
  {
    id: 'utopia',
    title: 'UTOPIA',
    category: 'Data Center Platform',
    description: 'Enterprise data center management',
    image: '/assets/utopia.jpg',
  },
  {
    id: 'target-aid',
    title: 'TARGET AID',
    category: 'Social Impact',
    description: 'Digital platform for transparent giving',
    image: '/assets/target-aid.jpg',
  },
  {
    id: 'svenska-spel',
    title: 'SVENSKA SPEL',
    category: 'Mobile App',
    description: 'Mobile gaming experience',
    image: '/assets/svenska-spel.jpg',
  },
  {
    id: 'nordnet',
    title: 'NORDNET',
    category: 'FinTech',
    description: 'Investment platform design',
    image: '/assets/nordnet.jpg',
  },
];

// Split-flap letter component matching Codrops implementation
const FlipLetter: React.FC<{ char: string; isHovered: boolean; delay: number }> = ({
  char,
  isHovered,
  delay
}) => {
  return (
    <span className='inline-block relative overflow-hidden' style={{ perspective: '1000px' }}>
      {/* Original character - flips out */}
      <motion.span
        className='inline-block'
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 100%',
        }}
        initial={{ rotateX: 0, y: '0%' }}
        animate={{
          rotateX: isHovered ? -90 : 0,
          y: isHovered ? '100%' : '0%',
        }}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: [0.7, 0, 0.3, 1],
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>

      {/* Cloned character - flips in */}
      <motion.span
        className='inline-block absolute top-0 left-0'
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 0%',
        }}
        initial={{ rotateX: 90, y: '-100%' }}
        animate={{
          rotateX: isHovered ? 0 : 90,
          y: isHovered ? '0%' : '-100%',
        }}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: [0.7, 0, 0.3, 1],
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRotation = useMotionValue(0);
  const smoothRotation = useSpring(imageRotation, { stiffness: 150, damping: 15 });

  const prevMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - prevMousePos.current.x;
      const dy = e.clientY - prevMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate rotation based on mouse movement direction
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      imageRotation.set(angle * 0.05); // Reduced rotation amount

      setMousePosition({ x: e.clientX, y: e.clientY });
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white relative' id='projects'>
      <div className='max-w-[1600px] mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-black'>
            Selected Work
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className='relative'
            >
              <Link href={`/projects/${project.id}`}>
                <div className='group cursor-pointer'>
                  {/* Number */}
                  <span className='block text-xs text-gray-400 font-light tracking-wider mb-4'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Project Title with split-flap effect */}
                  <h3 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none'>
                    {project.title.split('').map((char, charIndex) => (
                      <FlipLetter
                        key={charIndex}
                        char={char}
                        isHovered={hoveredProject === project.id}
                        delay={charIndex * 0.025}
                      />
                    ))}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating hover image with rotation based on mouse movement */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
              className='fixed pointer-events-none z-50'
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y + 20,
                width: '400px',
                height: '300px',
                rotate: smoothRotation,
              }}
            >
              <div
                className='w-full h-full bg-gray-200 rounded-lg shadow-2xl'
                style={{
                  backgroundImage: projects.find(p => p.id === hoveredProject)?.image
                    ? `url(${projects.find(p => p.id === hoveredProject)?.image})`
                    : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Placeholder */}
                <div className='w-full h-full flex items-center justify-center text-gray-400 text-sm'>
                  {projects.find(p => p.id === hoveredProject)?.title}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
