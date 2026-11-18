import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  SmartPhone01Icon,
  GithubIcon,
  Linkedin01Icon,
  File01Icon,
  Download01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { profile } from "../data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail01Icon,
    sub: "Direct Correspondence",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: SmartPhone01Icon,
    sub: "Call / WhatsApp",
  },
  {
    label: "GitHub",
    value: "github.com/sreenandana-s",
    href: profile.github,
    icon: GithubIcon,
    sub: "Repositories & Commits",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sreenandana-s",
    href: profile.linkedin,
    icon: Linkedin01Icon,
    sub: "Professional Network",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-neutral-200 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-5 border-b border-neutral-200">
          <div>
            <span className="section-tag font-mono">05 / Dialogue</span>
            <h2 className="section-title mt-2">Connect &amp; Collaborate</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Open for Opportunities &middot; 2026
          </span>
        </div>

        {/* Invitation Box */}
        <div className="relative border border-neutral-200 bg-white rounded-3xl p-8 sm:p-14 lg:p-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sage-light text-sage-dark rounded-full font-mono text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight">
              Let&rsquo;s engineer something thoughtful together.
            </h3>

            <p className="mt-4 text-base sm:text-lg text-charcoal-muted font-light leading-relaxed max-w-xl mx-auto">
              Currently seeking internship opportunities, software engineering
              collaborations, and conversations around scalable distributed architectures.
            </p>

            {/* Direct Email Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="btn-pill-primary"
              >
                <HugeiconsIcon icon={Mail01Icon} size={15} />
                <span>Write an Email</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-outline"
              >
                <HugeiconsIcon icon={File01Icon} size={15} />
                <span>View Resume</span>
              </a>

              <a
                href={profile.resumeUrl}
                download="Sreenandana_S_Resume.pdf"
                className="btn-pill-sage"
                title="Download Resume PDF"
              >
                <HugeiconsIcon icon={Download01Icon} size={15} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Contact Channels Grid */}
          <div className="mt-14 pt-10 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map(({ label, value, href, icon, sub, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="p-5 border border-neutral-200 bg-canvas-surface hover:bg-canvas-subtle rounded-2xl transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    {label}
                  </span>
                  <HugeiconsIcon
                    icon={icon}
                    size={17}
                    className="text-terracotta"
                  />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-charcoal block truncate">
                    {value}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 block mt-1">
                    {sub}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
