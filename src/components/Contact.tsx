import { useState, FormEvent } from "react";
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageSquareReply, Sparkles, AlertCircle } from "lucide-react";
import { personalData } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!name || !email || !message) {
      setErrorMessage("Harap lengkapi semua isian wajib sebelum mengirim.");
      return;
    }

    setIsSubmitting(true);

    // Format mailto prefilled contents
    const recipient = personalData.email;
    const emailSubject = encodeURIComponent(subject || `Diskusi Hubungan Kerja / Kolaborasi dari ${name}`);
    const emailBody = encodeURIComponent(
      `Nama Pengirim: ${name}\n` +
      `Alamat Email: ${email}\n\n` +
      `Pesan:\n${message}\n\n` +
      `--- dikirim melalui form kontak website portofolio ---`
    );
    
    const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Open mail client dynamically
      window.location.href = mailtoUrl;

      // Clear input fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Re-trigger visual alert fade-out after some time
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 8000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono font-bold tracking-widest text-[#10b981] uppercase">
            04 / Hubungi Saya
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Mulai Diskusi Kolaboratif
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Terbuka untuk posisi full-time, magang industri, riset data, ataupun proyek kontrak lepas. Mari bercakap-cakap!
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 mt-4 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Mari Terhubung!
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 text-left">
                Saya selalu antusias berdiskusi perihal peluang kerja baru, pemecahan bug backend/frontend, arsitektur model AI NLP, ataupun integrasi sistem web cerdas. Hubungi saya langsung di saluran berikut:
              </p>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                
                {/* Email Option */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 group hover:border-emerald-500/20 transition-all text-left">
                  <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 mt-0.5">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Email</span>
                    <a
                      id="link-contact-direct-email"
                      href={`mailto:${personalData.email}`}
                      className="text-slate-200 hover:text-emerald-400 font-semibold transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Option */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 group hover:border-blue-500/20 transition-all text-left">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 mt-0.5">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">No. Handphone / WA</span>
                    <a
                      id="link-contact-direct-phone"
                      href="https://wa.me/62895617388669"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-200 hover:text-blue-400 font-semibold transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* Location Option */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 group hover:border-slate-800 transition-all text-left">
                  <div className="p-2.5 bg-slate-500/10 rounded-lg text-slate-400 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Domisili</span>
                    <span className="text-slate-200 font-semibold">
                      {personalData.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Media Link Icons */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-center gap-4">
                <a
                  id="link-social-linkedin"
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-md group"
                  title="Lihat Profil LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  id="link-social-github"
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-md group"
                  title="Kunjungi Koleksi Project di GitHub"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 text-left">
                Kirim Pesan Langsung
              </h3>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Validation Error Message Box */}
                {errorMessage && (
                  <div
                    id="feedback-error-msg"
                    className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-xl flex items-center gap-2.5 text-amber-300 text-xs sm:text-sm animate-fade-in"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-amber-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Dual Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1.5">
                      Nama Lengkap <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/40 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1.5">
                      Alamat Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                      placeholder="contoh@gmail.com"
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/40 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1.5">
                    Subjek
                  </label>
                  <input
                    id="input-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Peluang Kerja / Kolaborasi / Diskusi Riset"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/40 transition-all font-sans"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-400 uppercase mb-1.5">
                    Pesan Anda <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="input-message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="Tuliskan detail poin pembahasan..."
                    rows={4}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/40 transition-all font-sans resize-none"
                  ></textarea>
                </div>

                {/* Submitting Feedback Success Box */}
                {submitSuccess && (
                  <div
                    id="feedback-success-msg"
                    className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl flex items-start gap-2.5 text-emerald-300 text-xs sm:text-sm animate-fade-in"
                  >
                    <MessageSquareReply className="w-5 h-5 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-bold">Membuka Aplikasi Email...</p>
                      <p className="text-emerald-400/80 mt-0.5">
                        Draf pesan Anda telah disiapkan! Aplikasi email default Anda akan segera terbuka secara otomatis. Cukup kirim draf tersebut untuk terhubung secara langsung dengan saya.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2 text-right">
                  <button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl hover:opacity-95 disabled:opacity-50 transition-all shadow-lg hover:shadow-emerald-500/10 focus:outline-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-1">
                        Sistem Mengirim...
                      </span>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
