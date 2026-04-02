'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectNavProps {
  sections: {
    id: string;
    label: string;
  }[];
}

const ProjectNav: React.FC<ProjectNavProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if nav should be sticky
      const navElement = document.getElementById('project-nav');
      if (navElement) {
        const navTop = navElement.offsetTop;
        setIsSticky(window.scrollY > navTop - 100);
      }

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      id='project-nav'
      className={`z-40 transition-all duration-300 ${
        isSticky
          ? 'fixed top-0 left-0 right-0 bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)] shadow-sm'
          : 'relative bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-1 sm:gap-2 py-4 overflow-x-auto scrollbar-hide'>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-4 sm:px-6 py-2 text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId='activeSection'
                  className='absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]'
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default ProjectNav;
