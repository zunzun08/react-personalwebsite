/**
 * Section Component
 *
 * Wrapper for page sections with consistent spacing and optional ID for navigation
 *
 * USAGE:
 *   <Section id="portfolio">
 *     <SectionHeader>Portfolio</SectionHeader>
 *     {content}
 *   </Section>
 */

import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  /** ID for anchor navigation */
  id?: string;
  /** Additional classes */
  className?: string;
  /** Remove default padding */
  noPadding?: boolean;
}

export default function Section({
  children,
  id,
  className,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24', // Offset for sticky header
        !noPadding && 'py-16 md:py-24',
        className
      )}
    >
      {children}
    </section>
  );
}
