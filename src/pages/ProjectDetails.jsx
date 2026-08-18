import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Code2,
} from "lucide-react";

import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === projectId
  );

  // =====================================================
  // PROJECT NOT FOUND
  // =====================================================

  if (!project) {
    return (
      <main className="min-h-screen bg-[#090d18] px-6 py-32 text-white">
        <div className="mx-auto max-w-4xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            404
          </p>

          <h1 className="mt-5 text-4xl font-bold text-white">
            Project not found
          </h1>

          <p className="mt-5 text-gray-400">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090d18] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl">

          {/* BACK */}

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-300"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>


          {/* CATEGORY */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-16 text-xs uppercase tracking-[0.3em] text-cyan-400"
          >
            {project.category}
          </motion.p>


          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-5 max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {project.title}
          </motion.h1>


          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-8 max-w-3xl text-xl leading-9 text-gray-300"
          >
            {project.description}
          </motion.p>


          {/* META */}

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-xs font-medium text-cyan-200">
              {project.year}
            </span>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2 text-xs font-medium text-emerald-300">
              {project.status}
            </span>

          </div>


          {/* =====================================================
              LINKS
          ===================================================== */}

          <div className="mt-9 flex flex-wrap gap-3">

            {/* GITHUB */}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-github-button"
              >
                <Code2 size={17} />

                <span>
                  GitHub
                </span>

                <ArrowUpRight size={15} />
              </a>
            )}


            {/* LIVE DEMO */}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-live-button"
              >
                <span>
                  Live Demo
                </span>

                <ExternalLink size={15} />
              </a>
            )}

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="border-t border-white/[0.08] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">

            {/* LEFT */}

            <div>

              {/* PROBLEM */}

              <CaseStudySection
                number="01"
                title="The Problem"
              >
                <p>
                  {project.problem}
                </p>
              </CaseStudySection>


              {/* SOLUTION */}

              <CaseStudySection
                number="02"
                title="The Solution"
              >
                <p>
                  {project.solution}
                </p>
              </CaseStudySection>


              {/* CHALLENGES */}

              <CaseStudySection
                number="03"
                title="Challenges"
              >

                <div className="space-y-4">

                  {project.challenges.map(
                    (challenge, index) => (
                      <div
                        key={challenge}
                        className="flex gap-4 border-b border-white/[0.08] pb-4"
                      >

                        <span className="text-xs font-medium text-cyan-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-gray-300">
                          {challenge}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </CaseStudySection>


              {/* RESULTS */}

              <CaseStudySection
                number="04"
                title="Results"
              >
                <p>
                  {project.results}
                </p>
              </CaseStudySection>


              {/* ARCHITECTURE */}

              <CaseStudySection
                number="05"
                title="Architecture"
              >

                <Architecture
                  architecture={project.architecture}
                />

              </CaseStudySection>

            </div>


            {/* =================================================
                RIGHT SIDEBAR
            ================================================= */}

            <aside>

              <div className="sticky top-24 rounded-3xl border border-white/[0.10] bg-slate-900/60 p-7 shadow-2xl backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Technology Stack
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-2 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>


                <div className="mt-8 border-t border-white/[0.08] pt-7">

                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Project Status
                  </p>

                  <p className="mt-3 text-sm font-medium text-emerald-300">
                    {project.status}
                  </p>

                </div>


                <div className="mt-7 border-t border-white/[0.08] pt-7">

                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Year
                  </p>

                  <p className="mt-3 text-sm font-medium text-gray-200">
                    {project.year}
                  </p>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEXT PROJECT
      ===================================================== */}

      <NextProject
        currentProject={project}
      />

    </main>
  );
}


/* =========================================================
   CASE STUDY SECTION
========================================================= */

function CaseStudySection({
  number,
  title,
  children,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
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
      }}
      className="mb-20"
    >

      <div className="flex items-center gap-4">

        <span className="text-xs font-medium tracking-[0.2em] text-cyan-500">
          {number}
        </span>

        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>

      </div>

      <div className="mt-7 text-base leading-8 text-gray-300">
        {children}
      </div>

    </motion.section>
  );
}


/* =========================================================
   ARCHITECTURE
========================================================= */

function Architecture({
  architecture,
}) {
  return (
    <div className="space-y-3">

      {architecture.map(
        (item, index) => (

          <div
            key={item}
            className="flex items-center gap-4"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] text-xs font-medium text-cyan-300">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="flex-1 rounded-xl border border-white/[0.08] bg-slate-900/60 px-5 py-4 text-sm text-gray-300">
              {item}
            </div>

          </div>

        )
      )}

    </div>
  );
}


/* =========================================================
   NEXT PROJECT
========================================================= */

function NextProject({
  currentProject,
}) {

  const visibleProjects = projects.filter(
    (project) => project.visible !== false
  );

  const currentIndex = visibleProjects.findIndex(
    (project) => project.id === currentProject.id
  );

  if (
    currentIndex === -1 ||
    visibleProjects.length <= 1
  ) {
    return null;
  }

  const nextProject =
    visibleProjects[
      (currentIndex + 1) % visibleProjects.length
    ];

  return (
    <section className="border-t border-white/[0.08] px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
          Next Project
        </p>

        <Link
          to={`/projects/${nextProject.id}`}
          className="group mt-6 block"
        >

          <div className="flex items-end justify-between gap-6">

            <div>

              <p className="text-sm text-gray-400">
                {nextProject.category}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white transition group-hover:text-cyan-300 md:text-5xl">
                {nextProject.title}
              </h2>

            </div>

            <ArrowUpRight
              size={30}
              className="shrink-0 text-gray-500 transition group-hover:text-cyan-300"
            />

          </div>

        </Link>

      </div>

    </section>
  );
}