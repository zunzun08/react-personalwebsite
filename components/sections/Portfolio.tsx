/**
 * Portfolio Section
 *
 * Displays projects in a clean grid layout with efficient whitespace
 */

import { projects } from '@/data/projects';
import SectionHeader from '@/components/ui/SectionHeader';
import Card, { CardHeader, CardDate, CardTitle, CardDescription, CardTags } from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import { formatDate } from '@/lib/utils';
import FadeContent from '@/components/animations/FadeContent';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12">
      <FadeContent blur duration={600}>
        <SectionHeader>Portfolio</SectionHeader>
      </FadeContent>

      {/* Bubble container for compact space */}
      <div className="rounded-xl border border-border bg-card p-4 md:p-6">
        {/* Grid layout for efficient space use */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeContent
              key={project.id}
              delay={100 + index * 80}
              blur
              duration={500}
            >
              <Card
                href={project.url || project.github}
                external={!!project.github && !project.url}
                className="h-full"
              >
                <CardHeader>
                  <CardDate>{formatDate(project.date)}</CardDate>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardDescription>{project.description}</CardDescription>
                <CardTags>
                  {project.technologies.map((tech) => (
                    <Tag key={tech} size="sm">{tech}</Tag>
                  ))}
                </CardTags>
              </Card>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
