import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
} from "lucide-react";

export default function ProjectCard({
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
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >

      {/* Top */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            {project.category}
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            {project.title}
          </h3>

        </div>


        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-600">
          {project.year}
        </span>

      </div>


      {/* Description */}

      <p className="mt-5 text-sm leading-6 text-gray-500">
        {project.shortDescription}
      </p>


      {/* Technologies */}

      <div className="mt-6 flex flex-wrap gap-2">

        {project.technologies
          .slice(0, 5)
          .map((technology) => (

            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500"
            >
              {technology}
            </span>

          ))}

      </div>


      {/* Status */}

      <div className="mt-6 flex items-center gap-2 text-xs text-gray-600">

        <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />

        {project.status}

      </div>


      {/* Buttons */}

      <div className="mt-auto flex flex-wrap gap-3 pt-8">

        <a
          href={`/projects/${project.id}`}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
        >

          View Project

          <ArrowUpRight size={15} />

        </a>


        {project.githubUrl && (

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-gray-400 transition hover:border-white/20 hover:text-white"
          >

            <Code2 size={16} />

            GitHub

            <ExternalLink size={13} />

          </a>

        )}

      </div>

    </motion.article>
  );
}