/**
 * Blog Listing Page
 *
 * Shows all published blog articles
 *
 * URL: /blog
 */

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Card, { CardHeader, CardDate, CardTitle, CardDescription, CardTags } from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { siteConfig } from '@/data/site';

// Placeholder articles - will be replaced with MDX content
const articles = [
  {
    slug: 'sampling-overview',
    title: 'Sampling and the Overlap Measure',
    date: '2025-05-28',
    description: 'A detailed look into different sampling algorithms designed to build intuition over the idea of distributional similarity.',
    tags: ['Bayesian Statistics', 'Python', 'Data Visualization'],
    category: 'Sampling',
    readingTime: '15 min',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {siteConfig.author.name}
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground mb-2">Blog</h1>
        <p className="text-muted-foreground mb-12">
          Thoughts on Bayesian statistics, machine learning, and data science.
        </p>

        {/* Article list */}
        <div className="space-y-4">
          {articles.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">
              No articles yet. Check back soon!
            </p>
          ) : (
            articles.map((article) => (
              <Card key={article.slug} href={`/blog/${article.slug}`}>
                <CardHeader>
                  <CardDate>
                    {article.category} · {article.readingTime}
                  </CardDate>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardDescription>{article.description}</CardDescription>
                <CardTags>
                  {article.tags.map((tag) => (
                    <Tag key={tag} size="sm">{tag}</Tag>
                  ))}
                </CardTags>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
