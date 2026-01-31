/**
 * SocialLinks Component
 *
 * Displays social media icon links (GitHub, LinkedIn, Email)
 *
 * USAGE:
 *   <SocialLinks />
 *   <SocialLinks className="gap-6" iconSize={28} />
 */

import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data/site';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  /** Size of icons in pixels */
  iconSize?: number;
  /** Show labels next to icons */
  showLabels?: boolean;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Mail, // Fallback
};

export default function SocialLinks({
  className,
  iconSize = 24,
  showLabels = false,
}: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-4', className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.name];
        return (
          <li key={link.name}>
            <a
              href={link.href}
              target={link.name !== 'email' ? '_blank' : undefined}
              rel={link.name !== 'email' ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className={cn(
                'flex items-center gap-2 text-muted-foreground transition-theme',
                'hover:text-accent focus-accent'
              )}
            >
              <Icon size={iconSize} />
              {showLabels && (
                <span className="text-sm capitalize">{link.name}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
