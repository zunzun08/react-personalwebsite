/**
 * Home Page
 *
 * Layout:
 * - Header: Picture (left) + Name with typing effect + role (right of picture)
 * - Content: Sections with fade animations, maximizing whitespace efficiently
 *
 * CUSTOMIZATION:
 * - Edit data/site.ts to change name, role, tagline
 * - Edit data/projects.ts to add/modify projects
 * - Edit data/experience.ts to add/modify work history
 */

import Header from '@/components/sections/Header';
import Portfolio from '@/components/sections/Portfolio';
import Experience from '@/components/sections/Experience';
import Blog from '@/components/sections/Blog';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header: Photo + Name + Role */}
      <Header />

      {/* Main content with efficient whitespace */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <Experience />
        <Portfolio />
        <Blog />
        <About />
      </main>
    </div>
  );
}