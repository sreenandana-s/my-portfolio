import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-ink-faint sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
