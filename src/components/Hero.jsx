import { motion } from "framer-motion";
import { ArrowDown, Download, Github } from "lucide-react";
import GradientBackground from "./GradientBackground";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <GradientBackground />

      <div className="container-page relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="pill mb-8 w-fit text-ink-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {profile.university} &middot; {profile.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Building thoughtful digital
            <br className="hidden sm:block" /> experiences with code.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            I&rsquo;m <span className="text-ink font-medium">Sreenandana S</span>, a
            Computer Science student at {profile.university} passionate about
            backend engineering and modern web development. I enjoy building
            scalable applications using React, Node.js, Python, and PostgreSQL.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/[0.08] p-2.5 text-ink-muted sm:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
