import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  File01Icon,
  GithubIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-canvas/95 border-b border-neutral-300/80 backdrop-blur-none"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between py-5">
          {/* Editorial Brand / Logo */}
          <a
            href="#top"
            className="flex items-baseline gap-2.5 group"
          >
            <span className="font-serif text-lg tracking-[0.22em] font-medium text-charcoal uppercase">
              {profile.name}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              / Dev
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.18em] text-neutral-600 hover:text-charcoal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-neutral-600 hover:text-charcoal transition-colors"
              aria-label="GitHub Profile"
            >
              <HugeiconsIcon icon={GithubIcon} size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-neutral-600 hover:text-charcoal transition-colors"
              aria-label="LinkedIn Profile"
            >
              <HugeiconsIcon icon={Linkedin01Icon} size={18} />
            </a>

            <div className="h-4 w-[1px] bg-neutral-300" />

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-charcoal/20 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium text-charcoal hover:bg-neutral-100 transition-colors"
            >
              <HugeiconsIcon icon={File01Icon} size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-charcoal md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={22} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <nav className="border-t border-neutral-300 bg-canvas py-6 flex flex-col gap-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.16em] font-medium text-neutral-600 hover:text-charcoal px-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-300 flex flex-col gap-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-editorial-secondary w-full justify-center"
              >
                <HugeiconsIcon icon={File01Icon} size={15} />
                View Resume (PDF)
              </a>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="btn-editorial-primary w-full justify-center"
              >
                Let&rsquo;s Connect
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
