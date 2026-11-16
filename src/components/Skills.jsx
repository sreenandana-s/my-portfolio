import { skillGroups } from "../data/skills";

const categoryIndices = ["01", "02", "03", "04", "05"];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-neutral-300 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-300">
          <div>
            <span className="section-tag font-mono">02 / Competencies</span>
            <h2 className="section-title mt-2">Technical Taxonomy</h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 max-w-xs text-left sm:text-right">
            Languages, frameworks, database architectures &amp; AI models
          </p>
        </div>

        {/* Editorial Catalogue Table Layout */}
        <div className="border-t border-neutral-300">
          {skillGroups.map((group, idx) => (
            <div
              key={group.label}
              className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-neutral-300 items-start gap-6"
            >
              {/* Category Index & Label */}
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-xs text-neutral-400">
                  [{categoryIndices[idx]}]
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-charcoal">
                    {group.label}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-raspberry">
                    {group.items.length} Technologies
                  </span>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5 items-center">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-4 py-2 bg-white border border-neutral-300 text-xs font-mono uppercase tracking-wider text-charcoal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Footnote Banner */}
        <div className="mt-12 p-6 bg-pale-sky border border-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-raspberry flex-none" />
            <p className="font-mono text-xs uppercase tracking-wider text-charcoal">
              Core Stack Focus: React.js &middot; TypeScript &middot; Supabase &middot; PostgreSQL &middot; PyTorch
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
            Engineered for Production
          </span>
        </div>
      </div>
    </section>
  );
}
