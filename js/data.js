/* ==========================================================
   SEMUA ISI CV ADA DI FILE INI.
   Ubah di sini, maka web, CV ATS, dan CV Kreatif ikut berubah.
   ========================================================== */
window.CV_DATA = {
  name: "Ibnu Rijal Al Qodri, S.Pd.",
  shortName: "Ibnu Rijal Al Qodri",
  headline: "Lulusan Pendidikan Matematika | Pengembang Media Pembelajaran Interaktif & Web",
  tagline: "Mengubah matematika jadi interaktif, dari e-modul sampai web.",

  photo: "assets/foto.jpg", // ganti dengan file fotomu (rasio 1:1 atau 4:5)

  about:
    "Sebagai lulusan Sarjana Pendidikan Matematika, saya terlatih untuk berpikir logis dan terstruktur. Kini saya aplikasikan kemampuan tersebut dalam membangun UI <em>front-end web</em> yang bersih dan sistem administrasi data yang efisien. Dari mengelola <em>website</em> jurusan hingga merancang automasi operasional <em>serverless</em>, saya sangat menikmati proses menerjemahkan masalah kompleks menjadi solusi teknologi yang praktis. Selain eksekusi teknis, saya juga berpengalaman dalam kepemimpinan tim, manajemen operasional administrasi, serta memfasilitasi pelatihan teknologi. Saat ini, saya mencari tantangan baru di bidang <em>web development</em>, pengolahan data, atau administrasi operasional.",
    

  contact: {
    email: "ibnurijalalqodri@gmail.com",
    phone: "085773275428",          // dipakai di CV ATS
    wa: "6285773275428",            // dipakai untuk tombol WhatsApp (format internasional)
    instagram: "qodr.19",
    linkedin: "https://www.linkedin.com/in/ibnu-rijal-8b731b308",
    linkedinShort: "linkedin.com/in/ibnu-rijal-8b731b308"
  },

  stats: [
    { n: 62, label: "Peserta Pelatihan Coding" },
    { n: 21, label: "Asisten Lab Dipimpin" },
    { n: 19, label: "Asisten Lab Direkrut" },
    { n: 14, label: "Kegiatan <em>In House Training</em>" },
    { n: 25, label: "Sidang Skripsi Didukung" },
    { n: 22, label: "Konten <em>Website</em> Dipublikasi" }
  ],

  /* Topik yang ditawarkan sebagai pemateri */
  topics: [
    {
      title: "Membuat Media Pembelajaran Matematika Interaktif dengan GeoGebra",
      desc: "Dari grafik fungsi sampai transformasi geometri: membuat media interaktif yang langsung bisa dipakai di kelas.",
      audience: "Guru, Mahasiswa Pendidikan"
    },
    {
      title: "Otomasi Administrasi Guru dengan Google Sheets & Apps Script",
      desc: "Rekap nilai, presensi, dan dokumen rutin yang berjalan otomatis sehingga waktu guru kembali untuk mengajar.",
      audience: "Guru, Staf Administrasi"
    },
    {
      title: "Bikin <em>Website</em> Sendiri Tanpa Ribet: HTML, CSS, dan Hosting Gratis",
      desc: "Dari nol sampai punya CV <em>online</em> sendiri yang bisa dibagikan lewat tautan.",
      audience: "Mahasiswa, Pemula"
    },
    {
      title: "Menjadi Asisten Laboratorium yang Andal",
      desc: "Pengalaman memimpin 21 asisten laboratorium: rekrutmen, pelatihan, penjadwalan, dan pengelolaan laboratorium.",
      audience: "Calon Aslab, Mahasiswa"
    }
  ],

  /* Pengalaman berbicara dan melatih */
  speaking: [
    { date: "September 2023", title: "In House Training Aslab", topic: "Excel Dasar", participants: "13 aslab" },
    { date: "Mei 2024", title: "Rekrutmen Aslab 2024", topic: "Coding: Web CV", participants: "28 calon aslab" },
    { date: "April 2025", title: "In House Training Aslab", topic: "Coding: Web Interaktif", participants: "13 aslab" },
    { date: "Maret 2026", title: "Rekrutmen Aslab 2026", topic: "Coding: Web Dasar", participants: "22 calon aslab" },
    { date: "September 2026", title: "In House Training Aslab", topic: "Python Dasar", participants: "13 aslab" }
  ],

  /* Pengalaman kerja dan organisasi (urut dari yang berakhir paling baru) */
  experience: [
    {
      role: "Koordinator Asisten Laboratorium",
      org: "Laboratorium Pemrograman Komputer, Universitas Sultan Ageng Tirtayasa",
      period: "Juli 2024 - Juni 2025",
      points: [
        "Memimpin 21 asisten laboratorium: menyampaikan informasi dari kepala laboratorium dan jurusan, memantau capaian divisi, memfasilitasi evaluasi, serta mengelola arsip surat, inventaris, dan honorarium.",
        "Merekrut 19 aslab dalam tiga periode, menyusun materi pelatihan dan sistem penilaian, serta melaksanakan 14 kegiatan <em>In House Training</em>.",
        "Merintis buku tamu laboratorium digital berbasis SLiMS 9 Bulian dengan kartu lab, mengembangkan sistem piket kebersihan harian dan mingguan, dan mengaktifkan Instagram laboratorium dengan konten edukatif.",
        "Memelihara laboratorium: monitoring komputer mingguan, pencatatan barang rusak dan usang, penjadwalan piket, cable management, serta meneliti spesifikasi pengadaan 30 unit PC All-in-One.",
        "Menjadi asisten praktikum Algoritma dan Pemrograman untuk sekitar 35 mahasiswa."
      ],
      tags: ["Kepemimpinan", "Manajemen Lab", "SLiMS", "Algoritma & Pemrograman"]
    },
    {
      role: "Staf Pendukung Administrasi Jurusan",
      org: "Jurusan Pendidikan Matematika, Universitas Sultan Ageng Tirtayasa",
      period: "Agustus 2023 - Agustus 2025",
      points: [
        "Mendukung sekitar 20 seminar proposal, 25 sidang skripsi, dan 6 <em>workshop</em>/seminar jurusan.",
        "Memverifikasi kelengkapan lebih dari 100 berkas persyaratan mahasiswa.",
        "Menyiapkan dokumen kriteria penelitian akreditasi Magister Pendidikan Matematika dan dokumen kriteria pendidikan untuk 2 kali Asesmen Mutu Internal (AMI) program Sarjana.",
        "Berkontribusi pada akreditasi Baik Sekali program Magister dan masuknya program studi ke 3 besar penilaian terbaik AMI."
      ],
      tags: ["Administrasi", "Akreditasi", "Dokumentasi"]
    },
    {
      role: "Administrator Website Jurusan",
      org: "Jurusan Pendidikan Matematika, Universitas Sultan Ageng Tirtayasa",
      period: "Januari - Juli 2024",
      points: [
        "Mengelola, memelihara, dan mengembangkan <em>website</em> resmi jurusan berbasis WordPress, termasuk publikasi 22 konten berupa berita dan laman informasi.",
        "Merancang pembaruan desain halaman dan membuat halaman baru sesuai kebutuhan jurusan.",
        "Menjaga stabilitas teknis: memonitor kapasitas <em>storage</em> secara berkala serta mengelola konfigurasi dan akses <em>plugin</em>."
      ],
      tags: ["WordPress", "Konten Web", "Pemeliharaan"]
    },
    {
      role: "Asistensi Mengajar",
      org: "SMAN 4 Kota Serang, Kelas XI (48 siswa)",
      period: "September - Desember 2024",
      points: [
        "Mengajar materi program linear, matriks, dan transformasi geometri: menyusun RPP, membuat media pembelajaran, melaksanakan pembelajaran, serta menilai ulangan harian dan tugas.",
        "Mengawasi UTS, merekap, menganalisis, dan mengevaluasi perkembangan siswa sambil menjaga komunikasi dengan pihak sekolah.",
        "Menyusun dokumentasi dan laporan kegiatan, serta bertugas piket resepsionis.",
        "Membina ekstrakurikuler PIK-R beranggotakan sekitar 20 siswa."
      ],
      tags: ["Mengajar", "RPP", "Media Pembelajaran"]
    }
  ],

  education: {
    degree: "S1 Pendidikan Matematika",
    school: "Universitas Sultan Ageng Tirtayasa",
    year: "2026",
    gpa: "3,78",
    gpaScale: "dari 4,00",
    thesis: "Pengembangan E-Modul Interaktif dengan Pendekatan <em>Deep Learning</em> untuk Meningkatkan Kemampuan Berpikir Kritis Siswa"
  },

  projects: [
    {
      title: "Vellogent: Website Belajar SD",
      desc: "Website belajar daring untuk siswa SD, berisi materi kelas 1 sampai 6 per semester dan latihan soal berbentuk kuis sederhana yang dilengkapi panduan penggunaan. Dibuat berkelompok untuk UAS Algoritma dan Pemrograman. Saya memegang seluruh pengembangan kode, sedangkan anggota lain menyiapkan konten materi.",
      tags: ["HTML5", "CSS3", "JavaScript", "Vercel", "Kuis Interaktif", "Proyek Kelompok"],
      url: "https://vellogent.vercel.app/",
      cta: "Kunjungi Website"
    },
    {
      title: "E-Modul Interaktif (Skripsi)",
      desc: "Produk penelitian skripsi: e-modul interaktif dengan pendekatan <em>deep learning</em> untuk meningkatkan kemampuan berpikir kritis siswa.",
      tags: ["Canva", "E-Modul", "<em>Deep Learning</em>"],
      url: "https://emodulinteraktifrijal.my.canva.site/e-modul-interaktif",
      cta: "Buka E-Modul"
    },
    {
      title: "Website Jurusan Pendidikan Matematika",
      desc: "<em>Website</em> resmi jurusan berbasis WordPress yang saya kelola: 22 konten dipublikasi, desain halaman diperbarui, dan halaman baru dibuat sesuai kebutuhan.",
      tags: ["WordPress", "Administrasi Web"],
      url: "https://matematika.fkip.untirta.ac.id/",
      cta: "Kunjungi Website"
    },
    {
      title: "Buku Tamu Laboratorium Digital",
      desc: "Buku tamu digital untuk laboratorium jurusan yang saya rintis saat menjadi Koordinator Asisten Laboratorium. Dibangun di atas SLiMS 9 Bulian dan memakai kartu lab, sehingga pencatatan kunjungan lebih rapi dibanding buku tamu kertas.",
      tags: ["SLiMS 9 Bulian", "Kartu Lab", "Digitalisasi", "Manajemen Lab"],
      url: ""
    },
    {
      title: "CV Interaktif (halaman ini)",
      desc: "CV berbentuk web yang responsif, punya mode gelap, dan bisa diunduh sebagai CV Kreatif maupun CV ATS.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      url: ""
    }
  ],

  /* Keahlian (dikelompokkan). star = keahlian unggulan */
  skills: [
    {
      group: "Pengajaran & Pembelajaran",
      items: [
        { t: "Pembelajaran Berbasis Masalah & Proyek", star: true },
        { t: "Perancangan Pembelajaran" }
      ]
    },
    {
      group: "Media & Teknologi Pembelajaran",
      items: [
        { t: "PowerPoint", star: true }, { t: "Google Slides", star: true },
        { t: "GeoGebra", star: true },
        { t: "Wordwall", star: true }, { t: "Google Classroom" },
        { t: "Quizizz" }, { t: "Kahoot" }, { t: "Wayground" }
      ]
    },
    {
      group: "Analisis & Penelitian",
      items: [{ t: "Microsoft Excel", star: true }, { t: "Google Sheets", star: true }, { t: "SPSS" }]
    },
    {
      group: "Pemrograman & Web",
      items: [
        { t: "HTML5", star: true }, { t: "CSS3", star: true }, { t: "JavaScript", star: true },
        { t: "Python", star: true }, { t: "WordPress", star: true  }, { t: "PHP" }, { t: "Tailwind CSS" },
        { t: "Google Apps Script"}
      ]
    },
    {
      group: "Administrasi & Perkantoran",
      items: [
        { t: "Google Workspace", star: true }, 
        { t: "Microsoft Word", star: true }, { t: "Microsoft Excel", star: true }, { t: "Microsoft PowerPoint", star: true }]
    },
    {
      group: "Desain",
      items: [
        { t: "Canva", star: true }, { t: "Konsep UI/UX" }
        , { t: "Adobe Photoshop" }, { t: "Adobe Illustrator" }
      ]
    },
    {
      group: "Soft Skill",
      items: [
        { t: "Berpikir Kritis" },
        { t: "Pemecahan Masalah" },
        { t: "Komunikasi" },
        { t: "Kolaborasi" },
        { t: "Kerja Sama Tim" },
        { t: "Adaptif" },
        { t: "<em>Public Speaking</em>" },
        { t: "Kepemimpinan" }
      ]
    }
  ],

  /* Sertifikat. Taruh filenya di folder assets/ dengan nama sesuai "file" */
  certificates: [
    { title: "English Proficiency Test", score: "Skor 453", file: "assets/sertifikat-english.pdf" },
    { title: "Microsoft Excel Associate Certification Program", score: "Skor 831", detail: "Program 150 jam, 15 November - 16 Desember 2024", file: "assets/sertifikat-excel.pdf" }
  ]
};
