# 🎌 Website Official LPKS Arima Persada (PT. Arima Bangkit Persada)

Situs web profil perusahaan (*Company Profile*) dan sistem pendaftaran online resmi untuk **LPKS Arima Persada** — Lembaga Pelatihan Kerja Swasta persiapan program Magang (*Ginou Jisshusei*), *Tokutei Ginou* (SSW), dan *Gijinkoku* (Engineer) ke Jepang.

---

## 🌟 Fitur Utama

- **🎨 Desain Modern & Responsif**:
  - Tampilan bersih dan elegan dengan skema warna khas: Merah Khas Jepang (`#D90429`) & Biru Profesional (`#0A3155`).
  - Layout serbaguna yang kompatibel penuh di perangkat desktop, tablet, dan *smartphone*.
- **✨ Efek Interaktif Visual**:
  - **Sticky Glassmorphism Header Navbar**: Navigasi atas transparan dengan efek *blur* saat halaman digulir.
  - **Smooth Scroll & Scroll-Reveal Animations**: Animasi elemen muncul secara halus menggunakan *Intersection Observer API*.
  - **Dynamic Counter Stat**: Efek angka berjalan pada Hero Section untuk menampilkan statistik jumlah alumni dan peserta.
  - **Interactive Program Tabs**: Panel interaktif untuk melihat rincian program (Magang, Tokutei Ginou, & Gijinkoku).
  - **Lightbox Gallery**: Penampil foto interaktif ukuran penuh untuk dokumentasi kegiatan, fasilitas, dan asrama.
- **📱 Integrasi WhatsApp Direct Form**:
  - Formulir pendaftaran calon siswa yang secara otomatis menyusun format teks dan meneruskan data pendaftar langsung ke WhatsApp Official (`+62 812-8267-4707`).
- **⚡ Performa Ringan & Bebas Dependensi**:
  - Murni dibangun menggunakan HTML5, Modern CSS3, dan Vanilla JavaScript tanpa *framework* atau *library* berat.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** — Struktur web semantik.
- **CSS3 Modern** — Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism, & Animasi.
- **Vanilla JavaScript (ES6+)** — Logika interaktif (*Counter*, *Tabs*, *Lightbox*, *Scroll Reveal*, & *Form Sanitizer*).
- **Google Fonts** — *Plus Jakarta Sans* / *Poppins*.

---

## 📁 Struktur Berkas Proyek

```text
lpks-arima-persada/
├── css/
│   └── style.css          # Styling utama, variabel warna (#D90429 & #0A3155), & media queries
├── js/
│   └── script.js         # Logika interaktif (Observer, Counter, Tabs, Lightbox, WA Integration)
├── images/
│   ├── gallery/          # Dokumentasi kegiatan, fasilitas, & asrama
│   └── logo.png          # Logo resmi LPKS Arima Persada
├── index.html            # File HTML utama (Landing Page & Form Pendaftaran)
└── README.md             # Dokumentasi proyek
