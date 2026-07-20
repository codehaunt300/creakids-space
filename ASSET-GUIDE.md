# PANDUAN ASSET CREAKIDS SPACE

## Struktur folder

```text
assets/
├── css/
│   └── style.css
├── js/
│   ├── content-data.js
│   └── main.js
├── images/
│   ├── logo/
│   │   └── creakids-logo.png
│   ├── hero/
│   │   ├── home-hero.png
│   │   ├── books-hero.png
│   │   ├── video-hero.png
│   │   ├── readaloud-hero.png
│   │   ├── games-hero.png
│   │   ├── songs-hero.png
│   │   └── about-hero.png
│   ├── books/
│   │   └── book-01.png ... book-16.png
│   ├── games/
│   │   └── game-01.png ... game-16.png
│   └── posters/
│       ├── animasi/animasi-01.png ... animasi-12.png
│       ├── readaloud/readaloud-01.png ... readaloud-14.png
│       └── lagu/lagu-01.png ... lagu-13.png
└── downloads/
    └── book-01.pdf ... book-16.pdf
```

## Ukuran desain yang direkomendasikan

| Asset | Ukuran file yang disarankan | Rasio |
|---|---:|---:|
| Logo utama | 600 × 180 px | 10:3 |
| Hero/banner halaman | 1600 × 900 px | 16:9 |
| Cover buku | 1000 × 1000 px | 4:5 |
| Poster / thumbnail video | 1280 × 720 px | 16:9 |
| Preview game | 1000 × 1000 px | 1:1 |

### Catatan desain
- Gunakan JPG kualitas 75–85% untuk ukuran file yang ringan.
- Gunakan PNG untuk logo/transparansi.
- Simpan teks penting minimal 5% dari tepi gambar agar tidak terpotong.
- Untuk YouTube, thumbnail 1280×720 adalah ukuran yang paling aman.
- Untuk buku, desain 800×1000 px menjaga cover tetap tajam namun tidak terlalu berat.

## Cara mengganti gambar

Contoh:
1. Siapkan cover buku baru.
2. Rename menjadi `book-01.png`.
3. Timpa file `assets/images/books/book-01.png`.
4. Refresh browser.

Tidak perlu mengubah HTML.

Hal yang sama berlaku untuk:
- `game-01.png` sampai `game-16.png`
- poster video jika link YouTube belum diisi
- gambar hero

## Cara memasukkan link YouTube

Buka:

`assets/js/content-data.js`

Contoh:

```js
{
  title: "Dina Suka Donat",
  poster: "assets/images/posters/animasi/animasi-01.png",
  youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
}
```

Kamu juga bisa mengisi:

```js
youtube: "https://youtu.be/XXXXXXXXXXX"
```

atau:

```js
youtube: "XXXXXXXXXXX"
```

Website akan otomatis membuat YouTube embed.

## Cara memasukkan link website game

Di `assets/js/content-data.js`:

```js
{
  title: "Susun Benda",
  image: "assets/images/games/game-01.png",
  url: "https://alamat-website-game.com"
}
```

## Download buku

Tombol download sudah terhubung ke:

`assets/downloads/book-01.pdf` sampai `book-16.pdf`

Cukup ganti PDF dummy dengan PDF buku asli dan pertahankan nama filenya.


## Update v1.1.3
- Asset preview game sekarang menggunakan rasio 4:3.
- Ukuran rekomendasi: 1200 × 900 px.
- `game-01.png` sampai `game-16.png` sudah dibuat ulang dengan ukuran tersebut.


## Update v1.1.5 — Buku Google Drive
- Sistem buku tidak lagi menggunakan PDF lokal untuk tombol download.
- Setiap buku sekarang memakai `readUrl` di `assets/js/content-data.js`.
- Tombol pada halaman buku berubah menjadi `Baca Buku` dan membuka Google Drive di tab baru.


## v1.1.7 Contributor Update

Contributor card:
- Photo: 600x600 px
- Ratio: 1:1
- Display: circular profile image
- Content: photo, name, short biography

Layout:
- Desktop: 4 columns
- Mobile: 2 columns


## v1.1.8 Update
- Navbar seluruh halaman mengikuti struktur v1.1.6.
- Foto kontributor wajib berada di tengah card.
- Card kontributor menggunakan alignment center.


## v1.1.17 Navbar Fix
Homepage (`index.html`) memakai struktur:
- `.nav-wrap`
- `.nav-toggle`
- `.main-nav`

Halaman konten memakai:
- `.navbar`
- `.menu-btn`
- `.nav-links`

Jangan menyamakan class navbar homepage dengan halaman konten karena keduanya memakai stylesheet/JavaScript yang berbeda.


## v1.1.17 Contributor PNG Update

Folder:
`assets/images/contributor/`

Gunakan file:
- `contributor-01.png`
- `contributor-02.png`
- ...
- `contributor-16.png`

Spesifikasi:
- Format: **PNG**
- Rasio: **1:1**
- Rekomendasi ukuran: **600 x 600 px**
- Background: **transparan** direkomendasikan
- Hindari JPG untuk asset kontributor jika ingin mempertahankan transparansi.

Tampilan:
- Foto tetap berada di tengah card.
- Desktop: 4 card per baris.
- Mobile: 2 card per baris.


## v1.1.17 Global PNG Standard

Mulai versi ini, format asset gambar utama di seluruh website menggunakan **PNG**.

Berlaku untuk semua halaman tanpa terkecuali:
- Beranda
- Buku Cerita
- Video Animasi
- Read Aloud
- Games
- Lagu-lagu
- Kontributor
- Tentang

Gunakan ekstensi `.png` untuk asset gambar lokal agar konsisten.
Untuk asset yang memerlukan transparansi, PNG akan mempertahankan background transparan.


## v1.1.17 Hero Asset Rule

Untuk semua asset hero:
- Format: **PNG**
- Ditampilkan **apa adanya**
- Tidak memakai background tambahan
- Tidak memakai shadow
- Tidak memakai border
- Tidak memakai filter
- Tidak memakai padding dekoratif
- Tidak memakai border-radius
- Transparansi PNG dipertahankan

Gunakan file PNG dengan canvas/transparansi final sesuai tampilan yang diinginkan.


## v1.1.17 — Global Hero PNG Rule

Aturan ini berlaku untuk **semua halaman**:

- Beranda
- Buku Cerita
- Video Animasi
- Read Aloud
- Games
- Lagu-lagu
- Tentang
- Halaman lain yang memakai asset hero

Asset hero:
- Format: **PNG**
- Disarankan: PNG transparan
- Tidak diberi background putih oleh container
- Tidak diberi shadow
- Tidak diberi border
- Tidak diberi border-radius
- Tidak diberi filter
- Tidak di-crop dengan `object-fit: cover`
- Tidak dipaksa ke rasio 16:9
- Ditampilkan mengikuti rasio asli asset
- Hanya dibuat responsif dengan lebar maksimum 100%

Catatan: bila background sudah menjadi bagian dari piksel di dalam file PNG itu sendiri, CSS tidak menghapus background tersebut. Untuk hasil transparan, file PNG sumber harus benar-benar memiliki background transparan.


## v1.1.17 — Homepage Hero Asset Fix

Khusus asset hero di homepage:

### Buku Cerita Digital
Selector: `.story-banner`

- PNG tampil utuh.
- Tidak dipotong.
- Tidak memakai fixed height.
- Tidak memakai `object-fit: cover`.
- Tidak memakai shadow.
- Tidak memakai background container.
- Tidak memakai border-radius container.
- Rasio asli PNG dipertahankan.

### CTA / About
Selector: `.cta-visual`

- PNG tampil apa adanya.
- Tidak memakai frame/background transparan.
- Tidak memakai border.
- Tidak memakai shadow.
- Tidak memakai clipping.
- Rasio asli PNG dipertahankan.

Catatan:
Background utama section berwarna pastel/ungu tetap menjadi bagian desain section. Yang dihapus adalah dekorasi khusus pada **container gambar asset**, bukan background section keseluruhan.


## v1.1.17 — Global Asset Standard

### Logo
Gunakan satu file:
`assets/images/logo/logo.png`

File ini digunakan pada:
- navbar homepage
- navbar seluruh halaman konten
- halaman Tentang
- bagian kontak
- favicon/tab browser

Mengganti `logo.png` akan memperbarui identitas logo yang direferensikan di seluruh website.

### Static Background
Gunakan:
`assets/images/backgrounds/site-background.png`

Background diterapkan ke seluruh website dengan posisi fixed/static saat halaman di-scroll.

Rekomendasi:
- PNG
- 1920 x 1080 px atau lebih besar
- desain ringan agar teks tetap mudah dibaca


## v1.1.17 — Contributor & Games Update

### Editor
- Foto placeholder: `assets/images/contributor/editor.png`
- Ukuran rekomendasi: **1000x1000 px**
- Rasio: **1:1**
- Hanya Editor yang memakai foto.

### Kontributor
- Total: **11 orang**
- Tanpa asset foto.
- Card berisi nama, biodata, dan Instagram bila tersedia.
- Desktop: 4 card per baris.

### Games
- Total: **14 game**
- Asset aktif: `game-01.png` sampai `game-14.png`
- Ukuran asset gambar: **1000x1000 px**


## v1.1.17 — Book Image Ratio Update

### Buku Cerita
- Format: PNG
- Rasio: **1:1**
- Rekomendasi ukuran: **1000x1000 px**
- Berlaku untuk placeholder/cover Buku Cerita di halaman Buku Cerita dan homepage.
