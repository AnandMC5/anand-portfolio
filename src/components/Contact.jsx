import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  FileText,
} from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/AnandMC5",
    href: "https://github.com/AnandMC5",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anand-m-c-aa145526b",
    href: "https://www.linkedin.com/in/anand-m-c-aa145526b/",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/Anandmc_7777",
    href: "https://leetcode.com/u/Anandmc_7777/",
  },
  {
    label: "HackerRank",
    value: "hackerrank.com/profile/anandmc234",
    href: "https://www.hackerrank.com/profile/anandmc234",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            MAIN CTA
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
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-14 lg:p-20"
        >

          {/* Decorative elements */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full border border-white/5" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border border-white/5" />


          <div className="relative">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Let's Connect
            </p>


            <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">

              Let's build something
              <span className="text-gray-500">
                {" "}intelligent.
              </span>

            </h2>


            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-500">

              I'm interested in opportunities involving
              Data Engineering, AI Engineering, Generative AI
              and intelligent data platforms.

            </p>


            {/* CTA buttons */}

            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="mailto:anandmc234@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:scale-[1.02]"
              >

                <Mail size={17} />

                Email Me

                <ArrowUpRight size={15} />

              </a>


              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-gray-400 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >

                <FileText size={17} />

                View Resume

                <ArrowUpRight size={15} />

              </a>

            </div>

          </div>

        </motion.div>


        {/* =========================
            CONTACT INFORMATION
        ========================== */}

        <div className="mt-6 grid gap-5 md:grid-cols-3">

          {/* Email */}

          <motion.a
            href="mailto:anandmc234@gmail.com"
            initial={{
              opacity: 0,
              y: 20,
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
            }}
            className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.04]"
          >

            <Mail
              size={20}
              className="text-gray-500"
            />

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-600">
              Email
            </p>

            <p className="mt-2 break-all text-sm text-gray-400 group-hover:text-white">
              anandmc234@gmail.com
            </p>

          </motion.a>


          {/* Location */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.08,
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
          >

            <MapPin
              size={20}
              className="text-gray-500"
            />

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-600">
              Location
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Bangalore, India
            </p>

          </motion.div>


          {/* Availability */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.16,
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
          >

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Open to Opportunities
              </span>

            </div>

            <p className="mt-6 text-sm leading-6 text-gray-400">
              Data Engineering, AI Engineering and
              Generative AI opportunities.
            </p>

          </motion.div>

        </div>


        {/* =========================
            SOCIAL LINKS
        ========================== */}

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {contactLinks.map((link, index) => (

            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 20,
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
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                  {link.label}
                </p>

                <p className="mt-2 text-sm text-gray-400 group-hover:text-white">
                  {link.value}
                </p>

              </div>


              <ArrowUpRight
                size={19}
                className="text-gray-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              />

            </motion.a>

          ))}

        </div>


        {/* =========================
            FOOTER
        ========================== */}

        <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Anand M C
          </p>

          <p>
            Data Engineering • AI • Generative AI
          </p>

        </footer>

      </div>
    </section>
  );
}