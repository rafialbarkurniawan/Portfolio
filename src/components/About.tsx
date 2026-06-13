import { motion } from "motion/react";
import { GraduationCap, Brain, Laptop, ChevronRight } from "lucide-react";
import { personalData } from "../data";

interface AboutProps {
  currentFocus: "combined" | "data-science" | "web-dev";
}

export default function About({ currentFocus }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <p className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
            01 / Latar Belakang
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Tentang Saya
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-400 to-blue-500 mt-3 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Story Panel (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl hover:border-slate-700/80 transition-all"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <GraduationCap className="w-5.5 h-5.5 text-emerald-400" />
                Perjalanan Akademis & Riset
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.aboutStory.academic}
              </p>
              <div className="mt-4 p-4 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <span className="font-mono font-bold text-sm">IPK</span>
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider text-left">Capaian Akademis Utama</h4>
                  <p className="text-slate-400 text-xs mt-0.5 text-left">Lulus dengan Indeks Prestasi Kumulatif <strong className="text-emerald-400">3.85 / 4.00</strong></p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl hover:border-slate-700/80 transition-all"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Laptop className="w-5.5 h-5.5 text-blue-400" />
                Visi Rekayasa & Kecintaan Menulis Kode
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.aboutStory.techLove}
              </p>
            </motion.div>
          </div>

          {/* Side Info Panel (Right 5 Columns) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 xl:flex xl:flex-col xl:space-y-6">
            
            {/* Unique Selling Point: Data & Web Synergy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-3xl shadow-xl relative overflow-hidden group"
            >
              {/* Highlight decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-all"></div>
              
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                <Brain className="w-4.5 h-4.5 text-emerald-400" />
                Sinergi Data & Pengembangan Web
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-left">
                {personalData.aboutStory.dataWebSynergy}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20">
                  NLP Integration
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">
                  Interactive Dashboard
                </span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">
                  Full-stack Delivery
                </span>
              </div>
            </motion.div>

            {/* Resume Summary Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <h3 className="text-white text-sm font-mono tracking-widest uppercase mb-4 text-emerald-400 text-left">
                INFO DATA DIRI / RESUME
              </h3>
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/60">
                  <span className="text-slate-500 font-mono">NAMA LENGKAP:</span>
                  <span className="text-slate-200 font-semibold">{personalData.name}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/60">
                  <span className="text-slate-500 font-mono">PENDIDIKAN:</span>
                  <span className="text-slate-200 font-semibold">S1 Informatika, UNSIKA</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/60">
                  <span className="text-slate-500 font-mono">DOMISILI:</span>
                  <span className="text-slate-200 font-semibold">{personalData.location}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/60">
                  <span className="text-slate-500 font-mono">EMAIL UTAMA:</span>
                  <a
                    id="link-about-email"
                    href={`mailto:${personalData.email}`}
                    className="text-emerald-400 hover:underline font-semibold"
                  >
                    {personalData.email}
                  </a>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-mono">STATUS:</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold uppercase text-[9px] border border-emerald-500/20">
                    Aktif / Siap Kerja
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800">
                <p className="text-[11px] text-slate-400 italic text-left">
                  &ldquo;Menggabungkan ketelitian matematika di balik NLP dengan fungsionalitas visual web modern merupakan dedikasi penuh harian saya.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
