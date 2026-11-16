import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-neutral-300 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-300">
          <div>
            <span className="section-tag font-mono">04 / Trajectory</span>
            <h2 className="section-title mt-2">Experience &amp; Leadership</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Collaborative Programs &middot; 2026
          </span>
        </div>

        {/* Experience Dossier */}
        <div className="border border-neutral-300 bg-white">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 lg:grid-cols-12 p-8 sm:p-12 gap-8 items-start"
            >
              {/* Left Column: Timeline & Program Stamp */}
              <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200 pb-6 lg:pb-0 lg:pr-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-raspberry font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal mt-2">
                    {exp.program}
                  </h3>
                  <p className="mt-1 font-mono text-sm uppercase tracking-wider text-neutral-600 font-medium">
                    {exp.role}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pale-sky border border-neutral-300 font-mono text-[11px] uppercase tracking-wider text-charcoal">
                    <span>IEDC Startup Summit 2026</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Responsibilities & Outcomes */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
                  Program Outcomes &middot; Technical Contributions
                </span>

                <ul className="space-y-4">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={h}
                      className="flex items-start gap-4 text-base sm:text-[17px] text-neutral-600 font-light leading-relaxed"
                    >
                      <span className="font-mono text-xs text-raspberry font-semibold mt-1 flex-none">
                        0{i + 1}.
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap gap-2">
                  <span className="font-mono text-xs px-3 py-1 bg-canvas border border-neutral-300 text-charcoal">
                    Supabase
                  </span>
                  <span className="font-mono text-xs px-3 py-1 bg-canvas border border-neutral-300 text-charcoal">
                    PostgreSQL
                  </span>
                  <span className="font-mono text-xs px-3 py-1 bg-canvas border border-neutral-300 text-charcoal">
                    REST APIs
                  </span>
                  <span className="font-mono text-xs px-3 py-1 bg-canvas border border-neutral-300 text-charcoal">
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
