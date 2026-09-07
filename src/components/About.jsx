import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              About
            </h2>
            <p className="mt-4 text-ink-muted">
              A quick look at how I like to work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-ink/90">
              I&rsquo;m a Computer Science undergraduate at {profile.university}{" "}
              who likes taking a problem apart until the solution is obvious.
              Most of my time goes into backend systems and the APIs that
              connect them to real interfaces, but I&rsquo;m just as comfortable
              shaping the experience on the frontend. Some of that work
              happens solo, chasing a specific idea to completion; a lot of it
              happens in small teams, where I&rsquo;ve learned that a clean
              database schema and a clear conversation matter about equally.
              What keeps me interested is building things people actually
              use &mdash; whether that&rsquo;s a marketplace for local sellers
              or a dashboard that makes messy data legible.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-8">
              <div className="pill">
                <GraduationCap size={15} className="text-accent-glow" />
                {profile.university}
              </div>
              <div className="pill">
                <Sparkles size={15} className="text-accent-glow" />
                Backend-leaning full-stack developer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
