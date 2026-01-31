/**
 * Header Component
 *
 * Layout: Picture (left) + Name (typing) + Role + Bio (right)
 * Typing cycles: Name → Skills → Name (stops)
 */

'use client';

import Image from 'next/image';
import TextType from '@/components/animations/TextType';
import SocialLinks from '@/components/ui/SocialLinks';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { siteConfig, navLinks } from '@/data/site';


export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-6">
        {/* Top row: Nav + Theme Toggle */}
        <div className="flex items-center justify-between mb-6">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        {/* Main header: Picture + Name/Role/Bio */}
        <div className="flex items-start gap-6 md:gap-8">
          {/* Profile Picture */}
          <Image
            src="/images/me.jpg"
            alt={siteConfig.author.name}
            width={100}
            height={100}
            className="rounded-lg shadow-md flex-shrink-0"
            priority
          />

          {/* Name + Role + Bio side by side */}
          <div className="flex-1 flex flex-col md:flex-row md:gap-8">
            {/* Left: Name and Role */}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                <TextType
                  text={[
                    'Welcome to my site!',
                    `My name is ${siteConfig.author.name}`,
                    'Data Engineering & Automation',
                    'Machine Learning',
                    'Futures & Ag',
                    siteConfig.author.name,
                  ]}
                  typingSpeed={60}
                  deletingSpeed={40}
                  loop={false}
                  pauseDuration={1500}
                  cursorCharacter="_"
                  cursorBlinkDuration={0.5}
                />
              </h1>
              <p className="text-base text-muted-foreground mt-1">
                {siteConfig.author.role}
              </p>

              {/* Social Links */}
              <div className="mt-3">
                <SocialLinks iconSize={18} />
              </div>
            </div>

            {/* Right: Bio (hidden on mobile, shown on md+) */}
            <div className="hidden md:block md:w-1/2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {siteConfig.author.bio.split('\n\n')[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
