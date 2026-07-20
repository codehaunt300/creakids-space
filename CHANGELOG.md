# Changelog

## v1.1.17
- Mengubah rasio placeholder/cover gambar Buku Cerita menjadi 1:1.
- Menerapkan rasio 1:1 pada card Buku Cerita di halaman koleksi dan homepage.
- Rekomendasi ukuran asset Buku Cerita: 1000x1000 px.

## v1.1.17
- Koreksi panduan ukuran asset gambar menjadi 1000x1000.
- Menambahkan Editor Dr. Ajat, SH., M.Pd. dalam card full-width.
- Hanya Editor yang memakai placeholder foto `assets/images/contributor/editor.png`.
- Menetapkan 11 kontributor tanpa foto.
- Menambahkan 4 profil kontributor baru.
- Menetapkan 14 game dengan urutan judul baru dan asset game-01.png sampai game-14.png.
- Menghapus slot game 15 dan 16 dari data aktif.

## v1.1.17
- Menghapus category badge/tag kategori pada card dan badge kategori pada hero halaman konten.
- Membersihkan copy teknis yang ditujukan untuk pengelola asset dari tampilan website.
- Mengganti deskripsi teknis pada Buku Cerita, Video Animasi, Read Aloud, Games, dan Lagu-lagu dengan copy yang lebih interaktif dan ramah.
- Menambahkan background image global yang statis/fixed di seluruh website.
- Menstandarkan seluruh penggunaan logo menjadi satu file `assets/images/logo/logo.png`.
- Menambahkan favicon browser menggunakan `logo.png`.
- Menambahkan biodata 7 kontributor yang telah diberikan.
- Mempertahankan 9 slot kontributor lainnya untuk data berikutnya.

## v1.1.17
- Memperbaiki `story-banner` pada homepage agar asset Buku Cerita Digital tidak lagi terpotong.
- Menghapus fixed height 190/150px, `overflow: hidden`, shadow, radius, dan `object-fit: cover` dari area gambar Buku Cerita Digital.
- Memperbaiki `cta-visual` pada bagian "Siap Memulai Petualangan Belajar?" agar tidak lagi memiliki frame/background/border tambahan.
- Kedua PNG sekarang ditampilkan utuh dengan `height: auto` dan `object-fit: contain`.
- Semua perubahan versi sebelumnya tetap dipertahankan.

## v1.1.17
- Menghapus background putih dan shadow dari container asset hero di semua halaman.
- Memperbaiki `.hero-img` pada Buku Cerita, Video Animasi, Read Aloud, Games, dan Lagu-lagu.
- Memperbaiki `.hero-visual` pada homepage.
- Memperbaiki `.about-illustration` pada halaman Tentang.
- Menghapus aspect-ratio paksa dan `object-fit: cover`; PNG sekarang mengikuti rasio asli dan ditampilkan apa adanya secara responsif.
- Seluruh perubahan versi sebelumnya tetap dipertahankan.

## v1.1.17
- Menampilkan seluruh asset hero PNG apa adanya tanpa background tambahan.
- Menghapus shadow, border, filter, padding, border-radius, dan dekorasi placeholder pada gambar/wadah hero.
- Transparansi asli PNG tetap dipertahankan.
- Semua perubahan versi sebelumnya tetap dipertahankan.

## v1.1.17
- Menerapkan perubahan format gambar ke PNG di seluruh halaman tanpa terkecuali.
- Semua referensi `.jpg` dan `.jpeg` pada HTML, CSS, JavaScript, dan dokumentasi diubah menjadi `.png`.
- Asset JPG/JPEG lokal yang tersedia dikonversi menjadi salinan PNG agar halaman tetap berfungsi.
- Semua fitur versi sebelumnya tetap dipertahankan.

## v1.1.17
- Mengubah format asset foto kontributor dari `.png` menjadi `.png`.
- Placeholder kontributor sekarang menggunakan `contributor-01.png` sampai `contributor-16.png`.
- PNG dipilih agar foto/ilustrasi dengan background transparan tidak berubah menjadi background putih.
- Semua perubahan dari v1.1.9 tetap dipertahankan.

## v1.1.17
- Memperbaiki navbar homepage `index.html` yang sebelumnya memakai class `nav-links` secara salah.
- Mengembalikan navbar homepage ke struktur asli v1.1.6 dengan `main-nav`, sehingga styling dan hamburger mobile kembali bekerja dengan `home.css` dan `home.js`.
- Menyamakan navbar halaman konten dengan struktur v1.1.6.
- Menambahkan active state yang benar pada masing-masing halaman.
- Mempertahankan desain card kontributor dan foto kontributor di tengah card dari v1.1.8.

## v1.1.5
- Memperbaiki homepage mobile agar tidak bergeser horizontal / bergoyang.
- Menambahkan proteksi overflow horizontal pada halaman utama dan halaman konten.
- Mengubah sistem Buku Cerita dari tombol download menjadi tombol `Baca Buku`.
- Menambahkan 16 link Google Drive buku sesuai daftar terbaru pengguna.
- Buku dibuka di tab baru melalui Google Drive untuk dibaca langsung.
- Semua fitur dan konten versi sebelumnya tetap dipertahankan.

## v1.1.4
- Memperbarui preview YouTube di homepage agar memakai thumbnail YouTube asli.
- Menyesuaikan judul preview dengan daftar video yang diberikan.
- Preview Video Animasi, Read Aloud, dan Lagu-lagu kini membuka video YouTube terkait.
- Seluruh struktur dan konten v1.1.3 lainnya dipertahankan.

## v1.1.3
- Menyesuaikan halaman Tentang Kami dengan isi dan layout referensi terbaru.
- Menambahkan 14 link Wordwall ke halaman Games.
- Menghapus duplikasi link game yang sama dari data baru, tanpa menghapus slot game lama.
- Mempertahankan 2 placeholder game tambahan sehingga total tetap 16.
- Mengubah rasio preview game dari 1:1 menjadi 4:3.
- Mengubah ukuran dummy asset game menjadi 1200 × 900 px.
- Mempertahankan seluruh fitur, halaman, konten video, buku, PDF, navbar, dan homepage v1.1.2.

## v1.1.2
- Memperbaiki YouTube Error 153 / Video player configuration error.
- Mengganti URL embed ke `www.youtube.com/embed`.
- Menambahkan `referrerpolicy="strict-origin-when-cross-origin"` pada iframe.
- Menambahkan fallback khusus saat website dibuka langsung melalui `file://`.
- Saat `file://`, poster video dan tombol buka YouTube ditampilkan agar tidak muncul player error.
- Embed aktif saat website dijalankan melalui Live Server, localhost, GitHub Pages, atau domain HTTPS.
- Semua konten dan fitur versi sebelumnya tetap dipertahankan.

## v1.1.1
- Menambahkan 12 link YouTube Video Animasi dan mengaktifkan embed.
- Menambahkan 14 link YouTube Video Read Aloud dan mengaktifkan embed.
- Menambahkan 13 link YouTube Lagu-lagu Pembelajaran dan mengaktifkan embed.
- Memperbarui judul video sesuai daftar terbaru dari pengguna.
- Mempertahankan homepage, navbar, struktur assets, buku/PDF, games, dan fitur versi sebelumnya.

## v1.1.0
- Mengembalikan desain homepage ke versi landing page sebelumnya yang lebih lengkap.
- Mempertahankan struktur folder `assets/`.
- Homepage sekarang menggunakan asset nyata/dummy dari folder `assets/images/`.
- Mempertahankan navbar multi-page.
- Mempertahankan 16 buku, 12 video animasi, 14 Read Aloud, 16 game, dan 13 lagu di halaman masing-masing.
- Menambahkan `assets/css/home.css`.
- Menambahkan `assets/js/home.js`.
- Menambahkan `VERSION.txt`.
- Menampilkan kode versi di footer homepage.
