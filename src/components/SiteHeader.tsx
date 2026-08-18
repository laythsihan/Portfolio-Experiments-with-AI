import React from 'react';
import { profile } from '../data/profile';

const NAV = [
{ label: 'Work', href: '#work' },
{ label: 'About', href: '#about' },
{ label: 'Contact', href: '#contact' }];


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-shell items-baseline justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-display text-lg leading-none text-ink">{profile.name}</span>
          <span className="hidden font-mono text-[11px] leading-none text-faint sm:inline">
            {profile.role}
          </span>
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-baseline gap-6">
            {NAV.map((item) =>
            <li key={item.href}>
                <a
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-200 ease-out hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper">
                
                  {item.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>);

}