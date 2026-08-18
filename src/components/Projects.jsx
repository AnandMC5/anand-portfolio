import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { projects } from "../data/projects";

export default function Projects() {
  // Only visible projects are displayed
  const visibleProjects = projects.filter(
    (project) => project.visible !== false
  );

  return (
    <section
      id="projects"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Selected Work
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Projects built to
            <span className="text-gray-500">
              {" "}solve real problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            A collection of data engineering, Generative AI,
            RAG and intelligent application projects.
          </p>
        </motion.div>


        {/* =========================
            PROJECT GRID
        ========================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}


/* =================================
   PROJECT CARD
================================= */

function ProjectCard({
  project,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-white/20 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >

      {/* =========================
          PROJECT TOP AREA
      ========================== */}

      <div
        className={`relative overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent ${
          project.featured
            ? "min-h-[280px]"
            : "min-h-[230px]"
        }`}
      >

        {/* Background grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />


        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl transition duration-700 group-hover:bg-white/[0.08]" />


        {/* Project number */}

        <div className="absolute left-6 top-6 text-xs tracking-[0.3em] text-gray-500">
          {String(index + 1).padStart(2, "0")}
        </div>


        {/* Category */}

        <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-400 backdrop-blur-xl">
          {project.category}
        </div>


        {/* Featured badge */}

        {project.featured && (
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-gray-300 backdrop-blur-xl">

            <Sparkles size={13} />

            Featured Project

          </div>
        )}


        {/* Status */}

        <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-500 backdrop-blur-xl">
          {project.status}
        </div>

      </div>


      {/* =========================
          PROJECT CONTENT
      ========================== */}

      <div className="p-7 md:p-9">

        {/* Year */}

        <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
          {project.year}
        </p>


        {/* Title */}

        <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>


        {/* Short description */}

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-500">
          {project.shortDescription}
        </p>


        {/* Technologies */}

        <div className="mt-7 flex flex-wrap gap-2">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500"
            >
              {technology}
            </span>
          ))}

        </div>


        {/* =========================
            ACTIONS
        ========================== */}

        <div className="mt-8 flex flex-wrap gap-3">

          {/* Case Study */}

          <a
            href={`/projects/${project.id}`}
            className="case-study-button"
            >
            <span>View Case Study</span>
            <ArrowUpRight size={16} />
          </a>


          {/* GitHub */}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs text-gray-400 transition hover:border-white/20 hover:text-white"
            >
              <span className="font-semibold">
                GH
              </span>

              GitHub
            </a>
          )}


          {/* Live Demo */}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs text-gray-400 transition hover:border-white/20 hover:text-white"
            >
              <ExternalLink size={14} />

              Live Demo
            </a>
          )}

        </div>

      </div>

    </motion.article>
  );
}