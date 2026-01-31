/**
 * TypeScript interfaces for the website
 *
 * These define the shape of data used throughout the site.
 * When adding new projects or experiences, follow these interfaces.
 */

/**
 * Work experience entry
 * Used in: data/experience.ts, Experience.tsx
 */
export interface Experience {
  /** Unique identifier (e.g., 'embark') */
  id: string;
  /** Company name */
  company: string;
  /** Job title/role */
  role: string;
  /** Start date in YYYY-MM format */
  startDate: string;
  /** End date in YYYY-MM format, or null if current */
  endDate: string | null;
  /** Job description (2-4 sentences) */
  description: string;
  /** Technologies/tools used */
  technologies: string[];
  /** Company website URL (optional) */
  url?: string;
}

/**
 * Portfolio project entry
 * Used in: data/projects.ts, Portfolio.tsx
 */
export interface Project {
  /** Unique identifier (e.g., 'finbert-fast') */
  id: string;
  /** Project title */
  title: string;
  /** Short description (2-4 sentences) */
  description: string;
  /** Technologies/tools used */
  technologies: string[];
  /** Link to project page or demo (optional) */
  url?: string;
  /** GitHub repository URL (optional) */
  github?: string;
  /** Whether to feature prominently */
  featured: boolean;
  /** Project date in YYYY-MM format */
  date: string;
}

/**
 * Blog article metadata
 * Used in: MDX frontmatter, blog components
 */
export interface ArticleMeta {
  /** URL slug (filename without .mdx) */
  slug: string;
  /** Article title */
  title: string;
  /** Publication date in YYYY-MM-DD format */
  date: string;
  /** Short description for previews and SEO */
  description: string;
  /** Topic tags */
  tags: string[];
  /** Article category (e.g., 'Sampling', 'Machine Learning') */
  category: string;
  /** Estimated reading time (e.g., '10 min') */
  readingTime?: string;
  /** Whether the article is a draft (won't be published) */
  draft?: boolean;
}

/**
 * Navigation link
 * Used in: data/site.ts, navigation components
 */
export interface NavLink {
  /** Display text */
  name: string;
  /** Link href (can be anchor like '#portfolio' or path like '/blog') */
  href: string;
}

/**
 * Social media link
 * Used in: data/site.ts, SocialLinks.tsx
 */
export interface SocialLink {
  /** Platform name */
  name: 'github' | 'linkedin' | 'email' | 'twitter';
  /** Full URL or mailto: link */
  href: string;
  /** Aria label for accessibility */
  label: string;
}
