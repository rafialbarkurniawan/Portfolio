export interface Project {
  title: string;
  role: string;
  description: string;
  tags: string[];
  category: 'data-science' | 'web-dev';
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  category: 'data-science' | 'web-dev' | 'general';
  description: string;
  achievements: string[];
}

export const personalData = {
  name: "Rafi Albar Kurniawan",
  title: "Data Scientist & Full-Stack Web Developer",
  location: "Bekasi, Jawa Barat",
  phone: "+62-895-6173-88669",
  email: "rafialbar81@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafi-albar-kurniawan", // Placeholder with professional pattern
  github: "https://github.com/RafiAlbar", // Placeholder with professional pattern
  bioShort: "Lulusan Informatika Universitas Singaperbangsa Karawang (IPK 3.85) yang memadukan keahlian mendalam di bidang Data Science/NLP dengan kemampuan pengembangan web modern (ReactJS). Berpengalaman mengekstraksi wawasan berharga dari puluhan ribu data teks tidak terstruktur sekaligus merancang antarmuka web yang responsif, dinamis, dan berorientasi pengguna.",
  aboutStory: {
    academic: "Lulus dengan predikat sangat memuaskan (IPK 3.85) dari S1 Informatika Universitas Singaperbangsa Karawang, saya memfokuskan studi saya pada Machine Learning, khususnya Natural Language Processing (NLP) dan Topic Modeling. Selama masa studi, saya juga aktif di Study Club Web Development untuk mengasah kemampuan rekayasa perangkat lunak.",
    techLove: "Bagi saya, teknologi bukan hanya sekadar baris kode di layar digital. Saya terpesona oleh cara data menceritakan pola tersembunyi, serta bagaimana antarmuka digital yang dirancang dengan presisi dapat menyelesaikan masalah nyata pengguna. Saya selalu antusias mengeksplorasi integrasi antara model AI cerdas (seperti NLP/LLM) dan sistem web modern.",
    dataWebSynergy: "Kekuatan utama saya terletak pada penyatuan dua kutub teknologi: membongkar pola data teks yang kompleks lewat Natural Language Processing di sisi hulu, lalu menyajikannya dalam antarmuka web interaktif yang intuitif di sisi hilir. Sinergi ini menghadirkan solusi data yang siap pakai dan bernilai guna tinggi bagi pengguna."
  }
};

export const skillsData = [
  {
    category: "Data Science & AI",
    icon: "BrainCircuit",
    color: "emerald",
    items: [
      { name: "Natural Language Processing (NLP)", level: "Sangat Baik" },
      { name: "Topic Modeling (BERTopic, IndoBERT)", level: "Ahli" },
      { name: "Text Mining & Web Scraping", level: "Sangat Baik" },
      { name: "Data Visualization & Analytics", level: "Sangat Baik" },
      { name: "Machine Learning (HDBSCAN, UMAP)", level: "Sangat Baik" },
      { name: "Uji Statistik Non-Parametrik (McNemar)", level: "Baik" }
    ]
  },
  {
    category: "Web Development",
    icon: "Flame",
    color: "blue",
    items: [
      { name: "ReactJS & Modern JSX", level: "Sangat Baik" },
      { name: "Vite & Tailwind CSS", level: "Ahli" },
      { name: "JavaScript (ES6+) & HTML/CSS", level: "Ahli" },
      { name: "PHP & Basic Backend Programming", level: "Baik" },
      { name: "UI/UX & Responsive Web Design", level: "Sangat Baik" },
      { name: "Figma UI Prototype Translation", level: "Sangat Baik" }
    ]
  },
  {
    category: "Tools & Platfom",
    icon: "Cpu",
    color: "purple",
    items: [
      { name: "Git & Version Control", level: "Sangat Baik" },
      { name: "Jupyter Notebook & Python Stack", level: "Ahli" },
      { name: "Alibaba Cloud Computing (Certified)", level: "Tersertifikasi" },
      { name: "Microsoft Excel & Data Cleansing", level: "Sangat Baik" },
      { name: "XAMPP & MySQL Database", level: "Sangat Baik" },
      { name: "VS Code / Cursor / AI Dev Tooling", level: "Ahli" }
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    company: "Kementerian Komunikasi dan Digital (Kementerian Kominfo)",
    role: "Staff Support - Magang Mandiri Konversi",
    location: "Gambir, Jakarta Pusat",
    period: "Agustus 2024 - Desember 2024",
    category: "data-science",
    description: "Berperan aktif mendukung operasi pengolahan data serta pengujian dampak pelatihan berskala nasional.",
    achievements: [
      "Menyusun proyek akhir analisis dampak pelatihan operasional bisnis nasional dengan menerapkan metode pengujian statistik non-parametrik McNemar test.",
      "Memproses, membersihkan (cleansing), dan menganalisis kumpulan data historis peserta pelatihan nasional menggunakan Microsoft Excel untuk kebutuhan laporan eksekutif manajerial.",
      "Berhasil menyelesaikan sertifikasi Cloud Computing dari Alibaba Cloud untuk memperkuat pemahaman operasional data di ekosistem awan."
    ]
  },
  {
    company: "Studi Independen Infinite Learning (Batch 5)",
    role: "Front-end Developer & UI/UX Designer",
    location: "PT. Kinema Systrans Multimedia, Batam (Remote/Hybrid)",
    period: "Agustus 2023 - Desember 2023",
    category: "web-dev",
    description: "Berkolaborasi dalam tim lintas fungsi untuk membidani lahirnya aplikasi web edukatif dan e-commerce berbasis ReactJS.",
    achievements: [
      "Mengembangkan desain UI/UX interaktif dan ramah pengguna untuk platform lingkungan 'Earthlings' selaku Designer/Hipster.",
      "Mengintegrasikan fitur dinamis (pencarian lokasi, ulasan pengguna, dan rating) pada portal wisata lokal 'Indovista' selaku Designer/Hipster & Coder.",
      "Menggawangi implementasi fungsionalitas front-end e-commerce, etalase hunian, dan manajemen produk pada platform persewaan 'Hunikita' selaku Coder."
    ]
  },
  {
    company: "Universitas Singaperbangsa Karawang",
    role: "Sertifikasi Skripsi & Riset Akademis NLP",
    location: "Karawang, Jawa Barat",
    period: "2021 - 2026",
    category: "data-science",
    description: "Melakukan penelitian mutakhir bertema Analisis Sentimen dan Topic Modeling berbasis Transformer pada ribuan ulasan digital.",
    achievements: [
      "Mengekstraksi (web scraping) dan memproses lebih dari 25.000 baris data teks ulasan tidak terstruktur melalui pipeline NLP lengkap (normalisasi slangword, tokenisasi, stopword removal, dan stemming Indonesia).",
      "Mengimplementasikan arsitektur embedding IndoBERT base-p1 dikombinasikan dengan reduksi dimensi UMAP dan clustering spasial HDBSCAN.",
      "Memvalidasi representasi topik hasil BERTopic dengan skor koherensi C_V mencapai 0.665 serta pengujian stabilitas berbasis Jaccard Similarity menggunakan subsampling data."
    ]
  },
  {
    company: "Study Club Web Development Himpunan Informatika",
    role: "Anggota Aktif & Mentor Sebaya",
    location: "Universitas Singaperbangsa Karawang",
    period: "2022 - 2023",
    category: "web-dev",
    description: "Bergabung bersama komunitas mahasiswa peminat web developer untuk menyebarkan pemahaman web frontend di lingkungan kampus.",
    achievements: [
      "Memperdalam keahlian HTML5, CSS3, JavaScript modern, dan dasar-dasar framework ReactJS.",
      "Terlibat dalam sesi diskusi mingguan, bedah code, dan penyusunan prototipe website program kerja himpunan."
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Skripsi: Topic Modeling IndoBERT + BERTopic",
    role: "Lead Machine Learning Engineer & Researcher",
    description: "Sistem NLP canggih yang mengekstraksi topik ulasan pembeli aplikasi secara presisi menggunakan kombinasi Transformer, reduksi spasial, dan density-based clustering.",
    tags: ["Python", "IndoBERT", "BERTopic", "UMAP", "HDBSCAN", "Web Scraping"],
    category: "data-science",
    highlights: [
      "Scraping & cleaning 25.000+ baris teks ulasan aplikasi.",
      "Mencapai skor koherensi topik C_V sebesar 0.665.",
      "Aplikasi teknik NLP bahasa Indonesia: normalisasi kata tidak baku, stemming, dan stopword custom."
    ],
    githubUrl: "https://github.com/rafialbarkurniawan/Skripsi"
  },
  {
    title: "Hunikita - Online Housing & E-Commerce",
    role: "Full Frontend Developer",
    description: "Situs web marketplace penyewaan tempat tinggal (kos-kosan/kontrakan) yang berfokus pada pengembangan sisi frontend interaktif dengan integrasi database lokal (tanpa hosting backend luar).",
    tags: ["React.js", "Tailwind CSS", "JavaScript ES6", "Context API", "Local Database"],
    category: "web-dev",
    highlights: [
      "Menyusun visual landing page dan katalog hunian dengan grid responsif.",
      "Mengimplementasikan filter lokasi serta kategori pilihan tipe hunian (kos-kosan dan kontrakan) secara instan.",
      "Mengintegrasikan fitur interaktif frontend dengan skema penyimpanan data lokal."
    ],
    githubUrl: "https://github.com/rafialbarkurniawan/hunikita2",
    demoUrl: "https://hunikita2.vercel.app/"
  },
  {
    title: "Indovista - Local Travel Navigator",
    role: "UI/UX Designer & Coder",
    description: "Platform penjelajah wisata domestik Indonesia yang berfokus penuh pada penerjemahan presisi desain Figma high-fidelity ke dalam kode bersih HTML5, CSS3, dan JavaScript interaktif.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Figma To Code"],
    category: "web-dev",
    highlights: [
      "Membuat desain mockup hi-fi menggunakan Figma sebelum dikodifikasi secara presisi.",
      "Menerjemahkan layout desain Figma secara pixel-perfect ke HTML dan CSS murni.",
      "Membangun interaksi penjelajahan destinasi wisata dan feedback ulasan dinamis."
    ],
    githubUrl: "https://github.com/rafialbarkurniawan/IndoVista",
    demoUrl: "https://rafialbarkurniawan.github.io/IndoVista/"
  },
  {
    title: "Earthlings - Eco-Awareness Portal",
    role: "Lead UI/UX Designer & Researcher",
    description: "Portal edukasi kesadaran lingkungan berkelanjutan yang berfokus penuh pada proses riset pengguna, perancangan Figma UI/UX Design, dan pembuatan prototipe interaktif.",
    tags: ["Figma Design", "Prototyping", "UI/UX Research", "Wireframing"],
    category: "web-dev",
    highlights: [
      "Melakukan riset persona user untuk kriteria aksesibilitas informasi aksi hijau.",
      "Mendesain rancangan interaktif 15+ screen menggunakan auto-layout canggih di Figma.",
      "Menyusun visual prototype alur interaksi terperinci yang siap dipresentasikan."
    ],
    demoUrl: "https://www.figma.com/design/uG8PNEpVgzMisvW8uCTvbU/Wireframe?node-id=29-2&t=wthhKQHsrWJwS3CB-1"
  },
  {
    title: "Riset Dampak Pelatihan & Stats Dashboard",
    role: "Analyst Support",
    description: "Sistem pelaporan data historis pelatihan skala besar yang dianalisis dengan metode non-parametrik McNemar untuk menilai signifikan tidaknya peningkatan pemahaman sebelum vs sesudah program.",
    tags: ["Microsoft Excel", "McNemar Stats Test", "Data Cleansing", "Alibaba Cloud"],
    category: "data-science",
    highlights: [
      "Membersihkan ribuan record tumpang tindih dari ekosistem database historis kementerian.",
      "Melakukan visualisasi distribusi ketuntasan pasca pelatihan.",
      "Menerapkan uji korelasi biner berpasangan untuk metrik evaluasi bisnis."
    ]
  }
];
