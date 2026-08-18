import { motion } from "framer-motion";

import { certifications } from "../data/certifications";

import CertificationCard from "./CertificationCard";

export default function Certifications() {

  const visibleCertifications =
    certifications.filter(
      (certification) =>
        certification.visible
    );

  return (
    <section
      id="certifications"
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
            Certifications
          </p>


          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">

            Continuous
            <span className="text-gray-500">
              {" "}learning.
            </span>

          </h2>


          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">

            Certifications and credentials covering Python,
            SQL, data science, machine learning and
            Generative AI.

          </p>

        </motion.div>


        {/* Certification Grid */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {visibleCertifications.map(
            (certification, index) => (

              <CertificationCard
                key={certification.id}
                certification={certification}
                index={index}
              />

            )
          )}

        </div>


        {/* Count */}

        <p className="mt-8 text-center text-xs text-gray-600">

          {visibleCertifications.length} verified credentials

        </p>

      </div>

    </section>
  );
}