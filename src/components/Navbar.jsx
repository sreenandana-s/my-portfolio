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
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
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
          ? "bg-canvas/95 border-b border-neutral-200 backdrop-blur-none"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between py-5">
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 group"
          >
            <span className="font-serif text-xl tracking-tight font-medium text-charcoal">
              {profile.name}
            </span>
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-charcoal-muted hover:text-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-1 text-charcoal-muted hover:text-terracotta transition-colors"
              aria-label="GitHub Profile"
            >
              <HugeiconsIcon icon={GithubIcon} size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1 text-charcoal-muted hover:text-terracotta transition-colors"
              aria-label="LinkedIn Profile"
            >
              <HugeiconsIcon icon={Linkedin01Icon} size={18} />
            </a>

            <div className="h-4 w-[1px] bg-neutral-300" />

            {/* Terracotta Pill Button inspired by reference "Start subscription" button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-pill-primary !px-5 !py-2 text-[11px]"
            >
              <HugeiconsIcon icon={File01Icon} size={13} />
              <span>Resume</span>
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
          <nav className="border-t border-neutral-200 bg-canvas py-6 flex flex-col gap-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.12em] font-medium text-charcoal-muted hover:text-terracotta px-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-pill-primary w-full justify-center"
              >
                <HugeiconsIcon icon={File01Icon} size={14} />
                <span>View Resume (PDF)</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="btn-pill-outline w-full justify-center"
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
