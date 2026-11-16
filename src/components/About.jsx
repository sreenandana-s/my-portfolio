import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-neutral-300 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-300">
          <div>
            <span className="section-tag font-mono">01 / Profile</span>
            <h2 className="section-title mt-2">About &amp; Education</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            IIIT Kottayam &middot; CSE
          </span>
        </div>

        {/* Editorial Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Architectural Arch Education Card */}
          <div className="lg:col-span-5">
            <div className="rounded-t-full bg-white border border-neutral-300 p-8 sm:p-10 flex flex-col justify-between">
                <div className="text-center pt-4 pb-8 border-b border-neutral-200">
                  <div className="w-10 h-10 rounded-full bg-pale-sky border border-neutral-300 mx-auto flex items-center justify-center font-serif text-sm font-semibold text-charcoal">
                    IIIT
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal mt-4">
                    {profile.university}
                  </h3>
                  <p className="mt-1 font-mono text-xs tracking-wider uppercase text-raspberry font-medium">
                    {profile.degree}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-neutral-400">
                    {profile.degreeTimeline}
                  </p>
                </div>

                {/* Score & Location Badges */}
                <div className="pt-6 space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      Academic Standing
                    </span>
                    <span className="font-mono text-sm font-semibold text-charcoal">
                      CGPA {profile.cgpa}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      Location
                    </span>
                    <span className="font-mono text-xs font-medium text-charcoal">
                      {profile.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      Primary Domain
                    </span>
                    <span className="font-mono text-xs font-medium text-raspberry">
                      Software Engineering
                    </span>
                  </div>
                </div>

                {/* Bottom Signature Capsule */}
                <div className="mt-8 rounded-full bg-pale-sky p-3 text-center border border-neutral-200">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-charcoal font-medium">
                    Enrolled &middot; Active Undergraduate
                  </span>
                </div>
              </div>
          </div>

          {/* Right Column: Editorial Essay & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-snug">
                &ldquo;Taking complex systems apart until the optimal architecture
                becomes self-evident.&rdquo;
              </p>

              <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-neutral-600 font-light">
                <p>
                  I am a Computer Science undergraduate at {profile.university}{" "}
                  with broad interests across software engineering, focusing on
                  full-stack development, backend systems, database engineering,
                  and AI/ML applications.
                </p>

                <p>
                  My engineering workflow involves designing clean relational schemas,
                  implementing authentication and role-based permissions, and building
                  RESTful services with PostgreSQL, Supabase, Node.js, and Python,
                  alongside building responsive, accessible frontends in React.
                </p>

                <p>
                  Whether working individually to prototype machine learning pipelines
                  or collaborating across multidisciplinary teams in programs like{" "}
                  <span className="text-charcoal font-medium">She Builds Tech</span>,
                  I prioritize structural integrity: readable code, robust database
                  modeling, and solutions designed to serve actual users in production.
                </p>
              </div>
            </div>

            {/* Editorial Metric Grid */}
            <div className="mt-12 pt-8 border-t border-neutral-300 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-serif text-3xl font-normal text-charcoal">
                  8.02
                </span>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-neutral-400">
                  Current CGPA
                </span>
              </div>

              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-raspberry">
                  Software Eng.
                </span>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-neutral-400">
                  Primary Domain
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="block font-serif text-2xl sm:text-3xl font-normal text-charcoal">
                  2024 &ndash; Present
                </span>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-neutral-400">
                  B.Tech CSE Period
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
