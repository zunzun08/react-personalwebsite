/**
 * Tag Component
 *
 * Displays a small pill/badge for technologies, categories, etc.
 *
 * USAGE:
 *   <Tag>Python</Tag>
 *   <Tag variant="outline">Machine Learning</Tag>
 *   <Tag size="sm">Small Tag</Tag>
 */

import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'default' | 'outline';
  /** Size of the tag */
  size?: 'sm' | 'md';
  className?: string;
}

export default function Tag({
  children,
  variant = 'default',
  size = 'md',
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center rounded-full font-medium transition-theme',
        // Size variants
        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-xs',
        // Style variants
        variant === 'default' && 'bg-accent-light text-accent',
        variant === 'outline' && 'border border-accent text-accent',
        className
      )}
    >
      {children}
    </span>
  );
}
