'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import ProjectNav from '@/app/components/ProjectNav';

const projectData: Record<string, any> = {
  'project-1': {
    title: 'E-Commerce Conversion Optimization',
    category: 'UX/UI Design',
    year: '2024',
    client: 'Leading Nordic E-Commerce',
    role: 'Lead Product Designer',
    overview: 'A comprehensive redesign focused on improving the checkout flow and product discovery to increase conversion rates. Through extensive user research and iterative testing, we identified key friction points in the user journey.',
    problem: {
      title: 'The Challenge',
      description: 'The e-commerce platform was experiencing high cart abandonment rates (68%) and low product discovery engagement. Users reported confusion during checkout and difficulty finding relevant products.',
      keyPoints: [
        'Cart abandonment rate of 68%',
        'Average session duration below industry standard',
        'Low product discovery engagement',
        'Complex checkout process with 7 steps',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'We implemented a data-driven design approach combining qualitative user research with quantitative analytics.',
      keyPoints: [
        'Simplified checkout from 7 to 3 steps',
        'Implemented smart product recommendations using ML',
        'Redesigned navigation with improved information architecture',
        'Added real-time validation and progress indicators',
      ],
      results: [
        { metric: 'Conversion Rate', value: '+45%' },
        { metric: 'Cart Abandonment', value: '-32%' },
        { metric: 'Average Order Value', value: '+23%' },
        { metric: 'User Satisfaction', value: '+56%' },
      ],
    },
  },
  'project-2': {
    title: 'SaaS Dashboard Redesign',
    category: 'Product Design',
    year: '2023',
    client: 'Analytics SaaS Company',
    role: 'Senior Product Designer',
    overview: 'Redesigning a complex analytics dashboard to make data more accessible and actionable for users of all technical levels.',
    problem: {
      title: 'The Challenge',
      description: 'Users were overwhelmed by the amount of data presented and struggled to extract meaningful insights. The interface was cluttered and lacked clear visual hierarchy.',
      keyPoints: [
        'Information overload causing user frustration',
        'Poor data visualization choices',
        'Lack of customization options',
        'Steep learning curve for new users',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'Created a modular, customizable dashboard with progressive disclosure and improved data visualization.',
      keyPoints: [
        'Implemented card-based modular layout',
        'Redesigned charts and graphs for clarity',
        'Added customizable widgets and views',
        'Created interactive onboarding flow',
      ],
      results: [
        { metric: 'User Engagement', value: '+67%' },
        { metric: 'Time to Insight', value: '-41%' },
        { metric: 'Feature Adoption', value: '+52%' },
        { metric: 'Support Tickets', value: '-38%' },
      ],
    },
  },
  'project-3': {
    title: 'Mobile Banking Experience',
    category: 'Mobile Design',
    year: '2024',
    client: 'Digital Bank',
    role: 'Lead UX Designer',
    overview: 'Designing a secure yet user-friendly mobile banking application that balances security requirements with ease of use.',
    problem: {
      title: 'The Challenge',
      description: 'Traditional banking apps prioritized security at the expense of user experience, leading to frustration and low adoption rates among younger demographics.',
      keyPoints: [
        'Low adoption among target demographic (18-35)',
        'Security measures creating friction',
        'Complex navigation structure',
        'Poor accessibility compliance',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'Designed an intuitive mobile experience with seamless security integration using biometrics and smart authentication.',
      keyPoints: [
        'Implemented biometric authentication',
        'Simplified navigation to 4 main sections',
        'Added quick actions for common tasks',
        'Ensured WCAG 2.1 AA compliance',
      ],
      results: [
        { metric: 'User Adoption', value: '+78%' },
        { metric: 'Task Completion', value: '+61%' },
        { metric: 'App Store Rating', value: '4.8/5' },
        { metric: 'Daily Active Users', value: '+92%' },
      ],
    },
  },
};

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'The Problem' },
  { id: 'solution', label: 'The Solution' },
];

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Project Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className='text-[var(--accent)] hover:underline'
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--card-bg)] to-transparent'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex flex-wrap gap-3 mb-6 text-sm text-[var(--muted)]'>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.role}</span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              {project.title}
            </h1>

            <p className='text-xl text-[var(--muted)] mb-8'>
              {project.client}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <ProjectNav sections={sections} />

      {/* Overview Section */}
      <section id='overview' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>Overview</h2>
            <p className='text-lg text-[var(--muted)] leading-relaxed'>
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id='problem' className='py-20 px-4 sm:px-6 lg:px-8 bg-[var(--card-bg)]'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              {project.problem.title}
            </h2>
            <p className='text-lg text-[var(--muted)] leading-relaxed mb-8'>
              {project.problem.description}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {project.problem.keyPoints.map((point: string, index: number) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--background)]'
                >
                  <div className='w-2 h-2 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0'></div>
                  <p className='text-[var(--muted)]'>{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id='solution' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              {project.solution.title}
            </h2>
            <p className='text-lg text-[var(--muted)] leading-relaxed mb-8'>
              {project.solution.description}
            </p>

            <div className='space-y-4 mb-12'>
              {project.solution.keyPoints.map((point: string, index: number) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 rounded-lg border border-[var(--border)]'
                >
                  <div className='w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <span className='text-sm font-semibold text-[var(--accent)]'>
                      {index + 1}
                    </span>
                  </div>
                  <p className='text-[var(--foreground)]'>{point}</p>
                </div>
              ))}
            </div>

            {/* Results */}
            <div className='bg-gradient-to-br from-[var(--accent)]/5 to-purple-600/5 rounded-2xl p-8 sm:p-12'>
              <h3 className='text-2xl font-bold mb-8'>Results & Impact</h3>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                {project.solution.results.map((result: any, index: number) => (
                  <div key={index} className='text-center'>
                    <div className='text-3xl sm:text-4xl font-bold text-[var(--accent)] mb-2'>
                      {result.value}
                    </div>
                    <div className='text-sm text-[var(--muted)]'>
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <button
            onClick={() => router.push('/#projects')}
            className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200'
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
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            Back to All Projects
          </button>
        </div>
      </section>
    </main>
  );
}
