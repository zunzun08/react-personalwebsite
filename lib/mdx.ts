/**
 * MDX Utilities
 *
 * Helper functions for working with MDX content.
 * These will be used when you set up full MDX support.
 *
 * TO ENABLE FULL MDX SUPPORT:
 * 1. Install: npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter
 * 2. Install for math: npm install remark-math rehype-katex katex
 * 3. Install for code: npm install rehype-highlight
 * 4. Update next.config.js to include MDX config
 *
 * For now, this provides type definitions and placeholder utilities.
 */

import { ArticleMeta } from '@/types';

/**
 * Placeholder function to get all articles
 * Replace with actual file system reading when MDX is configured
 */
export function getAllArticles(): ArticleMeta[] {
  // Placeholder articles - replace with actual MDX file reading
  return [
    {
      slug: 'sampling-overview',
      title: 'Sampling and the Overlap Measure',
      date: '2025-05-28',
      description: 'A detailed look into different sampling algorithms designed to build intuition over the idea of distributional similarity.',
      tags: ['Bayesian Statistics', 'Python', 'Data Visualization'],
      category: 'Sampling',
      readingTime: '15 min',
    },
  ];
}

/**
 * Placeholder function to get article by slug
 * Replace with actual MDX compilation when configured
 */
export function getArticleBySlug(slug: string): ArticleMeta | null {
  const articles = getAllArticles();
  return articles.find(a => a.slug === slug) || null;
}

/**
 * Sort articles by date (newest first)
 */
export function sortArticlesByDate(articles: ArticleMeta[]): ArticleMeta[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Filter out draft articles (for production)
 */
export function filterPublishedArticles(articles: ArticleMeta[]): ArticleMeta[] {
  return articles.filter(a => !a.draft);
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(
  articles: ArticleMeta[],
  category: string
): ArticleMeta[] {
  return articles.filter(
    a => a.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get articles by tag
 */
export function getArticlesByTag(
  articles: ArticleMeta[],
  tag: string
): ArticleMeta[] {
  return articles.filter(a =>
    a.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get unique categories from articles
 */
export function getAllCategories(articles: ArticleMeta[]): string[] {
  const categories = new Set(articles.map(a => a.category));
  return Array.from(categories).sort();
}

/**
 * Get unique tags from articles
 */
export function getAllTags(articles: ArticleMeta[]): string[] {
  const tags = new Set(articles.flatMap(a => a.tags));
  return Array.from(tags).sort();
}
