/**
 * Hero Section Component
 *
 * Mobile-only hero section that shows above the main content
 * (On desktop, the left sidebar serves as the "hero")
 *
 * This component displays on mobile devices where the split layout
 * doesn't apply. It provides an intro with the typewriter animation.
 */

import Image from 'next/image';
import TextType from '@/components/animations/TextType';
import { siteConfig } from '@/data/site';
import SocialLinks from '@/components/ui/SocialLinks';
import ThemeToggle from '@/components/layout/ThemeToggle';
import FadeContent from '@/components/animations/FadeContent';

export default function Hero() {
  return (
    <section className="lg:hidden mb-16">
      <FadeContent threshold={0.1}>
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <Image
            src="/images/me.jpg"
            alt={siteConfig.author.name}
            width={150}
            height={150}
            className="rounded-full shadow-lg mb-6"
            priority
          />

          {/* Name with typewriter effect */}
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
            <TextType
              text={[
                siteConfig.author.name,
                'Data Professional',
                'ML Specialist',
                siteConfig.author.name,
              ]}
              typingSpeed={80}
              deletingSpeed={60}
              loop={false}
              pauseDuration={2500}
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
              className="text-foreground"
            />
          </h1>

          {/* Role */}
          <h2 className="text-lg font-medium text-muted-foreground">
            {siteConfig.author.role}
          </h2>

          {/* Tagline */}
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {siteConfig.author.tagline}
          </p>

          {/* Social links and theme toggle */}
          <div className="mt-6 flex items-center gap-4">
            <SocialLinks iconSize={20} />
            <ThemeToggle />
          </div>
        </div>
      </FadeContent>
    </section>
  );
}
