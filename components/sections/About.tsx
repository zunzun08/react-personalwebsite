/**
 * About Section
 *
 * Bio with clean, readable layout
 */

import SectionHeader from '@/components/ui/SectionHeader';
import { siteConfig } from '@/data/site';
import FadeContent from '@/components/animations/FadeContent';

export default function About() {
  const paragraphs = siteConfig.author.bio.split('\n\n');

  return (
    <section id="about" className="py-12">
      <FadeContent blur duration={600}>
        <SectionHeader>About</SectionHeader>
      </FadeContent>

      <FadeContent delay={100} blur duration={500}>
        <div className="max-w-2xl space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}

          <p className="text-sm text-muted-foreground pt-4 border-t border-border mt-6">
            <span className="font-medium text-foreground">Education: </span>
            {siteConfig.author.education}
          </p>
        </div>
      </FadeContent>
    </section>
  );
}
