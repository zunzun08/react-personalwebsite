/**
 * SplitLayout Components
 *
 * Two-column layout with sticky left sidebar and scrolling right content
 * Inspired by Brittany Chiang's portfolio design
 *
 * USAGE:
 *   <SplitLayout>
 *     <SplitLayoutLeft name={...} role={...} tagline={...} />
 *     <SplitLayoutRight>
 *       {content}
 *     </SplitLayoutRight>
 *   </SplitLayout>
 *
 * LAYOUT:
 * - Desktop: Left sticky sidebar (40%) + Right scrollable (60%)
 * - Mobile: Stacked layout (Left becomes header, then Right scrolls)
 */

'use client';

import { cn } from '@/lib/utils';
import { navLinks } from '@/data/site';
import SocialLinks from '@/components/ui/SocialLinks';
import ThemeToggle from '@/components/layout/ThemeToggle';

// --- Main Container ---

interface SplitLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function SplitLayout({ children, className }: SplitLayoutProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-background',
        'lg:flex lg:justify-between lg:gap-4',
        'mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0',
        className
      )}
    >
      {children}
    </div>
  );
}

// --- Left Sidebar ---

interface LeftProps {
  name: string;
  role: string;
  tagline: string;
  children?: React.ReactNode;
  className?: string;
}

export function SplitLayoutLeft({
  name,
  role,
  tagline,
  children,
  className,
}: LeftProps) {
  return (
    <header
      className={cn(
        'lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24',
        className
      )}
    >
      <div>
        {/* Name and title */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-foreground sm:text-xl">
          {role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          {tagline}
        </p>

        {/* Navigation - Desktop only */}
        <nav className="nav hidden lg:block" aria-label="In-page navigation">
          <ul className="mt-16 w-max">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'group flex items-center py-3',
                    'text-xs font-bold uppercase tracking-widest text-muted-foreground',
                    'hover:text-foreground transition-theme'
                  )}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {children}
      </div>

      {/* Bottom: Social links and theme toggle */}
      <div className="mt-8 flex items-center gap-4">
        <SocialLinks iconSize={20} />
        <ThemeToggle />
      </div>
    </header>
  );
}

// --- Right Content ---

interface RightProps {
  children: React.ReactNode;
  className?: string;
}

export function SplitLayoutRight({
  children,
  className,
}: RightProps) {
  return (
    <main
      className={cn(
        'pt-24 lg:w-1/2 lg:py-24',
        className
      )}
    >
      {children}
    </main>
  );
}
