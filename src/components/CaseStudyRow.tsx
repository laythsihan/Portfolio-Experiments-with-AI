import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import type { CaseStudy } from '../types/portfolio';

const EASE = [0.23, 1, 0.32, 1] as const;

interface CaseStudyRowProps {
  study: CaseStudy;
  isOpen: boolean;
  onToggle: () => void;
}

export function CaseStudyRow({ study, isOpen, onToggle }: CaseStudyRowProps) {
  const panelId = `case-${study.id}-panel`;
  const buttonId = `case-${study.id}-button`;

  return (
    <article className="scroll-mt-24 border-t border-line">
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group grid w-full grid-cols-[auto_1fr] items-start gap-x-6 gap-y-4 py-8 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper lg:grid-cols-[auto_1fr_auto_auto] lg:gap-x-10 lg:py-10">
          
          <span className="pt-1.5 font-mono text-[11px] text-faint">{study.ordinal}</span>

          <span className="block">
            <span className="block font-display text-[1.6rem] font-light leading-[1.15] tracking-[-0.01em] text-ink transition-colors duration-200 ease-out group-hover:text-clay lg:text-[2.15rem]">
              {study.title}
            </span>
            <span className="mt-3 block max-w-prose text-[0.9375rem] leading-relaxed text-muted">
              {study.summary}
            </span>
            <span className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
              <span className="text-muted">{study.client}</span>
              <span aria-hidden="true">/</span>
              <span>{study.discipline}</span>
              <span aria-hidden="true">/</span>
              <span>{study.year}</span>
            </span>
          </span>

          <span className="col-start-2 block w-full max-w-[16rem] overflow-hidden bg-line lg:col-start-3 lg:w-56">
            <img
              src={study.cover}
              alt=""
              className="aspect-[3/2] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              loading="lazy" />
            
          </span>

          <span
            aria-hidden="true"
            className="col-start-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 ease-out group-hover:border-ink group-hover:text-ink lg:col-start-4 lg:mt-1.5">
            
            {isOpen ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen &&
        <motion.div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="overflow-hidden">
          
            <div className="grid gap-x-12 gap-y-10 pb-16 lg:grid-cols-12">
              <div className="lg:col-span-7">
                {study.chapters.map((chapter, index) =>
              <div key={chapter.heading} className={index === 0 ? '' : 'mt-8'}>
                    <h4 className="font-display text-[1.0625rem] font-medium text-ink">
                      {chapter.heading}
                    </h4>
                    <p className="mt-2 max-w-prose text-[0.9375rem] leading-[1.75] text-muted">
                      {chapter.body}
                    </p>
                  </div>
              )}

                {study.quote &&
              <figure className="mt-10 border-l border-clay pl-6">
                    <blockquote className="font-display text-[1.25rem] font-light italic leading-snug text-ink">
                      “{study.quote.text}”
                    </blockquote>
                    <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                      {study.quote.attribution}
                    </figcaption>
                  </figure>
              }
              </div>

              <div className="lg:col-span-5">
                <figure className="bg-line">
                  <img
                  src={study.cover}
                  alt={study.coverAlt}
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy" />
                
                </figure>

                <dl className="mt-8 border-t border-line">
                  {study.facts.map((fact) =>
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                  
                      <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                        {fact.label}
                      </dt>
                      <dd className="text-right text-[0.875rem] text-ink">{fact.value}</dd>
                    </div>
                )}
                </dl>

                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                    Outcomes
                  </p>
                  <ul className="mt-4 space-y-5">
                    {study.metrics.map((metric) =>
                  <li key={metric.label}>
                        <p className="font-display text-[1.6rem] font-light leading-none text-ink">
                          {metric.value}
                        </p>
                        <p className="mt-1.5 text-[0.875rem] leading-snug text-muted">
                          {metric.label}
                        </p>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </article>);

}