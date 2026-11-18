import { HugeiconsIcon } from "@hugeicons/react";
import {
  File01Icon,
  Download01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] pt-32 pb-20 flex items-center"
    >
      <div className="container-page w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Terracotta Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-terracotta text-white rounded-full text-[11px] font-mono uppercase tracking-[0.18em] font-medium w-fit">
              <span>COMPUTER SCIENCE &middot; IIIT KOTTAYAM</span>
            </div>

            {/* Oversized Editorial Headline with Italic Emphasis */}
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-normal leading-[1.12] tracking-tight text-charcoal">
              Building software,{" "}
              <span className="italic text-terracotta">one layer</span> at a
              time.
            </h1>

            {/* Clear, Non-Repetitive Identity & Description */}
            <p className="mt-5 text-lg sm:text-xl text-charcoal font-medium">
              I&rsquo;m {profile.name}, a Computer Science undergraduate and
              developer.
            </p>

            <p className="mt-3 max-w-xl text-base text-charcoal-muted leading-relaxed font-light">
              Crafting reliable digital experiences across full-stack
              development, scalable backend systems, database architectures, and
              machine learning models.
            </p>

            {/* Rounded Pill Action Buttons (Matching reference "Find your blend" & "Take the quiz") */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* Primary Terracotta Pill Button */}
              <a href="#projects" className="btn-pill-primary">
                <span>View Projects</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
              </a>

              {/* Secondary Outline Pill Button (Resume with open + download) */}
              <div className="inline-flex items-center bg-transparent border border-neutral-300 rounded-full">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium text-charcoal hover:text-terracotta transition-colors flex items-center gap-2"
                >
                  <HugeiconsIcon icon={File01Icon} size={14} />
                  <span>Resume (PDF)</span>
                </a>
                <span className="h-4 w-[1px] bg-neutral-300" />
                <a
                  href={profile.resumeUrl}
                  download="Sreenandana_S_Resume.pdf"
                  className="px-3.5 py-3 text-charcoal-muted hover:text-terracotta transition-colors"
                  title="Download Resume PDF"
                  aria-label="Download Resume PDF"
                >
                  <HugeiconsIcon icon={Download01Icon} size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sage Arch with 2 Vertical Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md h-[27rem] sm:h-[30rem] rounded-t-full bg-sage p-6 sm:p-7 relative flex flex-col justify-end border border-neutral-300/40">
              {/* 2 Vertical Cards - Equally Prominent */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 items-end">
                {/* Card 1: Full-Stack Development */}
                <div className="bg-white/95 border border-neutral-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-56 sm:h-64">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-muted">
                    01
                  </span>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal-muted block">
                      Interface &amp; Web
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-charcoal block leading-tight mt-1">
                      Full-Stack Development
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 block mt-1.5">
                      React &middot; Node.js
                    </span>
                  </div>
                </div>

                {/* Card 2: AI & Machine Learning */}
                <div className="bg-white/95 border border-neutral-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-56 sm:h-64">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-muted">
                    02
                  </span>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal-muted block">
                      Models &amp; NLP
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-charcoal block leading-tight mt-1">
                      AI &amp; Machine Learning
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 block mt-1.5">
                      PyTorch &middot; NLP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
