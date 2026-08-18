import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { caseStudies } from '../data/caseStudies';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-shell px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}>
          
          <h1 className="font-display text-[2.6rem] font-light leading-[1.06] tracking-[-0.015em] text-ink sm:text-6xl lg:text-[4.6rem]">
            I design the parts of software people rely on every day.
          </h1>
          <p className="mt-8 max-w-prose text-[1.0625rem] leading-relaxed text-muted">
            {profile.statement}
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-4 lg:pt-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.06, ease: EASE }}>
          
          <dl className="space-y-5 border-t border-line pt-5">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">Based in</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">Currently</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">{profile.availability}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">Selected work</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">
                {caseStudies.length} case studies, 2021—2025
              </dd>
            </div>
          </dl>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block border-b border-ink pb-0.5 text-[0.9375rem] text-ink transition-colors duration-200 ease-out hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper">
            
            {profile.email}
          </a>
        </motion.div>
      </div>
    </section>);

}