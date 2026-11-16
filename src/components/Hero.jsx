import { HugeiconsIcon } from "@hugeicons/react";
import {
  File01Icon,
  Download01Icon,
  ArrowRight01Icon,
  GithubIcon,
} from "@hugeicons/core-free-icons";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center"
    >
      <div className="container-page w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Architectural Engineering & AI Blueprint Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm sm:max-w-md rounded-t-full bg-pale-sky border border-neutral-300 p-6 sm:p-8 flex flex-col justify-between font-mono">
              {/* Top Arch Header */}
              <div className="text-center pt-3 pb-5 border-b border-neutral-300">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">
                  TECHNICAL PROFILE
                </span>
                <span className="text-xs uppercase tracking-wider text-charcoal font-semibold mt-1 block">
                  IIIT Kottayam &middot; CSE
                </span>
                <span className="text-[10px] text-raspberry font-medium mt-0.5 block">
                  August 2024 &ndash; Present
                </span>
              </div>

              {/* Center Architecture Blueprint Components */}
              <div className="my-6 space-y-4">
                {/* 1. Backend & Data Layer Schematic */}
                <div className="bg-white border border-neutral-300 p-4 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-1.5">
                    <span>Data &amp; Service Layer</span>
                    <span className="text-charcoal font-semibold">PostgreSQL</span>
                  </div>

                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex items-center justify-between px-2 py-1 bg-canvas border border-neutral-200">
                      <span className="text-charcoal">Supabase &middot; Auth RBAC</span>
                      <span className="text-raspberry font-semibold text-[9px]">ENFORCED</span>
                    </div>
                    <div className="flex items-center justify-between px-2 py-1 bg-canvas border border-neutral-200">
                      <span className="text-charcoal">REST API &middot; Relational Schema</span>
                      <span className="text-neutral-500 text-[9px]">200 OK</span>
                    </div>
                  </div>
                </div>

                {/* 2. Transformer & ML Layer Schematic */}
                <div className="bg-white border border-neutral-300 p-4 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-1.5">
                    <span>AI / ML Inference</span>
                    <span className="text-raspberry font-semibold">PyTorch</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-center">
                    <div className="p-2 bg-canvas border border-neutral-200">
                      <span className="block text-[8px] text-neutral-500 uppercase">MuRIL-large</span>
                      <span className="block font-serif text-sm font-normal text-charcoal mt-0.5">88.47%</span>
                      <span className="block text-[8px] text-neutral-400">Accuracy</span>
                    </div>
                    <div className="p-2 bg-canvas border border-neutral-200">
                      <span className="block text-[8px] text-neutral-500 uppercase">Macro-F1</span>
                      <span className="block font-serif text-sm font-normal text-raspberry mt-0.5">81.00%</span>
                      <span className="block text-[8px] text-neutral-400">Test Score</span>
                    </div>
                  </div>
                </div>

                {/* 3. Academic Metrics */}
                <div className="bg-white border border-neutral-300 p-3 flex items-center justify-between text-[10px]">
                  <span className="text-neutral-500 uppercase tracking-wider">Academic Standing</span>
                  <span className="font-semibold text-charcoal">CGPA 8.02 / 10</span>
                </div>
              </div>

              {/* Bottom Arch Footer */}
              <div className="border-t border-neutral-300 pt-3 text-center">
                <span className="text-[10px] uppercase tracking-widest text-neutral-600 block">
                  Software Engineering &middot; Full-Stack &middot; AI/ML
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Monumental Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag with Correct Date */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-raspberry" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-raspberry font-mono">
                Developer Portfolio
              </span>
              <span className="text-neutral-400 font-mono text-xs">&middot;</span>
              <span className="text-xs uppercase tracking-widest text-neutral-600 font-mono">
                August 2024 &ndash; Present
              </span>
            </div>

            {/* Oversized Name Headline */}
            <h1 className="mt-5 font-serif text-4xl sm:text-6xl lg:text-[4.6rem] font-normal leading-[1.04] tracking-tight text-charcoal uppercase">
              Sreenandana S
            </h1>

            {/* Identity Subtitle */}
            <p className="mt-3 text-lg sm:text-xl font-light tracking-wide text-charcoal-muted">
              Computer Science Undergraduate &amp; Software Engineer
            </p>

            {/* Concise Editorial Introduction */}
            <p className="mt-6 max-w-xl text-base sm:text-[17px] leading-relaxed text-neutral-600 font-light">
              Engineering across full-stack development, backend systems, database
              architectures, and AI/ML. Currently pursuing B.Tech in Computer
              Science and Engineering at IIIT Kottayam, building resilient applications
              with React, Node.js, Python, and PostgreSQL.
            </p>

            {/* Action Buttons Row */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* Primary Project Action */}
              <a
                href="#projects"
                className="btn-editorial-primary"
              >
                <span>View Projects</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
              </a>

              {/* Functional Resume Button (Opens PDF in new tab with optional download) */}
              <div className="inline-flex">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-secondary !border-r-0"
                >
                  <HugeiconsIcon icon={File01Icon} size={14} />
                  <span>Resume</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  download="Sreenandana_S_Resume.pdf"
                  className="btn-editorial-secondary !px-3.5 hover:bg-neutral-200"
                  title="Download Resume PDF"
                  aria-label="Download Resume PDF"
                >
                  <HugeiconsIcon icon={Download01Icon} size={14} />
                </a>
              </div>

              {/* GitHub Button */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-subtle"
              >
                <HugeiconsIcon icon={GithubIcon} size={15} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Clean Aligned Bottom Metadata Bar */}
            <div className="mt-14 pt-8 border-t border-neutral-300">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-neutral-600">
                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Institution</span>
                  <span className="font-medium text-charcoal mt-1 block">{profile.universityShort}</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Academic Standing</span>
                  <span className="font-medium text-raspberry mt-1 block">CGPA {profile.cgpa}</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Timeline</span>
                  <span className="font-medium text-charcoal mt-1 block">August 2024 &ndash; Present</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Primary Domain</span>
                  <span className="font-medium text-charcoal mt-1 block">Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
