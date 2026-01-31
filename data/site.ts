/**
 * Site-wide configuration
 *
 * HOW TO MODIFY:
 * - Update your personal info in the `author` object
 * - Change social links in the `links` object
 * - Modify navigation items in the `nav` array
 */

import { NavLink, SocialLink } from '@/types';

export const siteConfig = {
  /** Site name (used in metadata) */
  name: 'Cristian Compean',

  /** Browser tab title */
  title: 'Cristian Compean | Data Professional',

  /** SEO description */
  description: 'Data professional specializing in machine learning, data science, and data engineering. UT Austin 2025 graduate.',

  /** Production URL (update when deployed) */
  url: 'https://zunzun08.github.io',

  /** Personal information */
  author: {
    name: 'Cristian Compean',
    email: 'czcompean@utexas.edu',
    role: 'Data Analyst & Programmer',
    tagline: 'Machine Learning | Data Science | Data Engineering',
    education: 'UT Austin 2025 - Economics & Mathematics',
    bio: `A little bit about me, I'm a first-generation Mexican-American born and raised in Dallas, Texas.
     In my free time I enjoy working on side project, weight lifting, and cooking for love ones.
     This is my personal website where I talk about my career interests in Bayesian statistics, machine learning, and finance.
     I also have a blog where I posts pictures of me and my friends :)`
  },

  /** Social media links */
  links: {
    github: 'https://github.com/zunzun08',
    linkedin: 'https://linkedin.com/in/cristianzcompean',
    email: 'mailto:czcompean@utexas.edu',
  } as const,
};

/**
 * Navigation links for the sidebar/header
 *
 * HOW TO ADD A NEW SECTION:
 * 1. Add the section component to app/page.tsx
 * 2. Add a nav item here with the anchor ID
 *
 * Example: { name: 'Contact', href: '#contact' }
 */
export const navLinks: NavLink[] = [
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
];

/**
 * Social links with accessibility labels
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'github',
    href: siteConfig.links.github,
    label: 'View GitHub Profile',
  },
  {
    name: 'linkedin',
    href: siteConfig.links.linkedin,
    label: 'Connect on LinkedIn',
  },
  {
    name: 'email',
    href: siteConfig.links.email,
    label: 'Send an Email',
  },
];
