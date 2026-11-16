import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-neutral-300 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-300">
          <div>
            <span className="section-tag font-mono">03 / Works</span>
            <h2 className="section-title mt-2">Featured Projects</h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 max-w-sm text-left sm:text-right">
            Full-stack platforms, backend architectures, and machine learning models
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
