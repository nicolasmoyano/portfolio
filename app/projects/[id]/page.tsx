'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import ProjectNav from '@/app/components/ProjectNav';

const projectData: Record<string, any> = {
  'sbab': {
    title: 'Building the Future of B2B Applications at SBAB',
    category: 'B2B Application',
    year: '2023',
    client: 'SBAB Bank',
    role: 'Visual Design, UX Research, Interaction Prototyping & Testing',
    overview: 'SBAB began recruiting and redesigning its entire B2B application with the vision of becoming the best platform for Corporate clients and housing cooperatives. Besides the redesign, we also began on initiatives to not service and activate more customers.',
    problem: {
      title: 'Understanding the Problem',
      description: 'SBAB\'s new business application project had managed and aligned four NPL. It was designed with the new agile self-organised teams. But from talking to our existing clients, it was evident both customers and internal teams faced challenges in navigating the outdated platform.',
      keyPoints: [
        'Information was requested unnecessarily across multiple sections',
        'Mandatory fields: Info requested from both customers are what was required to complete the application confidently',
        'Users lack easy access to success blockers and frozen points',
        'The new UI process was time consuming and manufacturing',
      ],
    },
    solution: {
      title: 'Key Insights and Solution Focus',
      description: 'After mapping the user journey and conducting discovery workshops, we understood several strategic improvements needed:',
      keyPoints: [
        'Focus on enabling upfront development to support a fully digital customer flow',
        'Enable intuitive dashboards to capture historical and physical paperwork',
        'Streamline the application for both customers and internal teams',
        'Enhance mandatory fields with smart validation, preventing progression without required input',
        'Provide clear, contextual feedback to guide users and reduce confusion throughout the journey',
      ],
      results: [
        { metric: 'User Satisfaction', value: '+67%' },
        { metric: 'Application Time', value: '-45%' },
        { metric: 'Customer NPS', value: '+38pts' },
        { metric: 'Support Tickets', value: '-52%' },
      ],
    },
  },
  'godel': {
    title: 'GodEL - Energy Comparison Platform',
    category: 'Product Design',
    year: '2022',
    client: 'GodEL',
    role: 'Lead Product Designer',
    overview: 'Designed a consumer-friendly platform to help Swedish households compare and switch electricity providers, making the energy market more transparent and accessible.',
    problem: {
      title: 'The Challenge',
      description: 'The Swedish electricity market is complex and overwhelming for consumers. Users struggled to understand pricing models and make informed decisions about their energy provider.',
      keyPoints: [
        'Complex pricing structures difficult to compare',
        'Lack of transparency in energy market',
        'User confusion about contract terms',
        'High abandonment rate in switching process',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'Created an intuitive comparison tool with clear visualizations and guided decision-making flow.',
      keyPoints: [
        'Simplified price comparison with visual charts',
        'Clear explanation of contract terms and conditions',
        'Streamlined switching process with progress tracking',
        'Personalized recommendations based on usage patterns',
      ],
      results: [
        { metric: 'User Completion', value: '+73%' },
        { metric: 'Time to Switch', value: '-58%' },
        { metric: 'User Confidence', value: '+81%' },
        { metric: 'Monthly Switches', value: '+156%' },
      ],
    },
  },
  'utopia': {
    title: 'UTOPIA - Data Center Management',
    category: 'Enterprise Platform',
    year: '2023',
    client: 'UTOPIA Data Centers',
    role: 'Senior UX/UI Designer',
    overview: 'Enterprise-grade data center management platform designed for IT administrators to monitor, manage, and optimize infrastructure performance.',
    problem: {
      title: 'The Challenge',
      description: 'IT administrators needed a comprehensive solution to manage complex data center operations, but existing tools were fragmented and difficult to use.',
      keyPoints: [
        'Fragmented tools across multiple systems',
        'Lack of real-time monitoring capabilities',
        'Complex navigation and steep learning curve',
        'Inadequate alert and notification system',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'Unified dashboard with real-time monitoring, intelligent alerts, and intuitive management tools.',
      keyPoints: [
        'Centralized dashboard with customizable widgets',
        'Real-time performance metrics and alerts',
        'Intuitive server and resource management',
        'Advanced analytics and predictive insights',
      ],
      results: [
        { metric: 'Response Time', value: '-64%' },
        { metric: 'System Uptime', value: '99.97%' },
        { metric: 'Admin Efficiency', value: '+89%' },
        { metric: 'Alert Accuracy', value: '+95%' },
      ],
    },
  },
  'target-aid': {
    title: 'Target Aid - Impact Platform',
    category: 'Social Impact',
    year: '2024',
    client: 'Target Aid Foundation',
    role: 'Lead Product Designer',
    overview: 'Digital platform connecting donors with meaningful causes and providing transparent impact tracking for charitable giving.',
    problem: {
      title: 'The Challenge',
      description: 'Donors lacked transparency about how their contributions were being used and wanted to see tangible impact from their charitable giving.',
      keyPoints: [
        'Lack of transparency in donation usage',
        'Difficulty tracking real-world impact',
        'Complex donation process',
        'Low donor retention and engagement',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'Built a transparent platform with real-time impact tracking, project updates, and simplified donation flows.',
      keyPoints: [
        'Visual impact dashboards showing fund allocation',
        'Real-time project updates with photos and stories',
        'One-click donation with saved payment methods',
        'Personalized impact reports for donors',
      ],
      results: [
        { metric: 'Donor Retention', value: '+142%' },
        { metric: 'Avg Donation', value: '+87%' },
        { metric: 'User Engagement', value: '+198%' },
        { metric: 'Trust Score', value: '4.9/5' },
      ],
    },
  },
  'svenska-spel': {
    title: 'Svenska Spel Priset - Mobile Gaming',
    category: 'Mobile App',
    year: '2021',
    client: 'Svenska Spel',
    role: 'Mobile UI/UX Designer',
    overview: 'Mobile gaming experience for Svenska Spel\'s lottery game, designed to be engaging, accessible, and responsible.',
    problem: {
      title: 'The Challenge',
      description: 'Creating an engaging mobile gaming experience while maintaining Svenska Spel\'s commitment to responsible gaming and accessibility.',
      keyPoints: [
        'Balance engagement with responsible gaming',
        'Complex game mechanics to simplify',
        'Need for strong accessibility features',
        'Integration with existing Svenska Spel ecosystem',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'Designed an intuitive, playful mobile experience with built-in responsible gaming features and excellent accessibility.',
      keyPoints: [
        'Simplified game mechanics with visual tutorials',
        'Integrated responsible gaming tools and limits',
        'WCAG AAA accessibility compliance',
        'Seamless integration with Svenska Spel account',
      ],
      results: [
        { metric: 'App Downloads', value: '+234%' },
        { metric: 'Daily Active Users', value: '+167%' },
        { metric: 'Accessibility Score', value: '98/100' },
        { metric: 'User Rating', value: '4.7/5' },
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
