import React, { useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import { CaseStudyRow } from './CaseStudyRow';

export function WorkIndex() {
  const [openId, setOpenId] = useState<string | null>(caseStudies[0].id);

  return (
    <section id="work" className="mx-auto max-w-shell scroll-mt-20 px-6 lg:px-10">
      <div className="flex items-baseline justify-between gap-6 pb-6">
        <h2 className="font-display text-[1.75rem] font-light text-ink">Selected work</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
          Open a project to read it
        </p>
      </div>

      <div className="border-b border-line">
        {caseStudies.map((study) =>
        <CaseStudyRow
          key={study.id}
          study={study}
          isOpen={openId === study.id}
          onToggle={() => setOpenId((current) => current === study.id ? null : study.id)} />

        )}
      </div>
    </section>);

}