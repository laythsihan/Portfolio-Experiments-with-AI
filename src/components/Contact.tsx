import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { profile } from '../data/profile';

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 className="max-w-2xl font-display text-[2rem] font-light leading-tight tracking-[-0.01em] text-ink lg:text-[3rem]">
              If any of this looks like the problem you are sitting on, I would like to hear about it.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-baseline gap-2 border-b border-ink pb-1 font-display text-[1.25rem] text-ink transition-colors duration-200 ease-out hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-surface lg:text-[1.5rem]">
              
              {profile.email}
            </a>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">Elsewhere</p>
            <ul className="mt-4 border-t border-line">
              {profile.links.map((link) =>
              <li key={link.label} className="border-b border-line">
                  <a
                  href={link.href}
                  className="group flex items-center justify-between py-3 text-[0.9375rem] text-ink transition-colors duration-200 ease-out hover:text-clay focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                  
                    {link.label}
                    <ArrowUpRightIcon
                    className="h-3.5 w-3.5 text-faint transition-colors duration-200 ease-out group-hover:text-clay"
                    aria-hidden="true" />
                  
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
          <p>
            {profile.name} — {profile.role}
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>);

}