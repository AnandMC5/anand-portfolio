import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Certifications",
    href: "#certifications",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  /*
   * Detect currently visible section
   */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Close mobile menu when resizing
   */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /*
   * Close mobile menu
   */

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">

        <nav
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#0b1120]/75
            px-4
            py-3
            shadow-2xl
            shadow-black/20
            backdrop-blur-2xl
            sm:px-5
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <a
            href="#home"
            onClick={handleNavigation}
            className="group flex items-center gap-3"
          >

            {/* Logo mark */}

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-blue-400/20
                bg-blue-400/[0.08]
                font-mono
                text-sm
                font-bold
                text-blue-300
                transition
                duration-300
                group-hover:border-blue-300/40
                group-hover:bg-blue-400/[0.14]
              "
            >
              A
            </div>

            {/* Name */}

            <div className="hidden sm:block">

              <p
                className="
                  font-['Space_Grotesk']
                  text-sm
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                Anand M C
              </p>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                "
              >
                Data • AI
              </p>

            </div>

          </a>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">

            {navItems.map((item) => {

              const sectionId =
                item.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    rounded-xl
                    px-3
                    py-2
                    text-xs
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-200"
                    }
                  `}
                >

                  {item.name}

                  {/* Active indicator */}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0.5
                        left-1/2
                        h-0.5
                        w-5
                        -translate-x-1/2
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_10px_rgba(96,165,250,0.8)]
                      "
                    />
                  )}

                </a>
              );
            })}

          </div>


          {/* =================================================
              DESKTOP CONTACT BUTTON
          ================================================== */}

          <a
            href="#contact"
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              border
              border-blue-400/20
              bg-blue-400/[0.08]
              px-4
              py-2.5
              text-xs
              font-semibold
              text-blue-200
              transition
              duration-300
              hover:border-blue-300/40
              hover:bg-blue-400/[0.14]
              hover:text-white
              lg:flex
            "
          >

            Let's Connect

            <ArrowUpRight size={14} />

          </a>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              setIsOpen((previous) => !previous)
            }
            aria-label={
              isOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-slate-300
              transition
              hover:border-white/20
              hover:bg-white/[0.08]
              hover:text-white
              lg:hidden
            "
          >

            {isOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}

          </button>

        </nav>


        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          className={`
            mx-auto
            mt-2
            max-w-7xl
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#0b1120]/95
            shadow-2xl
            shadow-black/30
            backdrop-blur-2xl
            transition-all
            duration-300
            lg:hidden

            ${
              isOpen
                ? "max-h-[600px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >

          <div className="p-3">

            {navItems.map((item) => {

              const sectionId =
                item.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    transition
                    duration-200

                    ${
                      isActive
                        ? "bg-blue-400/[0.08] text-white"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                    }
                  `}
                >

                  <span>
                    {item.name}
                  </span>

                  {isActive && (
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_10px_rgba(96,165,250,0.8)]
                      "
                    />
                  )}

                </a>
              );
            })}


            {/* Mobile contact */}

            <div className="my-2 border-t border-white/[0.06]" />

            <a
              href="#contact"
              onClick={handleNavigation}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-4
                py-3.5
                text-sm
                font-semibold
                text-slate-900
                transition
                hover:bg-blue-50
              "
            >

              Let's Connect

              <ArrowUpRight size={16} />

            </a>

          </div>

        </div>

      </header>
    </>
  );
}