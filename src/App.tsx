import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { personalData } from "./data";

export default function App() {
  // 'combined' means show highlights of both Data Science & Web Developer CVs
  // 'data-science' means focus highlights on Python, NLP, BERT, statistics, Kominfo
  // 'web-dev' means focus highlights on React, frontend designs, Infinite Learning, Figma
  const [currentFocus, setFocus] = useState<"combined" | "data-science" | "web-dev">("combined");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Dynamic Ambient Background Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar currentFocus={currentFocus} setFocus={setFocus} />

        {/* Hero Banner Section */}
        <Hero currentFocus={currentFocus} setFocus={setFocus} />

        {/* Detailed About Us Section */}
        <About currentFocus={currentFocus} />

        {/* Technical Skills Map */}
        <Skills currentFocus={currentFocus} />

        {/* Experience & Projects Module */}
        <Projects currentFocus={currentFocus} />

        {/* Contact Module */}
        <Contact />

        {/* Footer */}
        <footer id="app-footer" className="bg-slate-950 border-t border-slate-800 py-12 relative z-10 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-slate-500 text-xs font-mono">
              <div>
                <p>© {new Date().getFullYear()} {personalData.name}. Seluruh Hak Cipta Dilindungi.</p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wide">
                  S1 Informatika - Universitas Singaperbangsa Karawang (Sangat Memuaskan)
                </p>
              </div>
              <p className="text-[11px] bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full inline-block">
                Mode Tampilan:{" "}
                <span className="text-emerald-400 font-bold uppercase">
                  {currentFocus === "combined" ? "Integrasi Gabungan" : currentFocus === "data-science" ? "Data Science & NLP" : "Web Developer"}
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
