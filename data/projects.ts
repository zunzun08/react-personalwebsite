/**
 * Portfolio Projects Data
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy an existing entry
 * 2. Update all fields with your new project
 * 3. Add it to the array (featured projects first, then by date)
 *
 * FIELD GUIDE:
 * - id: unique identifier (lowercase, hyphens for spaces)
 * - title: project name
 * - description: 2-4 sentences about the project
 * - technologies: array of tech/tools used
 * - url: link to project page, demo, or blog post (optional)
 * - github: GitHub repo URL (optional)
 * - featured: true to show prominently
 * - date: 'YYYY-MM' when completed/started
 */

import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'finbert-fast',
    title: 'FinBERTFast',
    description: 'Design, build, and implement a BERT (Bidirectional Encoder Representations from Transformers) model for sentiment analysis for finance with experiments to optimize performance through advanced training techniques including further pre-training and fine-tuning along with a system to scrape, store, and visualize financial news data.',
    technologies: ['LLM', 'Python', 'Tableau', 'Data Engineering', 'Web Scraper'],
    url: '/blog/finbert-fast',
    featured: true,
    date: '2025-06',
  },
  {
    id: 'rand-hie-overlap',
    title: 'Overlap Measure: RAND HIE Analysis',
    description: 'The RAND HIE (1971-1986), often cited against universal healthcare, showed negligible health impacts of free comprehensive insurance. Our analysis of its mental health data finds a key contrast: p-values show no significant average difference between insurance groups, but the overlap measure reveals more individuals changed mental health behavior under comprehensive coverage.',
    technologies: ['Statistics', 'Python', 'Seaborn', 'Pandas'],
    featured: true,
    date: '2025-05',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Learned elements of web development and Git (GitHub Pages and version control) to create a personal website where I host my projects, work experience, and blog. Built with React, Next.js, and Tailwind CSS.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/zunzun08/zunzun08.github.io',
    featured: false,
    date: '2025-01',
  },
  // Add more projects here following the same structure
];

/** Get featured projects only */
export const featuredProjects = projects.filter(p => p.featured);

/** Get all projects sorted by date (most recent first) */
export const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
