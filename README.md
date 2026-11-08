# CV Interaktif - Ibnu Rijal Al Qodri, S.Pd.

Website CV statis (HTML, CSS, JavaScript murni) bertema buku catatan matematika.
Punya mode gelap, tombol sticky, dan unduhan CV Kreatif serta CV ATS dalam bentuk PDF.

## Struktur folder

```
cv-ibnu/
  index.html
  css/style.css
  js/data.js      <- SEMUA ISI CV ada di sini
  js/app.js       <- menampilkan data ke halaman
  js/pdf.js       <- pembuat PDF (ATS dan Kreatif)
  assets/
    foto.jpg                  <- foto profilmu
    sertifikat-english.pdf    <- file sertifikat English Proficiency Test
    sertifikat-excel.pdf      <- file sertifikat Microsoft Excel Associate
    logo.svg / logo.png       <- logo monogram AQ (juga dipakai di header)
    favicon.svg, favicon.ico, favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png
    og.png                    <- (opsional) gambar preview 1200x630 px
```

Foto, sertifikat, dan logo sudah ada di folder `assets/`.

## Mengubah isi CV

Buka `js/data.js`, ubah teksnya, simpan. Halaman web, CV ATS, dan CV Kreatif ikut berubah.
Beberapa hal yang bisa kamu isi:

- `projects[1].url` : alamat Website Jurusan (tombol "Kunjungi" muncul jika diisi)
- `photo` : nama file fotomu
- `certificates[].file` : nama file sertifikat

## Mencoba di komputer

Cara paling mudah: buka folder di VS Code, pasang ekstensi **Live Server**, lalu klik "Go Live".
Membuka `index.html` langsung dengan klik dua kali juga bisa, tetapi tombol unduh CV Kreatif
lebih andal jika dijalankan lewat server (Live Server atau setelah di-hosting).
Tombol unduh membutuhkan koneksi internet karena memuat library PDF dari cdnjs.

## Deploy gratis

Pilih salah satu. Semuanya cocok untuk situs statis tanpa build.

**Netlify (paling cepat):** buka app.netlify.com/drop, lalu seret folder `cv-ibnu` ke halaman itu.

**GitHub Pages:** upload isi folder ke repository, lalu Settings > Pages > pilih branch `main` dan folder `/ (root)`.

**Cloudflare Pages / Vercel:** hubungkan repository GitHub. Biarkan Build command kosong dan Output directory diisi `/` (atau kosong).

## Sebelum dibagikan

- [ ] Taruh `foto.jpg` dan kedua file sertifikat di `assets/`
- [ ] Isi `url` Website Jurusan (jika ingin ditampilkan)
- [ ] Coba tombol unduh CV Kreatif dan CV ATS, lalu cek hasil PDF-nya
- [ ] Buka di HP, uji mode terang dan gelap
- [ ] (Opsional) tambahkan `assets/og.png` untuk preview link di WhatsApp/LinkedIn
- [ ] Nomor telepon di `data.js` tetap terlihat di kode sumber. Tombol WhatsApp tidak menampilkan angkanya di halaman, tetapi orang yang membuka kode sumber tetap bisa melihatnya.
