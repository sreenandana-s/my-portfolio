import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-200 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-5 border-b border-neutral-200">
          <div>
            <span className="section-tag font-mono">01 / Background</span>
            <h2 className="section-title mt-2">About &amp; Education</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            IIIT Kottayam &middot; CSE
          </span>
        </div>

        {/* Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Academic Credentials Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-sage-subtle border border-neutral-200 p-8 sm:p-9 flex flex-col justify-between">
              <div className="border-b border-neutral-200/80 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 text-sage-dark rounded-full font-mono text-[11px] uppercase tracking-wider mb-4">
                  <span>Undergraduate Degree</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal">
                  {profile.university}
                </h3>
                <p className="mt-1.5 font-mono text-xs tracking-wider uppercase text-terracotta font-medium">
                  {profile.degree}
                </p>
                <p className="mt-1 font-mono text-[11px] text-neutral-400">
                  {profile.degreeTimeline}
                </p>
              </div>

              {/* Education Details */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-neutral-200/60">
                  <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted">
                    Cumulative GPA
                  </span>
                  <span className="font-mono text-sm font-semibold text-charcoal">
                    {profile.cgpa}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-neutral-200/60">
                  <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted">
                    Location
                  </span>
                  <span className="font-mono text-xs text-charcoal">
                    {profile.location}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted">
                    Domain
                  </span>
                  <span className="font-mono text-xs font-medium text-terracotta">
                    Software Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-snug">
              &ldquo;Turning ideas into thoughtful, reliable software.&rdquo;
            </p>

            <div className="mt-7 space-y-4 text-base sm:text-[17px] leading-relaxed text-charcoal-muted font-light">
              <p>
                I am a Computer Science undergraduate at {profile.university}{" "}
                working across full-stack engineering, scalable backend systems,
                database architectures, and machine learning models.
              </p>

              <p>
                My engineering workflow centers on designing clean relational
                schemas, managing role-based access control, and developing
                RESTful services with PostgreSQL, Supabase, Node.js, and Python,
                paired with thoughtful frontend interfaces in React.
              </p>

              <p>
                Whether building localized commerce solutions in multidisciplinary
                cohorts like{" "}
                <span className="text-charcoal font-medium">
                  She Builds Tech
                </span>{" "}
                or fine-tuning transformer pipelines for multilingual NLP, I
                focus on clean, maintainable code designed to perform in
                production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
