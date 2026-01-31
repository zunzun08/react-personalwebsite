/**
 * SectionHeader Component
 *
 * Consistent styling for section titles
 *
 * USAGE:
 *   <SectionHeader>Portfolio</SectionHeader>
 *   <SectionHeader sticky>Experience</SectionHeader>
 */

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  children: React.ReactNode;
  /** Makes header sticky on scroll */
  sticky?: boolean;
  className?: string;
}

export default function SectionHeader({
  children,
  sticky = false,
  className,
}: SectionHeaderProps) {
  return (
    <h2
      className={cn(
        'mb-6 text-sm font-semibold uppercase tracking-widest text-foreground',
        sticky && 'sticky top-0 z-20 -mx-6 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border',
        className
      )}
    >
      {children}
    </h2>
  );
}
