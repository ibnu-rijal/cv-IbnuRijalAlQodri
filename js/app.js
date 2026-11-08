/* ==========================================================
   Render halaman dari CV_DATA + dark mode + tombol sticky
   ========================================================== */
(function () {
  "use strict";
  var d = window.CV_DATA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Ikon ---------- */
  function ico(p) { return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + p + "</svg>"; }
  var I = {
    up: ico('<path d="M12 19V5M5 12l7-7 7 7"/>'),
    sun: ico('<circle cx="12" cy="12" r="4"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>'),
    moon: ico('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
    download: ico('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>'),
    mail: ico('<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/>'),
    wa: ico('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'),
    linkedin: ico('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>'),
    instagram: ico('<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>'),
    ext: ico('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>'),
    copy: ico('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'),
    award: ico('<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>')
  };

  var c = d.contact;
  var waText = encodeURIComponent("Halo Kak Ibnu, saya ingin mengundang Kakak sebagai pemateri. Boleh kita diskusi dulu?");
  var waLink = "https://wa.me/" + c.wa + "?text=" + waText;
  var igLink = "https://instagram.com/" + c.instagram;

  function chips(arr, cls) {
    return '<div class="chips">' + arr.map(function (t) { return '<span class="chip ' + (cls || "") + '">' + t + "</span>"; }).join("") + "</div>";
  }
  function head(no, title) {
    return '<div class="sec-head"><span class="sec-no">&sect;' + no + "</span><h2>" + title + "</h2></div>";
  }

  /* ---------- Bagian-bagian halaman ---------- */
  function hero() {
    return '' +
    '<section class="hero" id="top"><div class="wrap">' +
      '<span class="float float--1" aria-hidden="true">f(x) = ax&sup2; + bx + c</span>' +
      '<span class="float float--2" aria-hidden="true">&pi; &int; &sum;</span>' +
      '<div class="hero__grid">' +
        '<div class="reveal">' +
          '<p class="eyebrow">Halo, saya</p>' +
          '<h1><span class="hl">' + d.name + '</span></h1>' +
          '<p class="hero__headline">' + d.headline + '</p>' +
          '<p class="hero__tagline">' + d.tagline + '</p>' +
          '<div class="cta">' +
            '<a class="btn btn--primary" href="' + waLink + '" target="_blank" rel="noopener">' + I.wa + ' Hubungi via WhatsApp</a>' +
            '<a class="btn" href="#topik">Lihat topik pemateri</a>' +
            '<a class="btn" href="mailto:' + c.email + '">' + I.mail + ' Email</a>' +
          '</div>' +
        '</div>' +
        '<div class="photo-card reveal">' +
          '<span class="tape" aria-hidden="true"></span>' +
          '<div class="photo-card__frame" id="photoFrame"><img src="' + d.photo + '" alt="Foto ' + d.shortName + '" width="320" height="400"></div>' +
          '<div class="graph" aria-hidden="true"><svg viewBox="0 0 140 90"><line class="axis" x1="8" y1="70" x2="132" y2="70"/><line class="axis" x1="70" y1="8" x2="70" y2="82"/><path class="curve" d="M18 12 Q70 128 122 12"/><text x="104" y="66">x</text><text x="74" y="16">y</text></svg></div>' +
        '</div>' +
      '</div>' +
      '<div class="stats">' +
        d.stats.map(function (s) {
          return '<div class="stat reveal"><div class="stat__n" data-n="' + s.n + '">0</div><div class="stat__l">' + s.label + "</div></div>";
        }).join("") +
      '</div>' +
    '</div></section>';
  }

  function about() {
    return '<section id="tentang"><div class="wrap reveal">' + head("01", "Tentang Saya") +
      '<div class="card"><p class="about">' + d.about + "</p></div></div></section>";
  }

  function topics() {
    return '<section id="topik"><div class="wrap">' + head("02", "Topik yang Bisa Saya Bawakan") +
      '<p class="sec-sub reveal">Materi pelatihan yang bisa saya sampaikan. Topik dan durasi bisa disesuaikan dengan kebutuhan acara.</p>' +
      '<div class="bento">' +
      d.topics.map(function (t, i) {
        return '<article class="card topic reveal"><span class="topic__no">' + String(i + 1).padStart(2, "0") + "</span>" +
          "<h3>" + t.title + "</h3><p>" + t.desc + '</p><div><span class="chip">' + t.audience + "</span></div></article>";
      }).join("") +
      '</div>' +
      '<div class="cta-row reveal"><a class="btn btn--primary" href="' + waLink + '" target="_blank" rel="noopener">' + I.wa + " Undang sebagai pemateri</a></div>" +
    '</div></section>';
  }

  function speaking() {
    return '<section id="pelatihan"><div class="wrap">' + head("03", "Pengalaman Pemateri & Pelatihan") +
      '<div class="speak">' +
      d.speaking.map(function (s) {
        return '<article class="card reveal"><div class="speak__date">' + s.date + "</div><h3>" + s.title + '</h3>' +
          '<span class="chip chip--star speak__topic">' + s.topic + '</span><div class="speak__who">' + s.participants + "</div></article>";
      }).join("") +
      '</div><p class="note reveal">Sebagai pemateri, saya juga menyusun materi pelatihan dan sistem penilaian evaluasinya.</p></div></section>';
  }

  function experience() {
    return '<section id="pengalaman"><div class="wrap">' + head("04", "Pengalaman") +
      '<div class="timeline">' +
      d.experience.map(function (e) {
        return '<article class="card tl reveal"><div class="tl__top"><h3>' + e.role + '</h3><span class="tl__period">' + e.period + "</span></div>" +
          '<div class="tl__org">' + e.org + "</div><ul>" +
          e.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" + chips(e.tags) + "</article>";
      }).join("") +
      '</div></div></section>';
  }

  function education() {
    var e = d.education;
    return '<section id="pendidikan"><div class="wrap">' + head("05", "Pendidikan") +
      '<div class="edu">' +
        '<article class="card reveal"><h3>' + e.degree + '</h3><div class="edu__meta">' + e.school + " &middot; Lulus Tahun " + e.year + "</div>" +
        '<div class="edu__thesis"><small>Judul skripsi</small>' + e.thesis + "</div></article>" +
        '<article class="card gpa reveal"><div class="gpa__n">' + e.gpa + '</div><div class="gpa__l">IPK ' + e.gpaScale + "</div></article>" +
      '</div></div></section>';
  }

  function projects() {
    return '<section id="proyek"><div class="wrap">' + head("06", "Proyek") +
      '<div class="projects">' +
      d.projects.map(function (p) {
        var btn = p.url ? '<div><a class="btn btn--sm" href="' + p.url + '" target="_blank" rel="noopener">' + (p.cta || "Kunjungi") + " " + I.ext + "</a></div>" : "";
        return '<article class="card proj reveal"><h3>' + p.title + "</h3><p>" + p.desc + "</p>" + chips(p.tags) + btn + "</article>";
      }).join("") +
      '</div></div></section>';
  }

  function skills() {
    return '<section id="skill"><div class="wrap">' + head("07", "Keahlian") +
      '<p class="legend reveal"><span class="chip chip--star">Disorot</span> menandai keahlian yang paling saya andalkan.</p>' +
      '<div class="skills">' +
      d.skills.map(function (g) {
        return '<article class="card skill reveal"><h3>' + g.group + '</h3><div class="chips">' +
          g.items.map(function (s) { return '<span class="chip ' + (s.star ? "chip--star" : "") + '">' + s.t + "</span>"; }).join("") +
          "</div></article>";
      }).join("") +
      '</div></div></section>';
  }

  function certs() {
    return '<section id="sertifikat"><div class="wrap">' + head("08", "Sertifikat") +
      '<div class="certs">' +
      d.certificates.map(function (s) {
        return '<article class="card cert reveal"><div class="cert__ico">' + I.award + '</div><div><h3>' + s.title + '</h3><div class="cert__score">' + s.score +
          '</div>' + (s.detail ? '<p class="note" style="margin:0 0 10px">' + s.detail + '</p>' : '') +
          '<a class="btn btn--sm" href="' + s.file + '" target="_blank" rel="noopener">Lihat sertifikat ' + I.ext + "</a></div></article>";
      }).join("") +
      '</div></div></section>';
  }

  function contact() {
    return '<section id="kontak"><div class="wrap">' + head("09", "Kontak") +
      '<div class="contact">' +
        '<article class="card reveal"><h3>Hubungi saya</h3>' +
          '<p class="note" style="margin:0 0 14px">Terbuka untuk undangan sebagai pemateri, kolaborasi, dan diskusi.</p>' +
          '<div class="links">' +
          '<a class="btn email" href="mailto:' + c.email + '">' + I.mail + " Email</a>" +
          '<a class="btn whatsapp" href="' + waLink + '" target="_blank" rel="noopener">' + I.wa + " WhatsApp</a>" +
          '<a class="btn instagram" href="' + igLink + '" target="_blank" rel="noopener">' + I.instagram + " Instagram</a>" +
          '<a class="btn linkedin" href="' + c.linkedin + '" target="_blank" rel="noopener">' + I.linkedin + " LinkedIn</a>" +
        "</div></article>" +
      '</div></div></section>';
  }

  function footer() {
    return '<div class="wrap"><p class="hand">Terima kasih sudah mampir!</p>' +
      "<p>&copy; 2026 - " + d.shortName + ".</p></div>";
  }

  /* ---------- Render ---------- */
  $("#main").innerHTML = hero() + about() + topics() + speaking() + experience() + education() + projects() + skills() + certs() + contact();
  $("#footer").innerHTML = footer();

  /* Foto cadangan jika file belum ada */
  var img = $("#photoFrame img");
  if (img) {
    img.addEventListener("error", function () {
      $("#photoFrame").innerHTML = '<span class="photo-card__mono">IR</span>';
    });
  }

  /* ---------- Animasi muncul + hitung angka ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function countUp(el) {
    var target = +el.dataset.n;
    if (reduce) { el.textContent = target; return; }
    var t0 = null, dur = 1100;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        var n = en.target.querySelector(".stat__n");
        if (n) countUp(n);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
    $$(".stat__n").forEach(function (el) { el.textContent = el.dataset.n; });
  }

  /* ---------- Toast ---------- */
  var toastEl = $("#toast"), toastTimer;
  function toast(msg, ms) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, ms || 2600);
  }

  /* ---------- Mode gelap ---------- */
  var themeBtn = $("#themeBtn");
  function applyThemeIcon() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.innerHTML = dark ? I.sun : I.moon;
    themeBtn.setAttribute("aria-pressed", String(dark));
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#16201d" : "#fdfbf4");
  }
  themeBtn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    applyThemeIcon();
  });
  applyThemeIcon();

  /* ---------- Menu unduh ---------- */
  var dlBtn = $("#dlBtn"), dlMenu = $("#dlMenu");
  dlBtn.innerHTML = I.download;
  function setMenu(open) {
    dlMenu.hidden = !open;
    dlBtn.setAttribute("aria-expanded", String(open));
  }
  dlBtn.addEventListener("click", function (e) { e.stopPropagation(); setMenu(dlMenu.hidden); });
  document.addEventListener("click", function (e) { if (!dlMenu.hidden && !dlMenu.contains(e.target)) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !dlMenu.hidden) { setMenu(false); dlBtn.focus(); } });

  $$("[data-dl]", dlMenu).forEach(function (btn) {
    btn.addEventListener("click", function () {
      var type = btn.dataset.dl;
      setMenu(false);
      dlBtn.classList.add("is-busy");
      toast("Menyiapkan PDF, mohon tunggu sebentar...", 8000);
      var job = type === "ats" ? window.CVPDF.ats(d) : window.CVPDF.creative(d);
      job.then(function () {
        toast("CV berhasil diunduh.");
      }).catch(function (err) {
        console.error(err);
        if (type === "creative") {
          toast("Unduh langsung gagal. Pilih 'Simpan sebagai PDF' pada jendela cetak.", 5000);
          window.CVPDF.creativePrint(d);
        } else {
          toast("Gagal membuat PDF. Periksa koneksi internet lalu coba lagi.", 4500);
        }
      }).then(function () { dlBtn.classList.remove("is-busy"); });
    });
  });

  /* ---------- Menu mobile (hamburger) ---------- */
  var nav = $("#nav"), navBtn = $("#navToggle"), navLinks = $("#navLinks");
  function setNav(open) {
    nav.classList.toggle("open", open);
    navBtn.setAttribute("aria-expanded", String(open));
    navBtn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  }
  navBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    setNav(!nav.classList.contains("open"));
  });
  $$("a", navLinks).forEach(function (a) {
    a.addEventListener("click", function () { setNav(false); });
  });
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") && !nav.contains(e.target)) setNav(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) { setNav(false); navBtn.focus(); }
  });
  window.addEventListener("resize", function () { if (window.innerWidth > 720) setNav(false); });

  /* ---------- Kembali ke atas ---------- */
  var topBtn = $("#topBtn");
  topBtn.innerHTML = I.up;
  function onScroll() { topBtn.classList.toggle("show", window.scrollY > 480); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
})();
