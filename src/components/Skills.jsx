import { skillGroups } from "../data/skills";

const categoryIndices = ["01", "02", "03", "04", "05"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-neutral-200 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-5 border-b border-neutral-200">
          <div>
            <span className="section-tag font-mono">02 / Competencies</span>
            <h2 className="section-title mt-2">Technical Taxonomy</h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sage-light text-sage-dark rounded-full font-mono text-xs uppercase tracking-wider">
            <span>5 Core Domains</span>
          </div>
        </div>

        {/* Editorial Catalogue Table Layout */}
        <div className="border-t border-neutral-200">
          {skillGroups.map((group, idx) => (
            <div
              key={group.label}
              className="grid grid-cols-1 md:grid-cols-12 py-7 border-b border-neutral-200 items-start gap-6"
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
                  <span className="inline-block mt-1 font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 bg-sage-light text-sage-dark rounded-full font-medium">
                    {group.items.length} Technologies
                  </span>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5 items-center">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-4 py-2 bg-canvas-surface border border-neutral-200 rounded-full text-xs font-mono uppercase tracking-wider text-charcoal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
