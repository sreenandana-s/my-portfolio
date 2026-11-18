import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-neutral-200 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-5 border-b border-neutral-200">
          <div>
            <span className="section-tag font-mono">03 / Works</span>
            <h2 className="section-title mt-2">Featured Projects</h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 max-w-sm text-left sm:text-right">
            Full-stack platforms, backend architectures, and machine learning models
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
