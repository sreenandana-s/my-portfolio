import { motion } from "framer-motion";
import { ExternalLink, Github, Users } from "lucide-react";

const accentMap = {
  indigo: {
    from: "#6366F1",
    to: "#4338CA",
  },
  violet: {
    from: "#8B5CF6",
    to: "#6D28D9",
  },
};

function ProjectVisual({ name, accent }) {
  const colors = accentMap[accent] ?? accentMap.indigo;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl sm:h-full sm:w-56 sm:flex-none"
      style={{
        background: `linear-gradient(155deg, ${colors.from}33 0%, ${colors.to}1a 60%, transparent 100%)`,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`dots-${name}`}
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${name})`} />
      </svg>
      <span
        className="relative text-4xl font-semibold tracking-tight"
        style={{ color: colors.from }}
      >
        {initials}
      </span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group glass overflow-hidden rounded-3xl p-3 transition-shadow duration-300 hover:shadow-glass sm:p-4"
    >
      <div className="flex flex-col gap-6 sm:flex-row">
        <ProjectVisual name={project.name} accent={project.accent} />

        <div className="flex flex-1 flex-col p-2 sm:p-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
            {project.collaborative && (
              <span className="pill !py-1 !text-xs text-ink-muted">
                <Users size={12} />
                Collaborative project
              </span>
            )}
          </div>

          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            {project.description}
          </p>

          {project.contribution?.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                My contribution
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {project.contribution.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-ink/85"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent-glow" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-xs text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !py-2 !px-4 text-sm"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2 !px-4 text-sm"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
