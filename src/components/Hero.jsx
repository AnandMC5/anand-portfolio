import { motion } from "framer-motion";

import {
  Download,
  ArrowDown,
  Code2,
  BriefcaseBusiness,
  Database,
  BrainCircuit,
  Sparkles,
  Terminal,
  Cpu,
  Layers3,
  Zap,
} from "lucide-react";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const techStack = [
  "Python",
  "SQL",
  "PySpark",
  "FastAPI",
  "LLM",
  "RAG",
  "Qdrant",
  "MongoDB",
  "Docker",
];

/* =========================================================
   FLOATING CARDS
========================================================= */

const floatingCards = [
  {
    icon: Database,
    title: "Data Engineering",
    value: "ETL • Migration • Analytics",
    position: "left-0 top-8 md:-left-10 md:top-24",
    animation: {
      y: [0, -12, 0],
      rotate: [0, 1, 0],
    },
    color:
      "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
  },
  {
    icon: BrainCircuit,
    title: "Generative AI",
    value: "LLM • RAG • Agents",
    position: "right-0 bottom-12 md:-right-10 md:bottom-28",
    animation: {
      y: [0, 12, 0],
      rotate: [0, -1, 0],
    },
    color:
      "border-violet-400/20 bg-violet-400/[0.06] text-violet-300",
  },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        hero-section
        relative
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
        px-4
        pb-12
        pt-24
        sm:px-6
        sm:pb-16
        sm:pt-28
        lg:pb-16
        lg:pt-24
      "
    >
      {/* =====================================================
          HERO BACKGROUND
      ===================================================== */}

      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-center-glow" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-10
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-12
          xl:gap-16
        "
      >
        {/* ===================================================
            LEFT SIDE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-20"
        >
          {/* Availability */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/[0.06]
              px-4
              py-2
              backdrop-blur-md
              sm:mb-6
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_15px_rgba(52,211,153,0.7)]
                "
              />
            </span>

            <span className="text-xs font-medium tracking-wide text-emerald-200">
              Open to opportunities
            </span>
          </motion.div>

          {/* Role */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="
              mb-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-cyan-300/70
              sm:text-xs
              md:text-sm
              md:tracking-[0.32em]
            "
          >
            Senior Data Engineer • AI Engineer
          </motion.p>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              hero-title
              max-w-4xl
              text-[2.7rem]
              font-bold
              leading-[0.98]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-[4.4rem]
              xl:text-[5rem]
            "
          >
            Engineering

            <span className="hero-gradient-text block">
              data.
            </span>

            Building

            <span className="hero-muted-title block">
              intelligence.
            </span>
          </motion.h1>

          {/* Description */}

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
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-slate-300
              sm:mt-7
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            I design scalable data pipelines, migration systems
            and AI-powered applications that transform complex
            data into reliable, intelligent solutions.
          </motion.p>

          {/* Tech Stack */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.65,
              duration: 0.7,
            }}
            className="
              mt-6
              flex
              max-w-xl
              flex-wrap
              gap-2
              sm:mt-7
            "
          >
            {techStack.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.65 + index * 0.04,
                }}
                className="tech-pill"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mt-7
              flex
              flex-wrap
              gap-3
              sm:mt-8
              sm:gap-4
            "
          >
            <a
              href="#projects"
              className="
                portfolio-primary-button
                shimmer
                group
              "
            >
              <span>Explore Projects</span>

              <ArrowDown
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="portfolio-secondary-button"
            >
              <Download size={17} />

              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="
              mt-7
              flex
              items-center
              gap-3
              sm:mt-8
            "
          >
            <span
              className="
                mr-1
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-slate-500
                sm:mr-2
                sm:text-xs
              "
            >
              Connect
            </span>

            {/* GitHub */}

            <a
              href="https://github.com/AnandMC5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.035]
                text-slate-300
                transition
                hover:border-cyan-300/30
                hover:bg-cyan-300/[0.08]
                hover:text-cyan-200
                sm:h-10
                sm:w-10
              "
            >
              <Code2 size={18} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/anand-m-c-aa145526b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.035]
                text-slate-300
                transition
                hover:border-blue-300/30
                hover:bg-blue-300/[0.08]
                hover:text-blue-200
                sm:h-10
                sm:w-10
              "
            >
              <BriefcaseBusiness size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT SIDE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            relative
            flex
            min-h-[380px]
            items-center
            justify-center
            sm:min-h-[460px]
            lg:min-h-[560px]
            xl:min-h-[600px]
          "
        >
          {/* Large Glow */}

          <div
            className="
              absolute
              h-[280px]
              w-[280px]
              rounded-full
              bg-cyan-400/[0.07]
              blur-[80px]
              sm:h-[380px]
              sm:w-[380px]
              sm:blur-[100px]
              lg:h-[450px]
              lg:w-[450px]
            "
          />

          {/* =================================================
              OUTER ORBIT
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[270px]
              w-[270px]
              rounded-full
              border
              border-cyan-300/[0.12]
              sm:h-[370px]
              sm:w-[370px]
              lg:h-[440px]
              lg:w-[440px]
              xl:h-[480px]
              xl:w-[480px]
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-0
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_25px_rgba(103,232,249,0.9)]
                sm:h-2.5
                sm:w-2.5
              "
            />
          </motion.div>

          {/* =================================================
              SECOND ORBIT
          ================================================== */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[320px]
              w-[320px]
              rounded-full
              border
              border-violet-300/[0.10]
              sm:h-[430px]
              sm:w-[430px]
              lg:h-[500px]
              lg:w-[500px]
              xl:h-[550px]
              xl:w-[550px]
            "
          >
            <div
              className="
                absolute
                right-5
                top-1/2
                h-2
                w-2
                -translate-y-1/2
                rounded-full
                bg-violet-300
                shadow-[0_0_25px_rgba(167,139,250,0.9)]
                sm:right-7
                sm:h-2.5
                sm:w-2.5
              "
            />
          </motion.div>

          {/* =================================================
              THIRD ORBIT
          ================================================== */}

          <div
            className="
              absolute
              h-[240px]
              w-[240px]
              rounded-full
              border
              border-teal-300/[0.07]
              sm:h-[330px]
              sm:w-[330px]
              lg:h-[390px]
              lg:w-[390px]
              xl:h-[420px]
              xl:w-[420px]
            "
          />

          {/* =================================================
              PROFILE
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            {/* Outer Rings */}

            <div
              className="
                absolute
                -inset-4
                rounded-full
                border
                border-cyan-300/[0.12]
                sm:-inset-5
                lg:-inset-7
              "
            />

            <div
              className="
                absolute
                -inset-7
                rounded-full
                border
                border-violet-300/[0.07]
                sm:-inset-9
                lg:-inset-12
              "
            />

            {/* Image */}

            <div
              className="
                relative
                h-48
                w-48
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-slate-950
                shadow-[0_35px_120px_rgba(0,0,0,0.7)]
                sm:h-64
                sm:w-64
                md:h-[300px]
                md:w-[300px]
                lg:h-[340px]
                lg:w-[340px]
              "
            >
              <img
                src="/profile.jpg"
                alt="Anand M C"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* Image overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-tr
                  from-cyan-950/20
                  via-transparent
                  to-white/10
                "
              />

              {/* Image inner glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  shadow-[inset_0_0_80px_rgba(56,189,248,0.10)]
                "
              />
            </div>
          </motion.div>

          {/* =================================================
              FLOATING CARDS
          ================================================== */}

          {floatingCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                animate={card.animation}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  glass-card
                  absolute
                  z-20
                  ${card.position}
                  rounded-2xl
                  p-3
                  sm:p-4
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${card.color}
                      sm:h-10
                      sm:w-10
                    `}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-100">
                      {card.title}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {card.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* =================================================
              AI TERMINAL
          ================================================== */}

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="
              glass-card
              absolute
              bottom-0
              left-1/2
              z-20
              hidden
              w-60
              -translate-x-1/2
              rounded-2xl
              p-4
              lg:block
            "
          >
            <div className="flex items-center gap-2">
              <Terminal
                size={15}
                className="text-cyan-300"
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                AI System
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_12px_rgba(52,211,153,0.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-xs
                  text-slate-300
                "
              >
                system.status = "online"
              </span>
            </div>
          </motion.div>

          {/* =================================================
              CPU CARD
          ================================================== */}

          <motion.div
            animate={{
              rotate: [0, 3, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              right-0
              top-6
              z-20
              hidden
              rounded-2xl
              border
              border-violet-300/20
              bg-violet-300/[0.06]
              p-3
              text-violet-300
              backdrop-blur-xl
              lg:block
            "
          >
            <Cpu size={20} />
          </motion.div>

          {/* =================================================
              LAYERS CARD
          ================================================== */}

          <motion.div
            animate={{
              rotate: [0, -3, 0],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-16
              left-2
              z-20
              hidden
              rounded-2xl
              border
              border-cyan-300/20
              bg-cyan-300/[0.06]
              p-3
              text-cyan-300
              backdrop-blur-xl
              lg:block
            "
          >
            <Layers3 size={20} />
          </motion.div>

          {/* =================================================
              SPARKLE
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              absolute
              right-16
              top-24
              hidden
              text-cyan-300/50
              lg:block
            "
          >
            <Sparkles size={18} />
          </motion.div>

          {/* =================================================
              ZAP
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-28
              right-16
              hidden
              text-violet-300/50
              lg:block
            "
          >
            <Zap size={18} />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-500
          lg:flex
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll
        </span>

        <ArrowDown size={17} />
      </motion.div>
    </section>
  );
}