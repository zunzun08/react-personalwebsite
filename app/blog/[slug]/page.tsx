/**
 * Blog Article Page
 *
 * Displays individual blog articles
 *
 * URL: /blog/[slug]
 *
 * NOTE: This is a placeholder page. When you set up MDX,
 * this will load and render .mdx files from /content/blog/
 */

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Tag from '@/components/ui/Tag';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { siteConfig } from '@/data/site';

// Placeholder article data
const placeholderArticle = {
  title: 'Sampling and the Overlap Measure',
  date: 'May 28, 2025',
  readingTime: '15 min read',
  category: 'Sampling',
  tags: ['Bayesian Statistics', 'Python', 'Data Visualization'],
  content: `
## Introduction

This article explores different sampling algorithms and builds intuition around distributional similarity.

## What You'll Learn

- Rejection Sampling
- Metropolis-Hastings Algorithm
- The Overlap Measure

## Coming Soon

This is a placeholder page. Once MDX is fully configured, your articles will render here with full LaTeX support and syntax highlighting.

### To add your own articles:

1. Create a new \`.mdx\` file in \`/content/blog/\`
2. Add frontmatter with title, date, description, tags
3. Write your content in Markdown with optional React components
  `,
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  // In the future, this will fetch the actual MDX content
  const article = placeholderArticle;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Article header */}
        <header className="mb-12">
          <p className="text-sm text-accent font-medium mb-2">
            {article.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag) => (
              <Tag key={tag} size="sm">{tag}</Tag>
            ))}
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* This will be replaced with MDX content */}
          <div 
            className="space-y-4 text-muted-foreground"
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-xl font-semibold text-foreground mt-8 mb-4">${line.slice(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-lg font-medium text-foreground mt-6 mb-3">${line.slice(4)}</h3>`;
                  }
                  if (line.startsWith('- ')) {
                    return `<li class="ml-4">${line.slice(2)}</li>`;
                  }
                  if (line.trim()) {
                    return `<p>${line}</p>`;
                  }
                  return '';
                })
                .join('')
            }}
          />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </footer>
      </article>
    </div>
  );
}
