import { useState, useEffect } from "react";
import { Menu, X, Brain, Code, Layers, ShieldCheck } from "lucide-react";

interface NavbarProps {
  currentFocus: "combined" | "data-science" | "web-dev";
  setFocus: (focus: "combined" | "data-science" | "web-dev") => void;
}

export default function Navbar({ currentFocus, setFocus }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience & Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-slate-950 text-base shadow-md group-hover:scale-105 transition-transform">
              R
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-white font-bold tracking-tight text-lg hover:text-emerald-400 transition-colors">
                RAFI<span className="text-emerald-500">.ALBAR</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Linkages */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  id={`nav-desktop-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white font-medium text-sm transition-colors relative py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                id="btn-focus-combined"
                onClick={() => setFocus("combined")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  currentFocus === "combined"
                    ? "bg-slate-850 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Tampilkan semua data gabungan"
              >
                <Layers className="w-3.5 h-3.5 text-slate-300" />
                Gabungan
              </button>
              <button
                id="btn-focus-ds"
                onClick={() => setFocus("data-science")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  currentFocus === "data-science"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Fokus Data Science & NLP"
              >
                <Brain className="w-3.5 h-3.5 text-emerald-400" />
                Data Science
              </button>
              <button
                id="btn-focus-web"
                onClick={() => setFocus("web-dev")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  currentFocus === "web-dev"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Fokus Web Development"
              >
                <Code className="w-3.5 h-3.5 text-blue-400" />
                Web Dev
              </button>
            </div>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Minimal toggle in mobile */}
            <div className="flex bg-slate-900 border border-slate-800 p-0.5 rounded-lg text-[10px]">
              <button
                id="btn-mob-focus-combined"
                onClick={() => setFocus("combined")}
                className={`px-2 py-1 rounded ${
                  currentFocus === "combined"
                    ? "bg-slate-800 text-white"
                    : "text-slate-400"
                }`}
              >
                Dual
              </button>
              <button
                id="btn-mob-focus-ds"
                onClick={() => setFocus("data-science")}
                className={`px-2 py-1 rounded ${
                  currentFocus === "data-science"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-slate-400"
                }`}
              >
                DS
              </button>
              <button
                id="btn-mob-focus-web"
                onClick={() => setFocus("web-dev")}
                className={`px-2 py-1 rounded ${
                  currentFocus === "web-dev"
                    ? "bg-blue-500/20 text-blue-300"
                    : "text-slate-400"
                }`}
              >
                Web
              </button>
            </div>

            <button
              id="btn-mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/40 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                id={`nav-mobile-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white font-medium text-base hover:bg-slate-900 py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
              </a>
            ))}
          </div>

          <div className="p-3 border-t border-slate-800 mt-2">
            <p className="text-xs text-slate-500 font-mono mb-2 text-center uppercase tracking-wider">
              Tampilan Fokus Responsorial
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <button
                id="btn-drawer-focus-combined"
                onClick={() => {
                  setFocus("combined");
                  setIsOpen(false);
                }}
                className={`py-2 rounded-lg text-xs font-semibold ${
                  currentFocus === "combined"
                    ? "bg-slate-800 text-white border border-slate-700"
                    : "bg-slate-900 text-slate-400"
                }`}
              >
                Gabungan
              </button>
              <button
                id="btn-drawer-focus-ds"
                onClick={() => {
                  setFocus("data-science");
                  setIsOpen(false);
                }}
                className={`py-2 rounded-lg text-xs font-semibold ${
                  currentFocus === "data-science"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-slate-900 text-slate-400"
                }`}
              >
                Data Science
              </button>
              <button
                id="btn-drawer-focus-web"
                onClick={() => {
                  setFocus("web-dev");
                  setIsOpen(false);
                }}
                className={`py-2 rounded-lg text-xs font-semibold ${
                  currentFocus === "web-dev"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-slate-900 text-slate-400"
                }`}
              >
                Web Dev
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
