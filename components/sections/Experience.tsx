/**
 * Experience Section
 *
 * Work history with clean timeline layout
 */

import { experiences } from '@/data/experience';
import SectionHeader from '@/components/ui/SectionHeader';
import Card, { CardHeader, CardDate, CardTitle, CardDescription, CardTags } from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import { formatDate } from '@/lib/utils';
import FadeContent from '@/components/animations/FadeContent';

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <FadeContent blur duration={600}>
        <SectionHeader>Experience</SectionHeader>
      </FadeContent>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <FadeContent
            key={exp.id}
            delay={100 + index * 80}
            blur
            duration={500}
          >
            <Card href={exp.url} external>
              <CardHeader>
                <CardDate>
                  {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                </CardDate>
                <CardTitle>{exp.role} · {exp.company}</CardTitle>
              </CardHeader>
              <CardDescription>{exp.description}</CardDescription>
              <CardTags>
                {exp.technologies.map((tech) => (
                  <Tag key={tech} size="sm">{tech}</Tag>
                ))}
              </CardTags>
            </Card>
          </FadeContent>
        ))}
      </div>
    </section>
  );
}
