import React from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { WorkIndex } from './components/WorkIndex';
import { About } from './components/About';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="min-h-full w-full bg-paper font-sans text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <WorkIndex />
        <About />
      </main>
      <Contact />
    </div>);

}