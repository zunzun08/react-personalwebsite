/**
 * Utility functions for the website
 *
 * Usage:
 *   import { cn } from '@/lib/utils';
 *   <div className={cn('base-class', condition && 'conditional-class')} />
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names intelligently, merging Tailwind classes properly
 * @param inputs - Class names, objects, or arrays of class names
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string to a readable format
 * @param date - Date string in YYYY-MM-DD format or Date object
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string (e.g., "May 2025")
 */
export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', options);
}

/**
 * Creates a URL-friendly slug from a string
 * @param str - String to slugify
 * @returns URL-friendly slug
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
