/**
 * Card Components
 *
 * Reusable card components for projects, experiences, blog posts.
 *
 * USAGE:
 *   <Card>Content here</Card>
 *   <Card href="/blog/post">Clickable card</Card>
 *
 *   <CardHeader>
 *     <CardDate>May 2025</CardDate>
 *     <CardTitle>Project Name</CardTitle>
 *   </CardHeader>
 *   <CardDescription>Description text</CardDescription>
 *   <CardTags><Tag>Tech</Tag></CardTags>
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

// --- Main Card Component ---

interface CardProps {
  children: React.ReactNode;
  /** Makes the entire card clickable */
  href?: string;
  /** External link (opens in new tab) */
  external?: boolean;
  /** Enable hover effects */
  hover?: boolean;
  /** Additional classes */
  className?: string;
}

export default function Card({
  children,
  href,
  external = false,
  hover = true,
  className,
}: CardProps) {
  const cardClasses = cn(
    'group relative rounded-lg p-6 transition-all duration-200',
    hover && 'hover:bg-card-hover cursor-pointer',
    className
  );

  const content = (
    <>
      {children}
      {href && external && (
        <ArrowUpRight
          className={cn(
            'absolute right-4 top-4 h-4 w-4 text-muted-foreground',
            'transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
            'group-hover:text-accent'
          )}
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

// --- Card Sub-components (exported separately) ---

interface ChildProps {
  children: React.ReactNode;
  className?: string;
}

/** Card Header - contains date and title */
export function CardHeader({ children, className }: ChildProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {children}
    </div>
  );
}

/** Card Date - small muted text for dates */
export function CardDate({ children, className }: ChildProps) {
  return (
    <span
      className={cn(
        'text-xs font-mono uppercase tracking-wide text-muted-foreground',
        className
      )}
    >
      {children}
    </span>
  );
}

/** Card Title - main heading */
export function CardTitle({ children, className }: ChildProps) {
  return (
    <h3
      className={cn(
        'font-medium leading-snug text-foreground',
        'group-hover:text-accent transition-colors',
        className
      )}
    >
      {children}
    </h3>
  );
}

/** Card Description - body text */
export function CardDescription({ children, className }: ChildProps) {
  return (
    <p className={cn('mt-2 text-sm leading-normal text-muted-foreground', className)}>
      {children}
    </p>
  );
}

/** Card Tags - container for Tag components */
export function CardTags({ children, className }: ChildProps) {
  return (
    <div className={cn('mt-3 flex flex-wrap gap-2', className)}>
      {children}
    </div>
  );
}
