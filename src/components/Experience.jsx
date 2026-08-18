import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
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
            Experience
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            From migration
            <span className="text-gray-500">
              {" "}to intelligent systems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            My professional journey through telecom data
            migration, data engineering and increasingly
            AI-powered systems.
          </p>
        </motion.div>


        {/* =========================
            TIMELINE
        ========================== */}

        <div className="relative mt-20">

          {/* Timeline line */}

          <div className="absolute left-[17px] top-0 hidden h-full w-px bg-white/10 md:block" />


          <div className="space-y-12">

            {experience.map((item, index) => (

              <ExperienceItem
                key={item.id}
                item={item}
                index={index}
              />

            ))}

          </div>

        </div>


        {/* =========================
            CAREER SUMMARY
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
            duration: 0.6,
          }}
          className="mt-20 grid gap-5 md:grid-cols-3"
        >

          <SummaryCard
            value="3+"
            label="Years"
            description="Professional engineering experience"
          />

          <SummaryCard
            value="Multiple"
            label="Telecom BSS Projects"
            description="Migration and data transformation initiatives"
          />

          <SummaryCard
            value="AI + Data"
            label="Current Focus"
            description="Building intelligent data applications"
          />

        </motion.div>

      </div>
    </section>
  );
}


/* =================================
   EXPERIENCE ITEM
================================= */

function ExperienceItem({
  item,
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
      className="relative md:pl-14"
    >

      {/* Timeline dot */}

      <div className="absolute left-0 top-1 hidden h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#050505] md:flex">

        <div
          className={`h-2.5 w-2.5 rounded-full ${
            item.current
              ? "bg-white"
              : "bg-gray-600"
          }`}
        />

      </div>


      {/* Card */}

      <div
        className={`rounded-3xl border p-7 transition duration-300 md:p-9 ${
          item.current
            ? "border-white/20 bg-white/[0.04]"
            : "border-white/10 bg-white/[0.02]"
        } hover:border-white/20`}
      >

        {/* Top */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">

                {item.period}

              </span>

              {item.current && (

                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white">

                  Current Role

                </span>

              )}

            </div>


            <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">

              {item.role}

            </h3>


            <p className="mt-2 text-lg text-gray-400">

              {item.company}

            </p>

          </div>


          <div className="space-y-2 text-sm text-gray-600">

            <div className="flex items-center gap-2">

              <CalendarDays size={15} />

              {item.period}

            </div>

            <div className="flex items-center gap-2">

              <MapPin size={15} />

              {item.location}

            </div>

            <div className="flex items-center gap-2">

              <BriefcaseBusiness size={15} />

              {item.type}

            </div>

          </div>

        </div>


        {/* Description */}

        <p className="mt-8 max-w-4xl text-base leading-8 text-gray-500">

          {item.description}

        </p>


        {/* Responsibilities */}

        <div className="mt-9">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Responsibilities
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">

            {item.responsibilities.map(
              (responsibility) => (

                <div
                  key={responsibility}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0 text-gray-600"
                  />

                  <p className="text-sm leading-6 text-gray-500">

                    {responsibility}

                  </p>

                </div>

              )
            )}

          </div>

        </div>


        {/* Technologies */}

        <div className="mt-9">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Technologies
          </p>

          <div className="mt-4 flex flex-wrap gap-2">

            {item.technologies.map(
              (technology) => (

                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500"
                >

                  {technology}

                </span>

              )
            )}

          </div>

        </div>


        {/* Domains */}

        <div className="mt-7 flex flex-wrap gap-2">

          {item.domains.map(
            (domain) => (

              <span
                key={domain}
                className="text-xs text-gray-600"
              >

                #{domain.replaceAll(" ", "")}

              </span>

            )
          )}

        </div>

      </div>

    </motion.article>
  );
}


/* =================================
   SUMMARY CARD
================================= */

function SummaryCard({
  value,
  label,
  description,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">

      <p className="text-3xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-sm font-medium text-gray-300">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-gray-600">
        {description}
      </p>

    </div>
  );
}