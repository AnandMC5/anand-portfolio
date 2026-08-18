import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  Code2,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const focusAreas = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Building reliable data pipelines, validation workflows, ETL processes and scalable data systems.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Developing practical AI applications using LLMs, RAG, embeddings, vector databases and local models.",
  },
  {
    icon: Code2,
    title: "Python Engineering",
    description:
      "Creating automation, data processing utilities, APIs and intelligent applications with Python.",
  },
  {
    icon: Workflow,
    title: "Data Platforms",
    description:
      "Working across databases, orchestration, APIs, data quality and modern engineering workflows.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Data engineering
            <span className="text-gray-500">
              {" "}meets AI.
            </span>
          </h2>
        </motion.div>


        {/* =========================
            INTRODUCTION
        ========================== */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <p className="text-xl leading-9 text-gray-300">
              I'm Anand M C, a Senior Data Migration Engineer
              working in the telecom BSS domain, with a strong
              focus on data engineering, Python and SQL.
            </p>

            <p className="mt-7 text-base leading-8 text-gray-500">
              My professional experience involves working with
              large datasets, data transformation, validation,
              reconciliation and migration across enterprise
              systems. I've worked with technologies including
              Oracle, MySQL, MongoDB, Cassandra and Python-based
              data processing tools.
            </p>

            <p className="mt-7 text-base leading-8 text-gray-500">
              Alongside my professional work, I'm building
              AI-powered applications and exploring modern
              AI engineering concepts such as LLMs, RAG,
              embeddings, vector databases, agents and
              intelligent data applications.
            </p>

            <p className="mt-7 text-base leading-8 text-gray-500">
              My goal is to combine strong data engineering
              fundamentals with AI engineering to build
              practical systems that solve real-world problems.
            </p>


            {/* Resume link */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 border-b border-white/20 pb-2 text-sm text-gray-300 transition hover:border-white hover:text-white"
            >
              View my resume
              <ArrowUpRight size={15} />
            </a>

          </motion.div>


          {/* =========================
              PROFILE SNAPSHOT
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
          >

            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              Profile
            </p>


            <div className="mt-7 space-y-6">

              <ProfileRow
                label="Role"
                value="Senior Data Migration Engineer"
              />

              <ProfileRow
                label="Experience"
                value="3+ Years"
              />

              <ProfileRow
                label="Domain"
                value="Telecom BSS"
              />

              <ProfileRow
                label="Primary Stack"
                value="Python • SQL • Databases"
              />

              <ProfileRow
                label="Current Focus"
                value="Data Engineering + AI"
              />

              <ProfileRow
                label="Location"
                value="Bangalore, India"
              />

            </div>

          </motion.div>

        </div>


        {/* =========================
            FOCUS AREAS
        ========================== */}

        <div className="mt-24">

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="text-xs uppercase tracking-[0.25em] text-gray-600"
          >
            What I Work On
          </motion.p>


          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {focusAreas.map((area, index) => {

              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
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
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                >

                  <Icon
                    size={22}
                    className="text-gray-500 transition group-hover:text-white"
                  />

                  <h3 className="mt-7 text-lg font-medium">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {area.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* =========================
            TECHNOLOGY MARQUEE
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 overflow-hidden border-y border-white/10 py-7"
        >

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.2em] text-gray-600">

            <span>Python</span>
            <span>SQL</span>
            <span>PySpark</span>
            <span>Oracle</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>Cassandra</span>
            <span>FastAPI</span>
            <span>RAG</span>
            <span>LLMs</span>
            <span>Vector DB</span>
            <span>Airflow</span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}


/* =================================
   PROFILE ROW
================================= */

function ProfileRow({
  label,
  value,
}) {
  return (
    <div className="border-b border-white/5 pb-5 last:border-0 last:pb-0">

      <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
        {label}
      </p>

      <p className="mt-2 text-sm text-gray-300">
        {value}
      </p>

    </div>
  );
}