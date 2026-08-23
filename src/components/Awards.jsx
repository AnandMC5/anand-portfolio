import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { awards } from "../data/awards";

const Awards = () => {
  return (
    <section id="awards" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest opacity-60">
            Recognition & Achievements
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Awards & Kudos
          </h2>

          <p className="mt-4 opacity-70 max-w-2xl mx-auto">
            A collection of awards, professional recognitions,
            certifications, internships, and project achievements.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border p-6 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-5">
                <Award size={32} />
              </div>

              {/* Category */}
              <p className="text-xs uppercase tracking-widest opacity-60">
                {award.category}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-2">
                {award.title}
              </h3>

              {/* Organization */}
              <p className="mt-2 opacity-70">
                {award.organization}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm opacity-70 flex-grow">
                {award.description}
              </p>

              {/* Button */}
              <a
                href={award.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Awards;