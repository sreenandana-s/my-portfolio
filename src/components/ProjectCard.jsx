import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  ArrowUpRight01Icon,
  FileCodeIcon,
} from "@hugeicons/core-free-icons";

/* -------------------------------------------------------------------------- */
/* Visual 1: ULLAAS - Localized E-Commerce & Marketplace Architecture       */
/* -------------------------------------------------------------------------- */
function UllaasVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
      {/* Top Header Stamp */}
      <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">
          Arch // Marketplace
        </span>
        <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-white border border-neutral-300 text-raspberry font-semibold">
          IEDC Summit 2026
        </span>
      </div>

      {/* Center Interactive Marketplace Schematic */}
      <div className="my-6 space-y-4">
        {/* Role-Based Architecture Flow */}
        <div className="bg-white border border-neutral-300 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-1.5">
            <span>Role-Based Access Control</span>
            <span className="text-raspberry font-semibold">Supabase Auth</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="p-1.5 bg-pale-sky border border-neutral-300">
              <span className="block font-semibold text-charcoal">Seller</span>
              <span className="block text-[8px] text-neutral-500 mt-0.5">Catalog</span>
            </div>
            <div className="p-1.5 bg-white border border-neutral-300">
              <span className="block font-semibold text-charcoal">Buyer</span>
              <span className="block text-[8px] text-neutral-500 mt-0.5">Orders</span>
            </div>
            <div className="p-1.5 bg-pale-sky border border-neutral-300">
              <span className="block font-semibold text-charcoal">Admin</span>
              <span className="block text-[8px] text-neutral-500 mt-0.5">Verify</span>
            </div>
          </div>
        </div>

        {/* Database & Order Processing Schema */}
        <div className="bg-white border border-neutral-300 p-3.5 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
            <span>PostgreSQL Schema</span>
            <span className="text-charcoal font-semibold">REST API</span>
          </div>

          <div className="space-y-1 font-mono text-[10px]">
            <div className="flex items-center justify-between py-1 px-2 bg-canvas border border-neutral-200">
              <span className="text-charcoal">kudumbashree_producers</span>
              <span className="text-raspberry text-[9px]">UUID PK</span>
            </div>
            <div className="flex items-center justify-between py-1 px-2 bg-canvas border border-neutral-200">
              <span className="text-charcoal">orders_pipeline</span>
              <span className="text-neutral-500 text-[9px]">STATUS: OK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Summary */}
      <div className="border-t border-neutral-300 pt-3 flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
        <span>Women Entrepreneurs</span>
        <span className="text-charcoal font-semibold">Local Commerce</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 2: LazyLift - AI Academic Planning & Schedule Optimization         */
/* -------------------------------------------------------------------------- */
function LazyLiftVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
      {/* Top Header Stamp */}
      <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">
          Engine // Adaptive Planner
        </span>
        <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-white border border-neutral-300 text-raspberry font-semibold">
          Gemini API &middot; SQLite
        </span>
      </div>

      {/* Center Syllabus Weightage & Adaptive Schedule Grid */}
      <div className="my-6 space-y-4">
        {/* Syllabus Question Parsing & Weightage */}
        <div className="bg-white border border-neutral-300 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-1.5">
            <span>PYQ Topic Weightage</span>
            <span className="text-charcoal font-semibold">Parsed</span>
          </div>

          <div className="space-y-2 text-[10px]">
            <div>
              <div className="flex justify-between text-[9px] text-neutral-600 mb-1">
                <span>Distributed Systems &middot; Core</span>
                <span className="font-semibold text-charcoal">42% weight</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-100 border border-neutral-200">
                <div className="h-full bg-raspberry w-[42%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[9px] text-neutral-600 mb-1">
                <span>Relational Schema &middot; SQL</span>
                <span className="font-semibold text-charcoal">35% weight</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-100 border border-neutral-200">
                <div className="h-full bg-charcoal w-[35%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Adaptive Weekly Calendar Matrix */}
        <div className="bg-white border border-neutral-300 p-3.5 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
            <span>Dynamic Study Calendar</span>
            <span className="text-raspberry font-semibold text-[9px]">Conflict-Aware</span>
          </div>

          <div className="grid grid-cols-3 gap-1 text-[9px] text-center">
            <div className="p-1.5 bg-canvas border border-neutral-200">
              <span className="block text-neutral-400 text-[8px]">Session 01</span>
              <span className="block font-semibold text-charcoal mt-0.5">Syllabus</span>
            </div>
            <div className="p-1.5 bg-pale-sky border border-neutral-300">
              <span className="block text-raspberry text-[8px] font-semibold">Optimized</span>
              <span className="block font-semibold text-charcoal mt-0.5">PYQ Drill</span>
            </div>
            <div className="p-1.5 bg-canvas border border-neutral-200">
              <span className="block text-neutral-400 text-[8px]">Session 03</span>
              <span className="block font-semibold text-charcoal mt-0.5">Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Summary */}
      <div className="border-t border-neutral-300 pt-3 flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
        <span>Persistent Storage</span>
        <span className="text-charcoal font-semibold">Adaptive Rescheduling</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 3: NLP Research - Transformer Pipeline & Multilingual Benchmarks    */
/* -------------------------------------------------------------------------- */
function NlpResearchVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
      {/* Top Header Stamp */}
      <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
        <span className="text-[10px] uppercase tracking-widest text-neutral-500">
          NLP Model // Transformer
        </span>
        <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-white border border-neutral-300 text-raspberry font-semibold">
          MuRIL-large &middot; PyTorch
        </span>
      </div>

      {/* Center Multilingual Embeddings & Benchmark Matrix */}
      <div className="my-6 space-y-4">
        {/* Code-Mixed Corpus Vectors */}
        <div className="bg-white border border-neutral-300 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-1.5">
            <span>Dravidian Code-Mixed Corpus</span>
            <span className="text-charcoal font-semibold">Pooled</span>
          </div>

          <div className="flex flex-col gap-1.5 text-[10px]">
            <div className="flex items-center justify-between px-2 py-1 bg-pale-sky border border-neutral-300">
              <span className="text-charcoal font-medium">Tamil-English</span>
              <span className="text-[8px] text-neutral-500">Code-Mixed</span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 bg-canvas border border-neutral-200">
              <span className="text-charcoal font-medium">Malayalam-English</span>
              <span className="text-[8px] text-neutral-500">Code-Mixed</span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 bg-canvas border border-neutral-200">
              <span className="text-charcoal font-medium">Kannada-English</span>
              <span className="text-[8px] text-neutral-500">Code-Mixed</span>
            </div>
          </div>
        </div>

        {/* Evaluation Benchmarks */}
        <div className="bg-white border border-neutral-300 p-3.5 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
            <span>Fine-Tuned MuRIL Metrics</span>
            <span className="text-raspberry font-semibold">Test Set</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2 bg-canvas border border-neutral-200">
              <span className="block font-serif text-lg font-normal text-charcoal">
                88.47%
              </span>
              <span className="block text-[8px] text-neutral-500 uppercase tracking-wider mt-0.5">
                Accuracy
              </span>
            </div>
            <div className="p-2 bg-pale-sky border border-neutral-300">
              <span className="block font-serif text-lg font-normal text-raspberry">
                81.00%
              </span>
              <span className="block text-[8px] text-neutral-600 uppercase tracking-wider mt-0.5">
                Macro-F1
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Summary */}
      <div className="border-t border-neutral-300 pt-3 flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-wider">
        <span>Binary Classification</span>
        <span className="text-charcoal font-semibold">Error Analysis Done</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main ProjectCard Component                                                */
/* -------------------------------------------------------------------------- */
export default function ProjectCard({ project }) {
  // Render distinct custom schematic visual for each project
  const renderVisual = () => {
    switch (project.id) {
      case "ullaas":
        return <UllaasVisual />;
      case "lazylift":
        return <LazyLiftVisual />;
      case "offensive-lang":
        return <NlpResearchVisual />;
      default:
        return null;
    }
  };

  const projectIndices = {
    ullaas: "01",
    lazylift: "02",
    "offensive-lang": "03",
  };

  const indexNumber = projectIndices[project.id] || "00";

  return (
    <article className="border border-neutral-300 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Visual Column: Distinct Technical Schematic for each Project */}
        <div className="lg:col-span-5 bg-canvas p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-neutral-300 flex flex-col justify-between">
          {renderVisual()}
        </div>

        {/* Right Content Column: Editorial Description, Deliverables & Actions */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Category / Index Marker */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Case Study // {indexNumber}
              </span>
              <span className="h-3 w-[1px] bg-neutral-300" />
              <span className="font-mono text-xs uppercase tracking-wider text-raspberry font-semibold">
                {project.collaborative ? "Collaborative Development" : "Solo Research Project"}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal mt-3 tracking-tight">
              {project.name}
            </h3>

            {/* Overview */}
            <p className="mt-4 text-base sm:text-[17px] leading-relaxed text-neutral-600 font-light">
              {project.description}
            </p>

            {/* Implementation Highlights */}
            {project.highlights?.length > 0 && (
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                  Technical Implementation
                </span>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-neutral-600"
                    >
                      <span className="w-1.5 h-1.5 bg-raspberry flex-none mt-2" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mt-7 pt-6 border-t border-neutral-200 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1 bg-pale-sky border border-neutral-300 text-charcoal"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-primary !py-2.5 !px-5"
              >
                <span>Live Demo</span>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-secondary !py-2.5 !px-5"
              >
                <HugeiconsIcon icon={GithubIcon} size={15} />
                <span>Source Code</span>
              </a>
            )}

            {!project.links.live && !project.links.github && (
              <div className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 py-2">
                <HugeiconsIcon icon={FileCodeIcon} size={15} className="text-raspberry" />
                <span>Private Codebase &middot; Academic Research Benchmark</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
