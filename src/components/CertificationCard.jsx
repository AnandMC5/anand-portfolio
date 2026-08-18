import { motion } from "framer-motion";
import {
  ExternalLink,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default function CertificationCard({
  certification,
  index,
}) {
  return (
    <motion.article
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
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >

      {/* Icon */}

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

          <Award
            size={20}
            className="text-gray-400"
          />

        </div>


        <span className="text-xs text-gray-600">
          {certification.issueDate}
        </span>

      </div>


      {/* Organization */}

      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gray-600">
        {certification.organization}
      </p>


      {/* Name */}

      <h3 className="mt-3 text-lg font-semibold leading-7">

        {certification.name}

      </h3>


      {/* Credential */}

      {certification.credentialId && (

        <p className="mt-4 break-all text-xs text-gray-600">

          Credential ID:{" "}

          <span className="text-gray-500">
            {certification.credentialId}
          </span>

        </p>

      )}


      {/* Skills */}

      <div className="mt-5 flex flex-wrap gap-2">

        {certification.skills
          .slice(0, 4)
          .map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-600"
            >
              {skill}
            </span>

          ))}

      </div>


      {/* Verify button */}

      <div className="mt-auto pt-7">

        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-gray-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
        >

          Verify Credential

          <ArrowUpRight size={15} />

          <ExternalLink size={13} />

        </a>

      </div>

    </motion.article>
  );
}