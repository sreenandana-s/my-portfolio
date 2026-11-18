import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 bg-canvas">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-charcoal-muted">
        <div className="flex items-center gap-3">
          <span className="font-serif text-sm font-semibold text-charcoal">
            {profile.name}
          </span>
          <span className="text-neutral-300">&middot;</span>
          <span>IIIT Kottayam, Kerala</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-neutral-400">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
          <span className="text-neutral-300">&middot;</span>
          <a
            href="#top"
            className="hover:text-terracotta transition-colors underline underline-offset-4"
          >
            Back to Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
