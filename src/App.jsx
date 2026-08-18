import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  ArrowUpRight,
  Mail,
  Phone,
  Menu,
  X,
  Download,
  ExternalLink,
  MapPin,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ProjectDetails from "./pages/ProjectDetails";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

/* =========================================================
   MAIN PORTFOLIO
========================================================= */

function Portfolio() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleNavigation = (href) => {
    setMobileMenu(false);

    const id = href.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060b16] text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute left-[5%] top-[8%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />

        <div className="absolute right-[3%] top-[25%] h-[600px] w-[600px] rounded-full bg-violet-500/[0.07] blur-[170px]" />

        <div className="absolute bottom-[0%] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(125,211,252,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(125,211,252,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50">

        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">

          <nav className="navbar-glass rounded-2xl px-4 py-3">

            <div className="flex items-center justify-between">

              {/* LOGO */}

              <button
                onClick={() => handleNavigation("#home")}
                className="group flex items-center gap-3"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-sm font-bold text-cyan-300">
                  A
                </div>

                <div className="hidden sm:block">
                  <p className="text-sm font-semibold tracking-wide text-white">
                    Anand M C
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Data • AI • Engineering
                  </p>
                </div>

              </button>

              {/* DESKTOP NAV */}

              <div className="hidden items-center gap-1 lg:flex">

                {navigation.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="rounded-xl px-3 py-2 text-xs font-medium text-slate-400 transition hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                  >
                    {item.label}
                  </button>
                ))}

              </div>

              {/* RESUME */}

              <a
                href="/resume.pdf"
                download
                className="hidden items-center gap-2 rounded-xl bg-sky-300 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-sky-200 sm:flex"
              >
                <Download size={14} />
                Resume
              </a>

              {/* MOBILE */}

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="rounded-xl border border-white/10 p-2 text-slate-300 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenu ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>

            </div>

            {/* MOBILE MENU */}

            {mobileMenu && (
              <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">

                <div className="grid grid-cols-2 gap-2">

                  {navigation.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-left text-sm text-slate-400 transition hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                    >
                      {item.label}
                    </button>
                  ))}

                </div>

              </div>
            )}

          </nav>

        </div>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="relative z-10">
        <Hero />
      </div>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="relative z-10 scroll-mt-28 border-t border-white/[0.06] px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="01 / About"
            title="Engineering data into intelligence."
            description="A combination of data engineering, migration expertise and Generative AI."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

            <div className="rounded-3xl border border-white/[0.09] bg-[#0c1729]/80 p-8 shadow-2xl backdrop-blur-xl md:p-10">

              <p className="text-lg leading-8 text-slate-300">
                I am a Senior Data Migration Engineer working on
                large-scale telecom and enterprise data systems.
                My work involves designing reliable ETL pipelines,
                data validation frameworks, reconciliation mechanisms
                and migration architectures.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Alongside data engineering, I am building practical
                Generative AI applications using LLMs, RAG,
                embeddings, vector databases and FastAPI.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                I enjoy solving real-world engineering problems where
                large-scale data and intelligent systems come together.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <Stat value="100M+" label="Records Migrated" />

              <Stat value="3+" label="AI Projects" />

              <Stat value="3+" label="Telecom OpCos" />

              <Stat value="3+" label="Years Experience" />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <div
        id="experience"
        className="relative z-10 scroll-mt-28"
      >
        <Experience />
      </div>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <div
        id="projects"
        className="relative z-10 scroll-mt-28"
      >
        <Projects />
      </div>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <div
        id="skills"
        className="relative z-10 scroll-mt-28"
      >
        <Skills />
      </div>

      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      <div
        id="certifications"
        className="relative z-10 scroll-mt-28"
      >
        <Certifications />
      </div>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative z-10 scroll-mt-28 border-t border-white/[0.06] px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="07 / Contact"
            title="Let's build something useful."
            description="If you're hiring for data engineering, AI engineering or migration roles, I'd be happy to connect."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.7fr]">

            {/* Email + Mobile */}

              <div className="grid gap-6 md:grid-cols-2">

                {/* Email card */}
                <a
                  href="mailto:anandmc234@gmail.com"
                  className="group rounded-2xl border border-white/6 bg-white/[0.020] p-8 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] md:p-5"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Mail size={20} className="text-cyan-300" />
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="text-gray-600 transition group-hover:text-cyan-300"
                    />

                  </div>

                  <p className="mt-10 text-xs uppercase tracking-[0.25em] text-gray-500">
                    Email
                  </p>

                  <h3 className="mt-3 break-all text-xl font-semibold text-white md:text-2xl">
                    anandmc234@gmail.com
                  </h3>

                  <p className="mt-3 text-sm text-gray-500">
                    Click to send me an email
                  </p>

                </a>


                {/* Mobile */}
                <a
                  href="tel:+919535987114"
                  className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.04] md:p-5"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Phone size={21} className="text-emerald-300" />
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="text-gray-600 transition group-hover:text-emerald-300"
                    />

                  </div>

                  <p className="mt-10 text-xs uppercase tracking-[0.25em] text-gray-500">
                    Mobile
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                    +91 9535987114
                  </h3>

                  <p className="mt-3 text-sm text-gray-500">
                    Click to call me
                  </p>

                </a>

              </div>
            {/* SOCIAL */}

            <div className="grid gap-6">

              <SocialCard
                href="https://github.com/AnandMC5"
                icon={<Code2 size={20} />}
                title="GitHub"
                description="github.com/AnandMC5"
              />

              <SocialCard
                href="https://www.linkedin.com/in/anand-m-c-aa145526b/"
                icon={<BriefcaseBusiness size={20} />}
                title="LinkedIn"
                description="Connect with me"
              />

              <div className="rounded-3xl border border-white/[0.09] bg-[#0c1729]/80 p-7 shadow-xl backdrop-blur-xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
                    <MapPin size={20} />
                  </div>

                  <div>

                    <p className="font-semibold text-white">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Bangalore, India
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Anand M C. Built with React.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/AnandMC5"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/anand-m-c-aa145526b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="max-w-4xl">

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        {description}
      </p>

    </div>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
  value,
  label,
}) {
  return (
    <div className="flex min-h-[170px] flex-col justify-between rounded-3xl border border-white/[0.09] bg-[#0c1729]/80 p-6 shadow-xl backdrop-blur-xl">

      <div className="text-3xl font-bold text-cyan-300">
        {value}
      </div>

      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>

    </div>
  );
}

/* =========================================================
   SOCIAL CARD
========================================================= */

function SocialCard({
  href,
  icon,
  title,
  description,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-3xl border border-white/[0.09] bg-[#0c1729]/80 p-7 shadow-xl backdrop-blur-xl transition hover:border-cyan-400/25 hover:bg-[#102038]"
    >

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
          {icon}
        </div>

        <div>

          <p className="font-semibold text-white">
            {title}
          </p>

          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>

        </div>

      </div>

      <ArrowUpRight
        size={18}
        className="text-slate-500 transition group-hover:text-cyan-300"
      />

    </a>
  );
}

/* =========================================================
   ROUTES
========================================================= */

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Portfolio />}
      />

      <Route
        path="/projects/:projectId"
        element={<ProjectDetails />}
      />

    </Routes>
  );
}