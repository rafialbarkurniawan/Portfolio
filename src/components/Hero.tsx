import { motion } from "motion/react";
import { Download, ArrowRight, Brain, Code, Sparkles, BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";
import { personalData } from "../data";

interface HeroProps {
  currentFocus: "combined" | "data-science" | "web-dev";
  setFocus: (focus: "combined" | "data-science" | "web-dev") => void;
}

export default function Hero({ currentFocus, setFocus }: HeroProps) {
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const downloadCV = (type: "data-science" | "web-dev") => {
    const filename = type === "data-science"
      ? "CV_Rafi Albar Kurniawan_DATA.pdf"
      : "CV_Rafi Albar Kurniawan_WEB.pdf";
    
    // Download the pre-made CV file from the public directory
    const link = document.createElement("a");
    link.href = `./${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const triggerDownload = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Dynamic content based on user's focus selection
  const titleData = {
    combined: {
      accent: "Full-Stack Tech Specialist",
      tagline: "Fusing Data Science & Responsive Web Solutions",
      description: "Lulusan S1 Informatika Universitas Singaperbangsa Karawang (IPK 3.85). Mengintegrasikan akurasi prediktif pemodelan NLP & Machine Learning dengan keindahan estetika interaksi web modern.",
      gradient: "from-emerald-400 via-teal-400 to-blue-500"
    },
    "data-science": {
      accent: "Data Scientist & NLP Specialist",
      tagline: "Unlocking Insights from Unstructured Language Data",
      description: "Menguasai Python Transformer (IndoBERT base-p1, BERTopic), UMAP, dan HDBSCAN. Berpengalaman mengekstrak, membersihkan, dan mengelompokkan ulasan pengguna berskala puluhan ribu baris data.",
      gradient: "from-emerald-400 via-teal-500 to-emerald-600"
    },
    "web-dev": {
      accent: "Frontend Web Developer & Designer",
      tagline: "Crafting High-Performance & Seamless User Interfaces",
      description: "Fokus pada pengembangan ekosistem web responsif (ReactJS, Vite, Tailwind CSS). Berpengalaman menerjemahkan purwarupa visual Figma menjadi sistem kode bersih, interaktif, dan optimal.",
      gradient: "from-blue-400 via-indigo-500 to-blue-600"
    }
  };

  const active = titleData[currentFocus];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background ambient lighting blobs */}
      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-emerald-500/10 blur-[80px] sm:blur-[120px] pointer-events-none transition-all duration-700"></div>
      <div className="absolute bottom-10 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-500/10 blur-[80px] sm:blur-[120px] pointer-events-none transition-all duration-700"></div>

      {/* Futuristic grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        {/* Sleek Alert Toast banner - no browser alert pop-up */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border-2 border-emerald-500/30 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-bounce">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="text-sm font-medium">
              <p className="text-slate-200">✅ {notification}</p>
              <p className="text-[10px] text-slate-400">Proses download CV dimulai secara otomatis...</p>
            </div>
          </div>
        )}

        {/* Decorative Status Badge */}
        <motion.div
          key={`badge-${currentFocus}`}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 mb-6 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Ready to Work</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            IPK: 3.85
          </span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl"
        >
          Halo, Saya{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent italic sm:not-italic font-black">
            {personalData.name}
          </span>
        </motion.h1>

        {/* Dynamic Focus Header */}
        <motion.div
          key={`title-${currentFocus}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 flex flex-col items-center"
        >
          <div className={`text-base sm:text-lg md:text-xl font-mono text-slate-400 tracking-wide font-semibold mt-2`}>
            —{" "}
            <span className={`bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}>
              {active.accent}
            </span>{" "}
            —
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mt-3 max-w-3xl">
            {active.tagline}
          </h2>
        </motion.div>

        {/* Short dynamic description */}
        <motion.p
          key={`desc-${currentFocus}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed"
        >
          {active.description}
        </motion.p>

        {/* Custom Focus Changer buttons on Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-2 justify-center items-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800"
        >
          <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest px-3">
            TAMPILAN PORTADUA INTERAKTIF:
          </span>
          <div className="flex gap-1">
            <button
              id="hero-toggle-combined"
              onClick={() => setFocus("combined")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                currentFocus === "combined"
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Semua
            </button>
            <button
              id="hero-toggle-ds"
              onClick={() => setFocus("data-science")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                currentFocus === "data-science"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Brain className="w-3 h-3 text-emerald-400" />
              Data Science
            </button>
            <button
              id="hero-toggle-web"
              onClick={() => setFocus("web-dev")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                currentFocus === "web-dev"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code className="w-3 h-3 text-blue-400" />
              Web Dev
            </button>
          </div>
        </motion.div>

        {/* Action Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          {/* Main CTA: View projects */}
          <a
            id="cta-view-projects"
            href="#projects"
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl hover:opacity-95 transition-all shadow-lg hover:shadow-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-500 group"
          >
            Pelajari Portofolio & Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA: Download CV Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              id="cta-download-cv-toggle"
              onClick={() => setDownloadDropdownOpen(!downloadDropdownOpen)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-350 bg-slate-900 border border-slate-800 rounded-xl hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              Unduh Versi CV
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${downloadDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {downloadDropdownOpen && (
              <div
                id="cv-download-menu"
                className="absolute right-0 left-0 sm:left-auto mt-2 w-full sm:w-72 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-20"
              >
                <div className="px-3 py-2 border-b border-slate-800 mb-1">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider text-left">
                    Pilih CV Sesuai Kebutuhan Rekrutmen:
                  </p>
                </div>
                <button
                  id="btn-download-cv-ds"
                  onClick={() => {
                    downloadCV("data-science");
                    triggerDownload("Mengunduh CV: Versi Data Science & AI");
                    setDownloadDropdownOpen(false);
                  }}
                  className="w-full flex items-start gap-2.5 p-2 text-left hover:bg-emerald-500/10 rounded-lg text-slate-300 hover:text-emerald-300 transition-all group"
                >
                  <Brain className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold">1. Versi Data Science & AI</span>
                    <span className="text-[10px] text-slate-400 leading-normal">Kemampuan NLP, BERTopic, Python, Excel & Cloud</span>
                  </div>
                </button>

                <button
                  id="btn-download-cv-web"
                  onClick={() => {
                    downloadCV("web-dev");
                    triggerDownload("Mengunduh CV: Versi Web Development / Frontend");
                    setDownloadDropdownOpen(false);
                  }}
                  className="w-full flex items-start gap-2.5 p-2 text-left hover:bg-blue-500/10 rounded-lg text-slate-300 hover:text-blue-300 transition-all group"
                >
                  <Code className="w-4 h-4 text-blue-400 mt-0.5" />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold">2. Versi Web Development / Frontend</span>
                    <span className="text-[10px] text-slate-400 leading-normal">Penguasaan ReactJS, HTML/CSS, Tailwind, Figma & Git</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Decorative Mini Stats Cards in Bento Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left"
        >
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm shadow-inner group hover:border-emerald-500/20 transition-all">
            <div className="flex items-center gap-2 mb-1.5 text-slate-400 text-xs font-mono">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              AKADEMIS
            </div>
            <p className="text-xl font-bold text-white tracking-tight">IPK 3.85</p>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Universitas Singaperbangsa Karawang</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm shadow-inner group hover:border-emerald-500/20 transition-all">
            <div className="flex items-center gap-2 mb-1.5 text-slate-400 text-xs font-mono">
              <Brain className="w-4 h-4 text-emerald-400" />
              S1 SKRIPSI
            </div>
            <p className="text-xl font-bold text-white tracking-tight">Transformer NLP</p>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">BERTopic + IndoBERT NLP Base</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm shadow-inner group hover:border-blue-500/20 transition-all">
            <div className="flex items-center gap-2 mb-1.5 text-slate-400 text-xs font-mono">
              <Code className="w-4 h-4 text-blue-400" />
              DEVELOPMENT
            </div>
            <p className="text-xl font-bold text-white tracking-tight">ReactJS & Vite</p>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Web Apps & UI/UX Figma</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm shadow-inner group hover:border-blue-500/20 transition-all">
            <div className="flex items-center gap-2 mb-1.5 text-slate-400 text-xs font-mono">
              <Sparkles className="w-4 h-4 text-blue-400" />
              SERTIFIKASI
            </div>
            <p className="text-xl font-bold text-white tracking-tight">Alibaba Cloud</p>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">Cloud Computing Certified</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
