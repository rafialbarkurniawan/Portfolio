import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ExternalLink, Github, FolderGit2, BookOpen, Award, ArrowUpRight } from "lucide-react";
import { experiencesData, projectsData, Experience, Project } from "../data";

interface ProjectsProps {
  currentFocus: "combined" | "data-science" | "web-dev";
}

export default function Projects({ currentFocus }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<"experience" | "projects">("projects");
  const [projectFilter, setProjectFilter] = useState<"all" | "data-science" | "web-dev">("all");

  // Filter experiences based on active focus
  const filteredExperiences = experiencesData.filter((exp) => {
    if (currentFocus === "combined") return true;
    if (currentFocus === "data-science") return exp.category === "data-science" || exp.category === "general";
    if (currentFocus === "web-dev") return exp.category === "web-dev" || exp.category === "general";
    return true;
  });

  // Filter projects based on interactive tabs and active focus
  const filteredProjects = projectsData.filter((proj) => {
    // If we have a global focus, override state filter to emphasize consistency
    const effectiveCategoryFilter = currentFocus === "combined" ? projectFilter : currentFocus;
    if (effectiveCategoryFilter === "all") return true;
    return proj.category === effectiveCategoryFilter;
  });

  // Dedicated Certificate Card Data representing ACA & Dicoding
  const certificates = [
    {
      title: "Alibaba Cloud Certified Associate (ACA) - Cloud Computing",
      issuer: "Alibaba Cloud",
      date: "Des 2026 (Valid)",
      skills: ["Elastic Compute Service (ECS)", "Cloud Storage (OSS)", "Cloud Security (SLB, VPC)", "Deployment & Architecture"],
      badge: "ACA Certified",
      credentialId: "IACA01241200181773L"
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "13 November 2024",
      skills: ["OOP & Functional Programming", "Asynchronous Process", "Code Quality & ES Modules", "Syntax & Error Handling (Browser/Node)"],
      badge: "JavaScript",
      credentialId: "GRX540MO3P0M"
    },
    {
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia (Google Partner)",
      date: "21 Oktober 2024",
      skills: ["Fundamental Data Science", "Data Science Lifecycle & Analytics", "SQL, NoSQL, Excel & Tableau", "Intro to Machine Learning Portfolio"],
      badge: "Data Science",
      credentialId: "NVP74QK3WPR0"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono font-bold tracking-widest text-[#10b981] uppercase">
            03 / Portofolio & Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Pengalaman & Project Terpilih
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 mt-4 rounded-full mx-auto"></div>

          {/* Tab Selector Buttons */}
          <div className="flex justify-center mt-10">
            <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex items-center shadow-lg">
              <button
                id="tab-select-projects"
                onClick={() => setActiveTab("projects")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  activeTab === "projects"
                    ? "bg-slate-800 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FolderGit2 className="w-4 h-4 text-emerald-400" />
                Project Aplikasi ({projectsData.length})
              </button>
              <button
                id="tab-select-experience"
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  activeTab === "experience"
                    ? "bg-slate-800 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4 text-blue-400" />
                Riwayat Pengalaman ({experiencesData.length})
              </button>
            </div>
          </div>

          {/* Project Filtering (Sub-menu only shows if Tab = Projects and Global Focus = Combined) */}
          {activeTab === "projects" && currentFocus === "combined" && (
            <div className="flex justify-center gap-2 mt-6">
              {(["all", "data-science", "web-dev"] as const).map((filter) => (
                <button
                  id={`filter-proj-${filter}`}
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    projectFilter === filter
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                      : "bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-350"
                  }`}
                >
                  {filter === "all" ? "• SEMUA KATEGORI" : filter === "data-science" ? "⚡ DATA SCIENCE" : "💻 WEB DEV"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tab Content Rendering */}
        <AnimatePresence mode="wait">
          {activeTab === "projects" ? (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Dynamic Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    id={`project-card-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-slate-900 border border-slate-800 rounded-3xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-slate-700/80 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all text-left"
                  >
                    <div>
                      {/* Top banner visual placeholder representing focus */}
                      <div
                        className={`h-2.5 w-full bg-gradient-to-r ${
                          project.category === "data-science"
                            ? "from-emerald-500 to-teal-400"
                            : "from-blue-500 to-indigo-500"
                        }`}
                      ></div>

                      <div className="p-6">
                        {/* Tags list */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          <span
                            className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded-full uppercase border ${
                              project.category === "data-science"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            }`}
                          >
                            {project.category === "data-science" ? "Data Science" : "Web Dev"}
                          </span>
                        </div>

                        {/* Project Heading */}
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between gap-2 leading-snug">
                          {project.title}
                          <FolderGit2 className="w-4 h-4 text-slate-600 shrink-0" />
                        </h3>

                        {/* Project Role Subtitle */}
                        <p className="text-xs font-mono font-bold text-slate-500 mt-1 uppercase tracking-wider">
                          Peran: {project.role}
                        </p>

                        {/* Project Content Description */}
                        <p className="text-slate-400 text-sm mt-3.5 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="mt-5 space-y-2 border-t border-slate-800 pt-4">
                          <h4 className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                            Capaian Teknis / Kontribusi:
                          </h4>
                          <ul className="space-y-1.5">
                            {project.highlights.map((hilite, hIdx) => (
                              <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-emerald-500 mt-0.5 shrink-0">•</span>
                                <span>{hilite}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Footer Interactive Actions */}
                    <div className="px-6 pb-6 pt-4 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
                      {project.githubUrl ? (
                        <a
                          id={`link-project-github-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          GitHub Repository
                        </a>
                      ) : (
                        <span className="text-[10px] text-slate-600 font-mono italic">
                          {project.title.includes("Earthlings") ? "Design Portfolio Only" : "Private / Restricted Source"}
                        </span>
                      )}

                      {project.demoUrl ? (
                        <a
                          id={`link-project-demo-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-mono text-slate-500 hover:text-emerald-400 flex items-center gap-1 transition-all group/demo"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover/demo:text-emerald-400 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-all" />
                        </a>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>

                           {/* Extra Block: Dicoding & Ruang Teknik Karya Certificates */}
              <div className="mt-16 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Award className="w-5.5 h-5.5 text-amber-500" />
                      Sertifikasi & Pelatihan Khusus
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 text-left">
                      Kualifikasi eksternal pembangun kapabilitas teoretis dan aplikatif.
                    </p>
                  </div>
                  <div className="h-1 sm:h-auto w-12 bg-amber-500/20 sm:bg-transparent rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certificates.map((cert) => (
                    <div id={`cert-card-${cert.badge.toLowerCase().replace(/\s+/g, "-")}`} key={cert.title} className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl flex flex-col justify-between group hover:border-amber-500/20 transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25 uppercase">
                            {cert.badge}
                          </span>
                          <span className="text-slate-500 text-xs font-mono">{cert.date}</span>
                        </div>
                        <h4 className="text-white text-sm font-bold tracking-tight leading-snug group-hover:text-amber-300 transition-colors text-left font-sans">
                          {cert.title}
                        </h4>
                        <p className="text-slate-500 text-[11px] mt-1 italic text-left">{cert.issuer}</p>
                        {cert.credentialId && (
                          <p className="text-[10px] font-mono text-slate-500 mt-1 text-left block">
                            ID: <span className="text-emerald-400/80">{cert.credentialId}</span>
                          </p>
                        )}

                        <div className="mt-4 space-y-1">
                          {cert.skills.map((sk) => (
                            <p key={sk} className="text-[11px] text-slate-300 flex items-center gap-1.5 select-none text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-550 shrink-0"></span>
                              <span>{sk}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="experiences-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {/* Timeline Container */}
              <div className="relative border-l border-slate-800 ml-4 md:ml-32 py-4 space-y-12">
                {filteredExperiences.map((exp, index) => (
                  <motion.div
                    id={`exp-timeline-item-${exp.company.toLowerCase().replace(/\s+/g, "-")}`}
                    key={`${exp.company}-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative pl-6 md:pl-8 group"
                  >
                    {/* Time badge positioning (Absolute positioning hidden in mobile, visible in large md sizes) */}
                    <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {exp.period}
                    </div>

                    {/* Circular Timeline Indicator */}
                    <div
                      className={`absolute -left-2.5 top-2.5 w-5 h-5 rounded-full border-4 border-slate-950 flex items-center justify-center transition-all ${
                        exp.category === "data-science"
                          ? "bg-emerald-500 group-hover:scale-125"
                          : exp.category === "web-dev"
                          ? "bg-blue-500 group-hover:scale-125"
                          : "bg-slate-500 group-hover:scale-125"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>

                    {/* Timeline Content Card */}
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl hover:border-slate-700/80 transition-all text-left">
                      {/* Meta context */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                        <div className="text-left">
                          <h4 className="text-white text-base sm:text-lg font-bold group-hover:text-emerald-400 transition-colors">
                            {exp.role}
                          </h4>
                          <p className="text-emerald-400 text-sm font-semibold tracking-tight mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end font-mono text-[11px] text-slate-500 select-none">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-600" />
                            {exp.location}
                          </span>
                          <span className="md:hidden mt-0.5 text-emerald-500 font-bold">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Brief Overview text */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 text-left">
                        {exp.description}
                      </p>

                      {/* Achievements Block */}
                      <div className="space-y-2 border-t border-slate-800 pt-4">
                        <h4 className="text-[10px] font-mono tracking-widest text-slate-500 uppercase text-left">
                          Capaian Kerja & Kontribusi Utama:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, achIdx) => (
                            <li key={achIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed text-left">
                              <span className="text-emerald-400 mt-1 shrink-0">✔</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
