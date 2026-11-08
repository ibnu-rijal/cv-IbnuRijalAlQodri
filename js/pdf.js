/* ==========================================================
   Pembuat PDF di browser.
   - CV ATS    : jsPDF, teks asli satu kolom (terbaca sistem ATS)
   - CV Kreatif: html2pdf, tampilan desain dari data yang sama
   Library dimuat hanya saat tombol unduh ditekan.
   ========================================================== */
(function () {
  "use strict";

  var LIBS = {
    jspdf: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    html2pdf: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
  };
  var loaded = {};
  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src; s.async = true;
      s.onload = resolve;
      s.onerror = function () { delete loaded[src]; reject(new Error("Gagal memuat " + src)); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }

  /* Pastikan karakter aman untuk font standar PDF */
  function clean(t) {
    return String(t)
      .replace(/[–—]/g, "-")
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/ /g, " ");
  }

  /* ======================= CV ATS ======================= */
  function ats(d) {
    return loadScript(LIBS.jspdf).then(function () {
      var jsPDF = window.jspdf.jsPDF;
      var doc = new jsPDF({ unit: "pt", format: "a4" });
      var PW = doc.internal.pageSize.getWidth();
      var PH = doc.internal.pageSize.getHeight();
      var M = 44, W = PW - M * 2, y = M;

      function need(h) { if (y + h > PH - M) { doc.addPage(); y = M; } }

      function para(t, o) {
        o = o || {};
        var size = o.size || 10, lh = size * 1.38;
        doc.setFont("helvetica", o.bold ? "bold" : (o.italic ? "italic" : "normal"));
        doc.setFontSize(size); doc.setTextColor(0);
        doc.splitTextToSize(clean(t), W).forEach(function (l) {
          need(lh); doc.text(l, M, y + size * 0.85); y += lh;
        });
        y += (o.gap == null ? 2 : o.gap);
      }
      function bullet(t) {
        var size = 10, lh = size * 1.38;
        doc.setFont("helvetica", "normal"); doc.setFontSize(size); doc.setTextColor(0);
        doc.splitTextToSize(clean(t), W - 14).forEach(function (l, i) {
          need(lh);
          if (i === 0) doc.text("-", M + 3, y + size * 0.85);
          doc.text(l, M + 14, y + size * 0.85);
          y += lh;
        });
        y += 1.5;
      }
      function heading(t) {
        need(34); y += 8;
        doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(0);
        doc.text(clean(t).toUpperCase(), M, y + 9);
        y += 13;
        doc.setLineWidth(0.7); doc.setDrawColor(0); doc.line(M, y, M + W, y);
        y += 6;
      }
      function rowLR(left, right) {
        need(16);
        doc.setFont("helvetica", "bold"); doc.setFontSize(10.5); doc.setTextColor(0);
        doc.text(clean(left), M, y + 9);
        doc.setFont("helvetica", "normal");
        doc.text(clean(right), M + W, y + 9, { align: "right" });
        y += 14;
      }

      var c = d.contact;

      /* Header */
      doc.setFont("helvetica", "bold"); doc.setFontSize(20); doc.setTextColor(0);
      doc.text(clean(d.name), M, y + 18); y += 26;
      para(d.headline, { size: 10.5, gap: 3 });

      /* Baris kontak dengan tautan */
      var items = [
        { t: c.email, url: "mailto:" + c.email },
        { t: c.phone },
        { t: c.linkedinShort, url: c.linkedin },
        { t: "Instagram: @" + c.instagram, url: "https://instagram.com/" + c.instagram }
      ];
      doc.setFont("helvetica", "normal"); doc.setFontSize(9.5);
      var x = M, sep = "  |  ", sepW = doc.getTextWidth(sep);
      items.forEach(function (it, i) {
        var w = doc.getTextWidth(it.t);
        if (x + w > M + W) { x = M; y += 13; }
        doc.setTextColor(0);
        if (it.url) { doc.textWithLink(it.t, x, y + 9, { url: it.url }); }
        else { doc.text(it.t, x, y + 9); }
        x += w;
        if (i < items.length - 1) { doc.text(sep, x, y + 9); x += sepW; }
      });
      y += 14;

      /* Ringkasan */
      heading("Ringkasan Profesional");
      para(d.about);

      /* Pendidikan */
      var e = d.education;
      heading("Pendidikan");
      rowLR(e.school, e.year);
      para(e.degree + ", " + e.major + ". IPK " + e.gpa + " " + e.gpaScale + ".");
      para("Skripsi: " + e.thesis + ".");

      /* Pengalaman */
      heading("Pengalaman");
      d.experience.forEach(function (x2) {
        need(40);
        rowLR(x2.role, x2.period);
        para(x2.org, { italic: true, gap: 2 });
        x2.points.forEach(bullet);
        y += 4;
      });

      /* Pelatihan */
      heading("Pengalaman Pemateri dan Pelatihan");
      rowLR("Instruktur Pelatihan Asisten Laboratorium", "2024 - 2026");
      d.speaking.forEach(function (s) {
        bullet(s.date + ": " + s.title + ', materi "' + s.topic + '", ' + s.participants + ".");
      });

      /* Proyek */
      heading("Proyek");
      d.projects.forEach(function (p) {
        var line = p.title + ": " + p.desc;
        if (p.url) line += " " + p.url;
        bullet(line);
      });

      /* Keahlian */
      heading("Keahlian");
      d.skills.forEach(function (g) {
        para(g.group + ": " + g.items.map(function (s) { return s.t; }).join(", "), { gap: 3 });
      });

      /* Sertifikasi */
      heading("Sertifikasi");
      d.certificates.forEach(function (s) { bullet(s.title + " - " + s.score + (s.detail ? " (" + s.detail + ")" : "")); });

      doc.setProperties({ title: "CV ATS - " + d.shortName, author: d.shortName, subject: "Curriculum Vitae" });
      doc.save("CV-ATS-Ibnu-Rijal-Al-Qodri.pdf");
    });
  }

  /* ======================= CV KREATIF ======================= */
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  function creativeHTML(d) {
    var c = d.contact, e = d.education;
    function foot(n) {
      return '<div class="pc-foot"><span>' + esc(d.shortName) + ' &middot; CV Kreatif</span><span>Halaman ' + n + " / 2</span></div>";
    }
    var exp = d.experience.map(function (x) {
      return '<div class="pc-card"><div class="pc-top"><strong>' + x.role + "</strong><em>" + x.period + "</em></div>" +
        '<div class="pc-org">' + x.org + "</div><ul>" +
        x.points.slice(0, 3).map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul></div>";
    }).join("");

    var page1 =
      '<div class="pc-page">' +
        '<div class="pc-head">' +
          '<div class="pc-photo"><img src="' + d.photo + '" alt="" onerror="this.parentNode.innerHTML=\'<span>IR</span>\'"></div>' +
          "<div>" +
            "<h1>" + d.name + "</h1>" +
            '<div class="pc-hl">' + d.headline + "</div>" +
            '<div class="pc-tag">' + d.tagline + "</div>" +
            '<div class="pc-contact"><span>' + c.email + "</span><span>" + c.phone + "</span><span>" + c.linkedinShort + "</span><span>IG @" + c.instagram + "</span></div>" +
          "</div>" +
        "</div>" +
        '<div class="pc-h"><i>&sect;01</i><b>Tentang saya</b></div>' +
        '<div class="pc-card"><p>' + d.about + "</p></div>" +
        '<div class="pc-h"><i>&sect;02</i><b>Pengalaman</b></div>' + exp +
        foot(1) +
      "</div>";

    var speak = d.speaking.map(function (s) {
      return '<div class="pc-card"><div class="pc-top"><strong>' + s.title + "</strong><em>" + s.date + "</em></div>" +
        "<p>" + s.topic + " &middot; " + s.participants + "</p></div>";
    }).join("");

    var topics = d.topics.map(function (t, i) {
      return '<div class="pc-card"><strong>' + String(i + 1).padStart(2, "0") + ". " + t.title + "</strong>" +
        '<p style="color:#55627f">' + t.audience + "</p></div>";
    }).join("");

    var proj = d.projects.map(function (p) {
      return '<div class="pc-card"><div class="pc-top"><strong>' + p.title + "</strong></div><p>" + p.desc + "</p></div>";
    }).join("");

    var skills = d.skills.map(function (g) {
      return '<div class="pc-sk"><b>' + g.group + '</b><div class="pc-chips">' +
        g.items.map(function (s) { return '<span class="pc-chip ' + (s.star ? "s" : "") + '">' + s.t + "</span>"; }).join("") + "</div></div>";
    }).join("");

    var certs = d.certificates.map(function (s) {
      return '<span class="pc-chip s">' + s.title + " - " + s.score + "</span>";
    }).join("");

    var page2 =
      '<div class="pc-page">' +
        '<div class="pc-h"><i>&sect;03</i><b>Pengalaman pemateri &amp; pelatihan</b></div><div class="pc-cols">' + speak + "</div>" +
        '<div class="pc-h"><i>&sect;04</i><b>Topik yang bisa saya bawakan</b></div><div class="pc-cols">' + topics + "</div>" +
        '<div class="pc-h"><i>&sect;05</i><b>Pendidikan</b></div>' +
        '<div class="pc-card"><div class="pc-top"><strong>' + e.degree + " &middot; " + e.school + "</strong><em>Lulus " + e.year + " &middot; IPK " + e.gpa + "</em></div>" +
        "<p>Skripsi: " + e.thesis + "</p></div>" +
        '<div class="pc-h"><i>&sect;06</i><b>Proyek</b></div>' + proj +
        '<div class="pc-h"><i>&sect;07</i><b>Keahlian</b></div><div class="pc-card">' + skills + "</div>" +
        '<div class="pc-h"><i>&sect;08</i><b>Sertifikat</b></div><div class="pc-chips">' + certs + "</div>" +
        foot(2) +
      "</div>";

    return '<div class="pc-doc">' + page1 + page2 + "</div>";
  }

  function waitImages(root) {
    var imgs = Array.prototype.slice.call(root.querySelectorAll("img"));
    return Promise.all(imgs.map(function (im) {
      if (im.complete) return null;
      return new Promise(function (res) { im.onload = im.onerror = res; });
    }));
  }

  function creative(d) {
    var root = document.getElementById("print-root");
    return loadScript(LIBS.html2pdf).then(function () {
      root.innerHTML = creativeHTML(d);
      var el = root.firstElementChild;
      var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      return Promise.all([fonts, waitImages(root)]).then(function () {
        return window.html2pdf().set({
          margin: 0,
          filename: "CV-Kreatif-Ibnu-Rijal-Al-Qodri.pdf",
          image: { type: "jpeg", quality: 0.95 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#fdfbf4", scrollX: 0, scrollY: 0 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["css"] }
        }).from(el).save();
      });
    }).then(function () { root.innerHTML = ""; }, function (err) { root.innerHTML = ""; throw err; });
  }

  /* Cadangan: buka dialog cetak (pengguna memilih "Simpan sebagai PDF") */
  function creativePrint(d) {
    var root = document.getElementById("print-root");
    root.innerHTML = creativeHTML(d);
    function clear() { root.innerHTML = ""; window.removeEventListener("afterprint", clear); }
    window.addEventListener("afterprint", clear);
    setTimeout(function () { window.print(); }, 300);
  }

  window.CVPDF = { ats: ats, creative: creative, creativePrint: creativePrint };
})();
