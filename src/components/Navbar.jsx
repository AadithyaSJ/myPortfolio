import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, github } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter links for center dock (Contact becomes the primary CTA on the right)
  const dockLinks = navLinks.filter((nav) => nav.id !== "contact");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3.5 px-4 sm:px-8 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-300 ${scrolled
          ? "backdrop-blur-2xl bg-[#090616]/90 border border-white/10 py-2.5 px-4 sm:px-6 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          : "backdrop-blur-xl bg-[#0b081c]/75 border border-white/10 py-3 px-4 sm:px-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          }`}
      >
        {/* Left: Brand Identity & Live Status Beacon */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative w-9 h-9 rounded-full p-[1px] bg-gradient-to-tr from-purple-500/60 to-indigo-500/20 shadow-md">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain rounded-full bg-[#07050e]"
            />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="text-white text-[15px] font-bold tracking-tight group-hover:text-purple-300 transition-colors">
                Aadithya S J
              </span>
            </div>
            <span className="hidden sm:block text-[11px] text-white/45 font-mono">
              2× SIH Winner • Full-Stack & AI
            </span>
          </div>
        </Link>

        {/* Center: Segmented Floating Pill Dock (Desktop) */}
        <ul className="list-none hidden md:flex flex-row items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/5">
          {dockLinks.map((nav) => {
            const isActive = active === nav.title;
            return (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 block ${isActive
                    ? "text-white bg-white/10 shadow-sm border border-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                    }`}
                >
                  {nav.title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Quick Social & Direct CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/AadithyaSJ"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.08] flex items-center justify-center transition-colors"
            title="GitHub Profile"
          >
            <img src={github} alt="GitHub" className="w-4 h-4 object-contain opacity-75 hover:opacity-100" />
          </a>

          <a
            href="#contact"
            onClick={() => setActive("Contact")}
            className="px-4 py-1.5 rounded-full bg-[#6d28d9] hover:bg-[#5b21b6] text-white text-[13px] font-semibold flex items-center gap-1.5 transition-colors duration-200 shadow-[0_0_15px_rgba(109,40,217,0.35)]"
          >
            Let's Talk
            <span className="text-[12px]">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#contact"
            onClick={() => setActive("Contact")}
            className="px-3 py-1 rounded-full bg-[#6d28d9] text-white text-[11px] font-semibold sm:hidden"
          >
            Talk
          </a>

          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Menu"
            className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex flex-col items-center justify-center gap-1 focus:outline-none"
          >
            <span
              className={`w-4 h-[2px] bg-white transition-all duration-300 ${toggle ? "rotate-45 translate-y-[6px]" : ""
                }`}
            />
            <span
              className={`w-4 h-[2px] bg-white transition-all duration-300 ${toggle ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-4 h-[2px] bg-white transition-all duration-300 ${toggle ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {toggle && (
          <div className="md:hidden absolute top-16 left-4 right-4 p-5 rounded-2xl bg-[#0b081c]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-3">
            <ul className="list-none flex flex-col gap-2">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                    className={`block px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${active === nav.title
                      ? "text-white bg-purple-600/30 border border-purple-500/40"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[12px] font-mono text-white/50">aadithyasuresh2725@gmail.com</span>
              <a
                href="https://github.com/AadithyaSJ"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
              >
                <img src={github} alt="GitHub" className="w-4 h-4 object-contain opacity-80" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;