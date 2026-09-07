import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/sreenandana-s",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sreenandana-s",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14"
        >
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-30 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <h2 className="relative text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let&rsquo;s build something worth shipping.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-ink-muted">
            Open to internships, collaborative projects, and conversations
            about backend engineering. Reach out any time.
          </p>

          <div className="relative mt-9 flex justify-center">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} />
              Let&rsquo;s Connect
            </a>
          </div>

          <div className="relative mt-10 grid gap-3 border-t border-white/[0.07] pt-8 sm:grid-cols-3">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noreferrer" : undefined}
                className="group flex items-center justify-center gap-2.5 rounded-2xl px-4 py-3 text-sm text-ink-muted transition-colors hover:bg-white/[0.05] hover:text-ink"
              >
                <Icon size={16} className="text-accent-glow" />
                <span className="truncate">{value}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
