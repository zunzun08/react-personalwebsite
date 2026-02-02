/**
 * Blog Section
 *
 * Article previews with efficient layout
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card, { CardHeader, CardDate, CardTitle, CardDescription, CardTags } from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import FadeContent from '@/components/animations/FadeContent';

// Placeholder posts - replace with MDX content later
const posts = [
  {
    slug: 'sampling-overview',
    title: 'Sampling and the Overlap Measure',
    date: '2025-05-28',
    description: 'A detailed look into different sampling algorithms designed to build intuition over distributional similarity.',
    tags: ['Bayesian Statistics', 'Python', 'Data Visualization'],
    category: 'Sampling',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-4">
      <FadeContent blur duration={600}>
        <SectionHeader>Blog</SectionHeader>
      </FadeContent>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, index) => (
          <FadeContent
            key={post.slug}
            delay={100 + index * 80}
            blur
            duration={500}
          >
            <Card href={`/blog/${post.slug}`} className="h-full">
              <CardHeader>
                <CardDate>{post.category}</CardDate>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardDescription>{post.description}</CardDescription>
              <CardTags>
                {post.tags.map((tag) => (
                  <Tag key={tag} size="sm">{tag}</Tag>
                ))}
              </CardTags>
            </Card>
          </FadeContent>
        ))}
      </div>

      <FadeContent delay={300} blur duration={500}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:text-accent transition-colors group"
        >
          View All Articles
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </FadeContent>
    </section>
  );
}
