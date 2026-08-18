import React from 'react';
import { profile } from '../data/profile';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-shell scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <img
            src={profile.portrait}
            alt={profile.portraitAlt}
            className="aspect-[4/5] w-full max-w-[22rem] object-cover"
            loading="lazy" />
          
        </div>

        <div className="lg:col-span-8">
          <h2 className="font-display text-[1.75rem] font-light text-ink">About</h2>
          <div className="mt-6 max-w-prose space-y-5">
            {profile.bio.map((paragraph) =>
            <p key={paragraph.slice(0, 24)} className="text-[1.0625rem] leading-[1.75] text-muted">
                {paragraph}
              </p>
            )}
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
              What I work on
            </p>
            <ul className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2">
              {profile.capabilities.map((capability) =>
              <li key={capability} className="text-[0.9375rem] text-ink">
                  {capability}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}