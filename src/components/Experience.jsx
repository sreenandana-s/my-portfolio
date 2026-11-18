import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-neutral-200 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-5 border-b border-neutral-200">
          <div>
            <span className="section-tag font-mono">04 / Trajectory</span>
            <h2 className="section-title mt-2">Experience</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Collaborative Programs &middot; 2026
          </span>
        </div>

        {/* Experience Card */}
        <div className="border border-neutral-200 bg-white rounded-3xl overflow-hidden">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Subtle Sage Program Block */}
              <div className="lg:col-span-4 bg-sage-subtle p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-medium">
                    {exp.period}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal mt-2">
                    {exp.program}
                  </h3>
                  <p className="mt-1 font-mono text-sm uppercase tracking-wider text-charcoal-muted font-medium">
                    {exp.role}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap gap-2.5 items-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 text-sage-dark rounded-full font-mono text-[11px] uppercase tracking-wider">
                    <span>IEDC Startup Summit 2026</span>
                  </div>
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pill-primary !py-1.5 !px-3.5 text-[11px] font-mono"
                    >
                      <span>View Certificate</span>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={13}
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Outcomes & Deliverables */}
              <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
                  Program Outcomes &middot; Technical Contributions
                </span>

                <ul className="space-y-4">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={h}
                      className="flex items-start gap-4 text-base sm:text-[17px] text-charcoal-muted font-light leading-relaxed"
                    >
                      <span className="font-mono text-xs text-terracotta font-semibold mt-1 flex-none">
                        0{i + 1}.
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap gap-2">
                  <span className="font-mono text-xs px-3.5 py-1 bg-canvas-surface border border-neutral-200 text-charcoal rounded-full">
                    Supabase
                  </span>
                  <span className="font-mono text-xs px-3.5 py-1 bg-canvas-surface border border-neutral-200 text-charcoal rounded-full">
                    PostgreSQL
                  </span>
                  <span className="font-mono text-xs px-3.5 py-1 bg-canvas-surface border border-neutral-200 text-charcoal rounded-full">
                    REST APIs
                  </span>
                  <span className="font-mono text-xs px-3.5 py-1 bg-canvas-surface border border-neutral-200 text-charcoal rounded-full">
                    Multidisciplinary Team Collaboration
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
