import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-ink-muted">
            A mix of collaborative builds and solo experiments, spanning
            backend systems, dashboards, and machine learning.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
