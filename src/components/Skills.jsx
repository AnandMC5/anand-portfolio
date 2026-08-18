import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";

import { skillGroups } from "../data/skills";

const icons = {
  "data-engineering": Database,
  "ai-generative-ai": BrainCircuit,
  databases: Database,
  "data-platforms": Workflow,
  "development-tools": Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

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
            Skills
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use to
            <span className="text-gray-500">
              {" "}build.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            A combination of data engineering, backend
            development and Generative AI technologies used
            across my projects and professional work.
          </p>
        </motion.div>


        {/* Skill Groups */}

        <div className="mt-16 grid gap-5 lg:grid-cols-2">

          {skillGroups.map((group, index) => {

            const Icon =
              icons[group.id] || Terminal;

            return (
              <motion.article
                key={group.id}
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
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >

                {/* Group Header */}

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

                    <Icon
                      size={21}
                      className="text-gray-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {group.description}
                    </p>

                  </div>

                </div>


                {/* Skills */}

                <div className="mt-7 flex flex-wrap gap-2.5">

                  {group.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs text-gray-500 transition hover:border-white/20 hover:text-white"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* Core Strengths */}

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
            duration: 0.6,
          }}
          className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
        >

          <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
            Core Strengths
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-3">

            <Strength
              number="01"
              title="Data Systems"
              text="Designing reliable pipelines, validation frameworks and migration workflows for large datasets."
            />

            <Strength
              number="02"
              title="AI Applications"
              text="Turning LLMs, RAG and vector search into practical applications rather than simple chatbots."
            />

            <Strength
              number="03"
              title="Problem Solving"
              text="Debugging complex data issues and building reusable solutions for real-world engineering problems."
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}


function Strength({
  number,
  title,
  text,
}) {
  return (
    <div className="border-l border-white/10 pl-5">

      <p className="text-xs text-gray-600">
        {number}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {text}
      </p>

    </div>
  );
}