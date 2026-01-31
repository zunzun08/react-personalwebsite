/**
 * ThemeToggle Component
 *
 * Button to switch between light and dark themes
 *
 * USAGE:
 *   <ThemeToggle />
 *
 * HOW IT WORKS:
 * - Adds/removes 'dark' class on <html> element
 * - Saves preference to localStorage
 * - Respects system preference on first visit
 */

'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only run on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    // Add transition class for smooth theme change
    document.documentElement.classList.add('theme-transitioning');
    
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Remove transition class after animation
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  };

  // Prevent flash of wrong icon
  if (!mounted) {
    return (
      <button
        className={cn(
          'p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-card-hover transition-theme focus-accent',
          className
        )}
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-card-hover transition-theme focus-accent',
        className
      )}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
