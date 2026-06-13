import { motion } from "motion/react";
import { BrainCircuit, Flame, Cpu, CheckCircle } from "lucide-react";
import { skillsData } from "../data";

interface SkillsProps {
  currentFocus: "combined" | "data-science" | "web-dev";
}

export default function Skills({ currentFocus }: SkillsProps) {
  
  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-6 h-6 text-emerald-400" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-slate-400" />;
    }
  };

  const getBackgroundColors = (color: string) => {
    switch (color) {
      case "emerald":
        return "from-emerald-500/10 to-teal-500/5 border-emerald-500/20";
      case "blue":
        return "from-blue-500/10 to-indigo-500/5 border-blue-500/20";
      case "purple":
        return "from-purple-500/10 to-pink-500/5 border-purple-500/20";
      default:
        return "from-slate-500/10 to-slate-650/5 border-slate-500/20";
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            02 / Keahlian Teknis
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Matriks Skill Terintegrasi
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
            Gabungan keahlian dari riset mutakhir data berbasis AI serta rekayasa perangkat lunak web yang interaktif.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            // Check if we should dim this block based on focus selection
            const isDsCategory = category.category.toLowerCase().includes("data science");
            const isWebCategory = category.category.toLowerCase().includes("web");
            
            let focusOpacityClass = "opacity-100 scale-100";
            if (currentFocus === "data-science" && isWebCategory) {
              focusOpacityClass = "opacity-40 grayscale-30 scale-98 transition-all duration-350";
            } else if (currentFocus === "web-dev" && isDsCategory) {
              focusOpacityClass = "opacity-40 grayscale-30 scale-98 transition-all duration-350";
            }

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-slate-900 rounded-3xl border ${getBackgroundColors(
                  category.color
                )} shadow-lg transition-transform hover:translate-y-[-2px] ${focusOpacityClass} p-6 sm:p-8`}
              >
                {/* Header kriteria */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-950/85 rounded-xl border border-slate-800 shadow-md">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide text-left">
                      {category.category}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider text-left">
                      Fokus CV: {category.color === "emerald" ? "Data Science & NLP" : category.color === "blue" ? "Web Frontend" : "Keahlian Umum"}
                    </p>
                  </div>
                </div>

                {/* Skill Item List */}
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, "-")}`} key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-400 transition-all"></span>
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Fake stylized graphic progress representation for modern aesthetic feel */}
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${
                            category.color === "emerald"
                              ? "from-emerald-500 to-teal-400"
                              : category.color === "blue"
                              ? "from-blue-500 to-indigo-500"
                              : "from-purple-500 to-pink-500"
                          }`}
                          style={{
                            width: skill.level === "Ahli" ? "95%" : skill.level === "Sangat Baik" ? "85%" : skill.level === "Tersertifikasi" ? "100%" : "75%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Quick Callout */}
        <div className="mt-12 text-center">
          <div className="text-xs text-slate-500 font-mono flex flex-wrap items-center justify-center gap-2">
            <span>Verified Certifications:</span>
            <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              Alibaba Cloud Certified Associate
            </span>
            <span className="text-slate-705 text-slate-600">•</span>
            <span className="text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
              Infinite Learning Web Specialist
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
